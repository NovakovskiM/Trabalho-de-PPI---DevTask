import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

interface ITarefa {
    id: string;
    titulo: string;
    descricao: string;
    status: string;
    dataCriacao?: string;
}

const tarefas: ITarefa[] = [
    {
        id: "1",
        titulo: "Preparar apresentação",
        descricao: "Explicar o funcionamento do DevTask",
        status: "Em andamento",
        dataCriacao: new Date().toISOString()
    }
];

app.get("/tarefas", (req: Request, res: Response) => {

    res.status(200).json(tarefas);

});

app.post("/tarefas", (req: Request, res: Response) => {

    const { titulo, descricao, status } = req.body;

    if (!titulo || !descricao || !status) {

        return res.status(400).json({
            mensagem: "Todos os campos são obrigatórios."
        });

    }

    const novaTarefa: ITarefa = {
        id: Date.now().toString(),
        titulo,
        descricao,
        status,
        dataCriacao: new Date().toISOString()
    };

    tarefas.push(novaTarefa);

    res.status(201).json(novaTarefa);

});

app.listen(PORTA, () => {

    console.log(`Servidor rodando em http://localhost:${PORTA}`);

});

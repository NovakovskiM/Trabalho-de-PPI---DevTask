import express from "express";
import cors from "cors";

const app = express();
const PORTA = 3000;

app.use(cors());
app.use(express.json());

// ARRAY DE TAREFAS
const tarefas = [
  {
    id: "1",
    titulo: "Preparar apresentação",
    descricao: "Explicar o funcionamento do DevTask",
    status: "Em andamento"
  }
];

// ROTA GET
app.get("/tarefas", (req, res) => {
    res.json(tarefas);
});

app.post("/tarefas", (req, res) => {

    const { titulo, descricao, status } = req.body;

    const novaTarefa = {
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
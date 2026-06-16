interface ITarefa {
    id: string;
    titulo: string;
    descricao: string;
    status: string;
}

const API: string = "http://localhost:3000/tarefas";

const form = document.getElementById("formCadastro") as HTMLFormElement;
const titulo = document.getElementById("titulo") as HTMLInputElement;
const descricao = document.getElementById("descricao") as HTMLTextAreaElement;
const statusTarefa = document.getElementById("status") as HTMLSelectElement;
const lista = document.getElementById("listaTarefas") as HTMLDivElement;

async function carregarTarefas(): Promise<void> {

    const resposta: Response = await fetch(API);

    const tarefas: ITarefa[] = await resposta.json();

    lista.innerHTML = "";

    tarefas.forEach((tarefa: ITarefa) => {

        const card: HTMLDivElement = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${tarefa.titulo}</h3>
            <p>${tarefa.descricao}</p>
            <p>Status: ${tarefa.status}</p>
        `;

        lista.appendChild(card);
    });
}

form.addEventListener("submit", async (e: SubmitEvent): Promise<void> => {

    e.preventDefault();

    await fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo.value,
            descricao: descricao.value,
            status: statusTarefa.value
        })
    });

    await carregarTarefas();

    form.reset();
});

carregarTarefas();

export {};
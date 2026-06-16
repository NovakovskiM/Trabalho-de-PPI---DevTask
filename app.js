const API = "http://localhost:3000/tarefas";

const form = document.getElementById("formCadastro");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const statusTarefa = document.getElementById("status");
const lista = document.getElementById("listaTarefas");

async function carregarTarefas() {
    const resposta = await fetch(API);
    const tarefas = await resposta.json();

    lista.innerHTML = "";

    tarefas.forEach((tarefa) => {
        const card = document.createElement("div");

        card.className = "card";

        card.innerHTML = `
            <h3>${tarefa.titulo}</h3>
            <p>${tarefa.descricao}</p>
            <p>Status: ${tarefa.status}</p>
        `;

        lista.appendChild(card);
    });
}

form.addEventListener("submit", async (e) => {
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

    carregarTarefas();
    form.reset();
});

carregarTarefas();
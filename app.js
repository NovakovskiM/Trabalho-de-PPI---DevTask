const API = "http://localhost:3000/tarefas";

const form = document.getElementById("formCadastro");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const statusTarefa = document.getElementById("status");
const lista = document.getElementById("listaTarefas");

async function carregarTarefas() {

    try {

        const resposta = await fetch(API);

        if (!resposta.ok) {
            throw new Error("Erro ao carregar tarefas");
        }

        const tarefas = await resposta.json();

        lista.innerHTML = "";

        tarefas.forEach((tarefa) => {

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `
                <h3>${tarefa.titulo}</h3>
                <p>${tarefa.descricao}</p>
                <p><strong>Status:</strong> ${tarefa.status}</p>
            `;

            lista.appendChild(card);

        });

    } catch (erro) {

        console.error(erro);

        lista.innerHTML = `
            <p>Erro ao carregar tarefas.</p>
        `;

    }
}

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    try {

        const resposta = await fetch(API, {
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

        if (!resposta.ok) {
            throw new Error("Erro ao cadastrar tarefa");
        }

        await carregarTarefas();

        form.reset();

    } catch (erro) {

        console.error(erro);

        alert("Não foi possível cadastrar a tarefa.");

    }
});

carregarTarefas();

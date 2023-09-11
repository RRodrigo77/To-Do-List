document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput"); // O campo de entrada
    const taskForm = document.getElementById("taskForm"); // O formulário

    // Adicione um ouvinte de evento de envio ao formulário
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Impedir o envio padrão do formulário

        const valorInput = taskInput.value;

        if (valorInput !== "") {       
            const task = valorInput;
            const listadetask = document.getElementById('listtask');
            const listItem = document.createElement('li');
            listItem.textContent = task;
            listadetask.appendChild(listItem);

            // Limpar o campo de entrada após adicionar a tarefa
            taskInput.value = "";
        }
    });
});

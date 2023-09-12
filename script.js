document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("timeInput");
    const taskForm = document.getElementById("taskForm");
    const listadetask = document.getElementById('listtask');
    const clearButton = document.getElementById('clearButton');
    const submitButton = document.getElementById('submitButton');
    const totalTimeDisplay = document.getElementById('totalTime');

    let totalMinutes = 0;
    const existingTasksSet = new Set();

    function atualizarTempoTotal() {
        totalMinutes = 0;
        listadetask.querySelectorAll('li').forEach(function(existingTask) {
            const taskText = existingTask.textContent;
            const regex = /Tempo: (\d+) minutos/;
            const match = taskText.match(regex);
            if (match && match[1]) {
                totalMinutes += parseInt(match[1]);
            }
        });
        totalTimeDisplay.textContent = `Tempo Total: ${totalMinutes} minutos`;
    }

    function adicionarTarefa() {
        const valorInput = taskInput.value;
        const valorTempo = parseInt(timeInput.value);

        if (valorInput.trim() !== "" && !isNaN(valorTempo) && valorTempo > 0) {
            if (!existingTasksSet.has(valorInput.trim())) {
                const listItem = document.createElement('li');
                listItem.textContent = `${valorInput} --   Tempo: ${valorTempo} minutos`;
                listadetask.appendChild(listItem);

                existingTasksSet.add(valorInput.trim());

                taskInput.value = "";
                timeInput.value = "";

                atualizarTempoTotal();
            } else {
                alert("Essa Task já existe na lista!");
            }
        }
    }

    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();
        adicionarTarefa();
    });

    submitButton.addEventListener("click", function() {
        adicionarTarefa();
    });
    
    clearButton.addEventListener("click", function() {
        listadetask.innerHTML = "";
        existingTasksSet.clear();
        totalMinutes = 0;
        totalTimeDisplay.textContent = "Tempo Total: 0 minutos";
    });

    taskInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            timeInput.focus();
        }
    });

    timeInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            adicionarTarefa();
        }
    });
});

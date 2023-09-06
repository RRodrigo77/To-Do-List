function getValueOfInput() {
    let valorInput = document.getElementById('task').value;
    console.log(valorInput);

    if (valorInput !== "" && valorInput !== null && valorInput !== undefined) {       
        const task = valorInput;
    }
    
    const listadetask = document.getElementById('listtask')
    listadetask.innerHTML += `<li>${task}</li>`
}


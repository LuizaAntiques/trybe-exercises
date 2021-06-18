function statesOptions() {
    const select = document.getElementById('input-state');
    const options = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

    for (let index = 0; index < options.length; index += 1) {
        const newOption = document.createElement('option');
        newOption.innerText = options[index];
        newOption.value = options[index];

        console.log(options[index]);

        select.appendChild(newOption);
    }
}
statesOptions();

function dateCheck() {
    const date = document.getElementById('start-date');
    const regex = /^\d\d\/\d\d\/\d\d\d\d$/;
    let message;

    if (date.valeu.length === 0) {
        alert('A data não foi preenchida!');
    }

    if (!regex.test(date.value)) {
        message = 'Data: Formato inválido';
        return message;
    }

}
dateCheck();

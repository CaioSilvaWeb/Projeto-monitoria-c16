const meuStatus = document.querySelector('#status');
const fotoStatus = document.querySelector('#carinha');
let meuBtn = document.querySelector('#proximo');

meuBtn.addEventListener('click', () =>{
    if(meuBtn.value == 'primeiro'){
        meuStatus.innerText = 'Meia boca';
        fotoStatus.src = 'img/medio.png';
        meuBtn.value = 'segundo';
    }else if(meuBtn.value == 'segundo'){
        meuStatus.innerText = 'insatisfeito';
        fotoStatus.src = 'img/triste.png';
        meuBtn.value = 'terceiro';
    }else{
        meuStatus.innerText = 'Satisfeito';
        fotoStatus.src = 'img/feliz.png';
        meuBtn.value = 'primeiro'
    }
});
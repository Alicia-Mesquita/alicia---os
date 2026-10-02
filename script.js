const sobreMim = document.querySelector('.desktop-icon');
const janelaSobreMim = document.querySelector('#sobre-mim');

const iconeCurriculo = document.querySelector('#icone-curriculo');
const janelaCurriculo = document.querySelector('#curriculo');

const iconeProjetos = document.querySelector('#icone-projetos');
const janelaProjetos = document.querySelector('#experiencia');

const iconeHabilidades = document.querySelector('#icone-habilidades');
const janelaHabilidades = document.querySelector('#habilidades');

const iconeContato = document.querySelector('#icone-contato');
const janelaContato = document.querySelector('#contato');

iconeHabilidades.addEventListener('click', function() {
    janelaHabilidades.style.display = 'block';
    document.querySelector('.desktop').classList.add('janela-aberta');
});

iconeContato.addEventListener('click', function() {
    janelaContato.style.display = 'block';
});

iconeProjetos.addEventListener('click', function() {
    janelaProjetos.style.display = 'block';
});

sobreMim.addEventListener('click', function() {
    janelaSobreMim.style.display = 'block';
});

iconeCurriculo.addEventListener('click', function() {
    janelaCurriculo.style.display = 'block';
});

const botoesFechar = document.querySelectorAll('.close-button');

botoesFechar.forEach(function(botao) {
    botao.addEventListener('click', function() {
        botao.closest('.window').style.display = 'none';
document.querySelector('.desktop').classList.remove('janela-aberta');
    });
});
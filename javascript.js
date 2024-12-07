var pergunta = 1
var enunciado = document.getElementById('elemento1')
var botao1 = document.getElementById('elemento2') // botao 1
var botao2 = document.getElementById('elemento3') // botao 2
var botao3 = document.getElementById('elemento4') // botao 3
var botao4 = document.getElementById('elemento5') // botao 4

botao1.addEventListener('click', respostaErrada)
botao2.addEventListener('click', respostaCerta)
botao3.addEventListener('click', respostaErrada)
botao4.addEventListener('click', respostaErrada)


function respostaErrada() {
    window.location.href = "index.html";
    console.log(pergunta)
}
function respostaCerta() {
    pergunta++
    if (pergunta == 2) {
        console.log(pergunta)
        enunciado.innerText = `${pergunta}. Em que dia se comemora a páscoa?`
        botao1.innerText = '24'
        botao2.innerText = 'nenhum'
        botao3.innerText = 'primeiro domingo'
        botao4.innerText = 'entre 22 de março e 25 de abril'
        botao1.removeEventListener('click', respostaErrada)
        botao2.removeEventListener('click', respostaCerta)
        botao3.removeEventListener('click', respostaErrada)
        botao4.removeEventListener('click', respostaErrada)
        botao1.addEventListener('click', respostaErrada)
        botao2.addEventListener('click', respostaErrada)
        botao3.addEventListener('click', respostaErrada)
        botao4.addEventListener('click', respostaCerta)
    }
    else if (pergunta == 3) {
        console.log(pergunta)
        enunciado.innerText = `${pergunta}. O que significa a sigla HTML?`
        botao1.innerText = 'Havana Tanto Muito Legal'
        botao2.innerText = 'Hypertext Marking Language'
        botao3.innerText = 'Hipertext Markup Language'
        botao4.innerText = 'Hypertext Markup Language'
        botao1.removeEventListener('click', respostaErrada)
        botao2.removeEventListener('click', respostaErrada)
        botao3.removeEventListener('click', respostaErrada)
        botao4.removeEventListener('click', respostaCerta)
        botao1.addEventListener('click', respostaErrada)
        botao2.addEventListener('click', respostaErrada)
        botao3.addEventListener('click', respostaErrada)
        botao4.addEventListener('click', respostaCerta) 
    }
    else if (pergunta == 4) {
        console.log(pergunta)
        enunciado.innerText = `${pergunta}. Qual é o IDH do Afeganistão?`
        botao1.innerText = '0,654'
        botao2.innerText = '0,852'
        botao3.innerText = '0,511'
        botao4.innerText = '0,485'
        botao1.removeEventListener('click', respostaErrada)
        botao2.removeEventListener('click', respostaErrada)
        botao3.removeEventListener('click', respostaErrada)
        botao4.removeEventListener('click', respostaCerta)
        botao1.addEventListener('click', respostaErrada)
        botao2.addEventListener('click', respostaErrada)
        botao3.addEventListener('click', respostaCerta)
        botao4.addEventListener('click', respostaErrada)
    }
    else if (pergunta == 5) {
        console.log(pergunta)
        enunciado.innerText = `${pergunta}. Quantos segundos tem em uma hora?`
        botao1.innerText = '3600'
        botao2.innerText = '60'
        botao3.innerText = '180'
        botao4.innerText = '6000'
        botao1.removeEventListener('click', respostaErrada)
        botao2.removeEventListener('click', respostaErrada)
        botao3.removeEventListener('click', respostaCerta)
        botao4.removeEventListener('click', respostaErrada)
        botao1.addEventListener('click', respostaCerta)
        botao2.addEventListener('click', respostaErrada)
        botao3.addEventListener('click', respostaErrada)
        botao4.addEventListener('click', respostaErrada)
    }
    else if (pergunta == 6) {
        console.log(pergunta)
        enunciado.innerText = `${pergunta}. Em que ano o Fortnite foi criado?`
        botao1.innerText = '2012'
        botao2.innerText = '2017'
        botao3.innerText = '2011'
        botao4.innerText = '2020'
        botao1.removeEventListener('click', respostaCerta)
        botao2.removeEventListener('click', respostaErrada)
        botao3.removeEventListener('click', respostaErrada)
        botao4.removeEventListener('click', respostaErrada)
        botao1.addEventListener('click', respostaErrada)
        botao2.addEventListener('click', respostaErrada)
        botao3.addEventListener('click', respostaCerta)
        botao4.addEventListener('click', respostaErrada)
    }
    else if (pergunta == 7) {
        console.log(pergunta)
        enunciado.innerText = `${pergunta}. Um relógio cumprimentou duas toras de madeira, que horas são?`
        botao1.innerText = 'Quê?'
        botao2.innerText = '00:00'
        botao3.innerText = 'Sete de quarenta e seis'
        botao4.innerText = 'Oito horas'
        botao1.removeEventListener('click', respostaErrada)
        botao2.removeEventListener('click', respostaErrada)
        botao3.removeEventListener('click', respostaCerta)
        botao4.removeEventListener('click', respostaErrada)
        botao1.addEventListener('click', respostaErrada)
        botao2.addEventListener('click', respostaErrada)
        botao3.addEventListener('click', respostaErrada)
        botao4.addEventListener('click', respostaCerta)
    }
    else if (pergunta == 8) {
        console.log(pergunta)
        enunciado.innerText = `${pergunta}. Se ontem fosse amanhã, hoje seria segunda. Que dia é hoje?`
        botao1.innerText = 'Segunda'
        botao2.innerText = 'Terça'
        botao3.innerText = 'Quarta'
        botao4.innerText = 'Quinta'
        botao1.removeEventListener('click', respostaErrada)
        botao2.removeEventListener('click', respostaErrada)
        botao3.removeEventListener('click', respostaErrada)
        botao4.removeEventListener('click', respostaCerta)
        botao1.addEventListener('click', respostaErrada)
        botao2.addEventListener('click', respostaErrada)
        botao3.addEventListener('click', respostaCerta)
        botao4.addEventListener('click', respostaErrada)
    }
}
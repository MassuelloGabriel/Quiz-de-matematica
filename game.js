const input = document.getElementById("input");
const output = document.getElementById("output");

const p1name = localStorage.getItem("p1name");
const p2name = localStorage.getItem("p2name");

console.log(p1name, p2name)

let p1Score, p2Score, contPerg, word;

inicializar();
function inicializar() {
    output.style.display = "none";

    document.getElementById("p1Name").textContent = p1name + ":";
    document.getElementById("p2Name").textContent = p2name + ":";
    
    p1Score = 0;
    p2Score = 0;
    contPerg = 0;
    word = "";

    mudaPlacar();
    mudaVez();
}

function mudaPlacar() {
    document.getElementById("p1Score").textContent = p1Score;
    document.getElementById("p2Score").textContent = p2Score;
}

function mudaVez() {
    let p;
    let r = getVez();
    if(r === p1name) { 
        p = p2name 
    } else {
        p = p1name
    }
    document.getElementById("playerQuestion").textContent = p;
    document.getElementById("playerAnswer").textContent = r;
}

function getVez() {
    if(contPerg % 2 === 0) {
        return  p1name
    } else {
        return  p2name 
    }
}

function send() {
    word = document.getElementById("word").value.trim().toUpperCase();
    if (word.length >= 5) {
        console.log(word);
        let newWord = word;
        let indices = new Set();
        while(indices.size < 3) {
            const dado = Math.floor(Math.random() * word.length)
            console.log(dado);
            indices.add(dado)
        }
        console.log(indices);
        indices = indices.values();
        for (const i of indices) {
            newWord = replaceAt(i, newWord);
        }

        newWord = newWord.split("").join(" ");
        
        console.log(newWord);
        let html = "<h3 class='display-4'>" + newWord + "</h3>";
        html += "<input id='resp'class = 'form-control' type='text' placeholder='Sua resposta'>"
        html += "<div class = 'col-12'>";
        html += "<button class = 'btn btn-warning' onclick='responder()'>Responder</button>";
        html += "</div>";


        output.innerHTML = html;

        input.style.display = "none";
        output.style.display = "grid";
    }
}

function replaceAt(indice, palavra) {
    let p = palavra.substring(0, indice);
    p += "_";
    p += palavra.substring(indice + 1);
    return p;
}

function responder() {
    const resp = document.getElementById("resp").value.trim().toUpperCase();
    if (resp === word) {
        if (getVez() === p1name) {
            p1Score++;
        } else {
            p2Score++
        }
        mudaPlacar();
    }
    contPerg++;
    mudaVez();
    document.getElementById("word").value = "";
    input.style.display = "grid";
    output.style.display = 'none';
}
const kits = ["kick", "tom", "crash", "snare"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    containerEl.appendChild(btnEl);
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url(images/${kit}.png)`;
    
    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    containerEl.appendChild(audioEl);

    btnEl.addEventListener("click", () => {
        audioEl.play();
    });

    // El sonido lo podremos reproducir con las iniciales de nuestros sonidos. Letras k - t - c - s
    document.addEventListener("keydown", (e) => {
        if (e.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(0.9)";
        }
        setTimeout(() => {
            btnEl.style.transform = "scale(1)";
        }, 100);
    });
});

document.addEventListener("keydown", function(event) {
    const tecla = event.key.toLowerCase();
    tocarBateria(tecla);
});

function tocarBateria(tecla) {
    switch (tecla) {
        case "a":
            reproducirSonido("sonidos/kick.mp3");
            break;
        case "s":
            reproducirSonido("sonidos/tom.mp3");
            break;
        case "d":
            reproducirSonido("sonidos/crash.mp3");
            break;
        case "f":
            reproducirSonido("sonidos/snare.mp3");
            break;
        default:
            // No hace nada si presionas otra tecla
            break;
    }
}

function reproducirSonido(ruta) {
    const audio = new Audio(ruta);
    audio.currentTime = 0; 
    audio.play();
}

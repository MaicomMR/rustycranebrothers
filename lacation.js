var creditosVideo = document.getElementById('textoVideo');
var aboutUsButton_text = document.getElementById('aboutUsButton_text');
var partnersButton_text = document.getElementById('partnersButton_text');
var contactButton_text = document.getElementById('contactButton_text');
var beAPartnerButton_text = document.getElementById('beAPartnerButton_text');

function apagaAlerta(){
    var caixaAlerta = document.getElementById('underConstruction');
    caixaAlerta.style.display = "none";
}

function calc() {
    if (document.getElementById('language').checked) {
        creditosVideo.innerHTML = "Background video are from Palm'sTime channel, you can acess the original video clicking here";
        aboutUsButton_text.innerHTML = "ABOUT US";
        partnersButton_text.innerHTML = "PARTNERS"
        contactButton_text.innerHTML = "CONTACT"
        beAPartnerButton_text.innerHTML = "BE A PARTNER!"

    } else {
        creditosVideo.innerHTML = "O vídeo do background pertence a Palm'sTime e pode ser acessado clicando aqui";
        aboutUsButton_text.innerHTML = "QUEM SOMOS";
        partnersButton_text.innerHTML = "APOIADORES"
        contactButton_text.innerHTML = "CONTATO"
        beAPartnerButton_text.innerHTML = "SEJA UM PARCEIRO!"
    }
}
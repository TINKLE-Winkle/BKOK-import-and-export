// ===== IMAGENS =====
let imagens = [];
let atualImg = 0;

function abrirImg(index) {
    imagens = document.querySelectorAll(".gallery img");
    atualImg = index;

    document.getElementById("popupImgElemento").src = imagens[atualImg].src;
    document.getElementById("popupImgBox").style.display = "flex";
}

function fecharImg() {
    document.getElementById("popupImgBox").style.display = "none";
}

function mudarImg(direcao) {
    atualImg += direcao;

    if (atualImg < 0) atualImg = imagens.length - 1;
    if (atualImg >= imagens.length) atualImg = 0;

    document.getElementById("popupImgElemento").src = imagens[atualImg].src;
}


// ===== VÍDEOS =====
let videos = [];
let atualVideo = 0;

document.addEventListener("DOMContentLoaded", function () {
    videos = document.querySelectorAll(".video-grid video");
});

function abrirVideo(index) {
    videos = document.querySelectorAll(".video-grid video");
    atualVideo = index;

    let src = videos[atualVideo].querySelector("source").src;

    let popupVideo = document.getElementById("popupVideoElemento");
    popupVideo.src = src;

    document.getElementById("popupVideoBox").style.display = "flex";
}

function fecharVideo() {
    let popupVideo = document.getElementById("popupVideoElemento");
    popupVideo.pause();

    document.getElementById("popupVideoBox").style.display = "none";
}

function mudarVideo(direcao) {
    atualVideo += direcao;

    if (atualVideo < 0) atualVideo = videos.length - 1;
    if (atualVideo >= videos.length) atualVideo = 0;

    let src = videos[atualVideo].querySelector("source").src;
    document.getElementById("popupVideoElemento").src = src;
}

// ===== POPUP PARA NEWS COM NAVEGAÇÃO =====

let newsItens = [];
let newsAtual = 0;

document.addEventListener("DOMContentLoaded", function () {

    newsItens = document.querySelectorAll('.news-item');

    newsItens.forEach((item, index) => {
        item.addEventListener('click', () => {
            abrirNewsPopup(index);
        });
    });

});

function abrirNewsPopup(index) {
    newsAtual = index;

    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    popupContent.innerHTML = "";

    let item = newsItens[newsAtual];

    if (item.tagName === "IMG") {
        let img = document.createElement("img");
        img.src = item.src;
        popupContent.appendChild(img);
    }

    if (item.tagName === "VIDEO") {
        let video = document.createElement("video");
        video.controls = true;

        let source = document.createElement("source");
        source.src = item.querySelector("source").src;
        source.type = "video/mp4";

        video.appendChild(source);
        popupContent.appendChild(video);
    }

    popup.style.display = "flex";
}

function fecharNewsPopup() {
    document.getElementById('popup').style.display = "none";
    document.getElementById('popup-content').innerHTML = "";
}

function mudarNews(direcao) {
    newsAtual += direcao;

    if (newsAtual < 0) newsAtual = newsItens.length - 1;
    if (newsAtual >= newsItens.length) newsAtual = 0;

    abrirNewsPopup(newsAtual);
}

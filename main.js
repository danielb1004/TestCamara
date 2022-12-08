// se captura la camara para mostrarla en el canvas
navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then((stream) => {
    console.log(stream);

    let video = document.getElementById('video');
    video.srcObject = stream;

    video.onloadedmetadata = (ev) => {
        video.play();
    }


}).catch((err) => {
    console.log(err);
});

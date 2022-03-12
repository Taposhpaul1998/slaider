const images = [
    ' image/money (1).jpg',
    ' image/money (2).jpg',
    ' image/money (3).jpg',
    ' image/money (4).jpg',
    ' image/money(5).jpg'
]
let imgIndex = 0;
const imgElement = document.getElementById('slaider');
setInterval(() => {
    if (imgIndex >= images.length) {
        imgIndex = 0
    }
    const imgUrl = images[imgIndex]
    imgElement.setAttribute('src', imgUrl)
    imgIndex++
}, 2000)
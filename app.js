const images = [
    './images/image11.jpg',
    './images/image12.jpg',
    './images/image13.jpg',
    './images/image14.jpg'

];
let imgIndex = 0;
const imgElement =document.getElementById('slide-img');

setInterval(() =>{
    if(imgIndex >= images.length){
        imgIndex = 0;
    }
    
    const imgUrl = images[imgIndex];
    // console.log(imgUrl);
    imgElement.setAttribute('src',imgUrl);
    imgIndex++;
},1000);
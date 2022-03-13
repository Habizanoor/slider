const images = [
    './images/image1.jpg',
    './images/image2.jpg',
    './images/image3.jpg',
    './images/image4.jpg',
    './images/image5.jpg',
    './images/image6.jpg',
    './images/image7.jpg',
    './images/image8.jpg'

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
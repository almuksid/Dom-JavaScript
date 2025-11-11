const images = [
    { name: "Mountain", url: "https://picsum.photos/id/1018/600/400" },
    { name: "Beach", url: "https://picsum.photos/id/1015/600/400" },
    { name: "Forest", url: "https://picsum.photos/id/1020/600/400" },
    { name: "City", url: "https://picsum.photos/id/1031/600/400" },
    { name: "Desert", url: "https://picsum.photos/id/1003/600/400" }
]

const setName = document.querySelector('#setName');
const setImage = document.querySelector('#setImage');
const changeButton = document.querySelector('#ChangeButton');

changeButton.addEventListener('click', () =>{
    const random =Math.floor(Math.random() * images.length);
    const selectedImage = images[random];

    setImage.src = selectedImage.url;
    setName.textContent = selectedImage.name;
    console.log(selectedImage);
    // setName.textContent = images[1].name;
    // setImage.src = images[1].url;
});
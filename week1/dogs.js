const mainImg = setInterval(elem => {
    fetch(" https://dog.ceo/api/breeds/image/random")
        .then((responce) => responce.json())
        .then((json) => {
            const mainImg = document.getElementById("main_img");
            mainImg.src = `${json.message}`
        });
}, 2000)

function getImageForBreed (breed) {
 fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => (response.json()))
      .then((json) => {
        const img = document.createElement("img");
        console.log(json);
          img.src = json;
          
        document.body.appendChild(img);

        const p = document.createElement("p");
        p.innerText = breed;
        p.style.textTransform = "capitalize";
        document.body.appendChild(p);
      });
};

fetch('https://dog.ceo/api/breeds/list/all')
    .then((responce) => responce.json())
    .then((json) => {
        const listOfBreeds = Object.keys(json.message);
        listOfBreeds.forEach((breed) => getImageForBreed(breed))
    });
const list = document.getElementById("books-list")
const options = {
    method: 'GET',
        "ISBN:201558025": {
          "bib_key":"ISBN:0201558025",
          "info_url": "https://openlibrary.org/books/OL1429049M/Concrete_mathematics",
          "preview":"restricted",
          "preview_url": "https://archive.org/details/concretemathemat00grah_444",
          "thumbnail_url": "https://covers.openlibrary.org/b/id/135182-S.jpg",
        }
      }; 

fetch("https://openlibrary.org/trending/now.json",options)
.then((res)=> res.json())
.then(object => {
  object.works.forEach(char => {
    const card = document.createElement("article");
    card.innerHTML = `
    <h5>${char.title}</h5>
    <img src= "https://covers.openlibrary.org/b/id/${char.cover_i}-M.jpg">
    <p>Autor: ${char.author_name}</p>
    <p>Fecha de publicacion: ${char.first_publish_year}</p>
    <p>Número de edición: ${char.edition_count}</p> 
    `;
    list.appendChild(card);
    console.log(char)
  });
}); 
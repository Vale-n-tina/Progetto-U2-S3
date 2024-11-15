class Prodotto{
    constructor(_nome, _descrizione,_brand,_img,_prezzo,_categoria){
        this.name=_nome
        this.description=_descrizione
        this.brand=_brand
        this.imageUrl=_img
        this.price=_prezzo
        
    }
}
//CREAZIONE PRODOTTO
const creazioneProdotto=function(){
    const nome=document.getElementById("nome")
    const descrizione=document.getElementById("descrizione")
    const brand=document.getElementById("brand")
    const img=document.getElementById("img")
    const prezzo=document.getElementById("prezzo")

    const nuovoProdotto=new Prodotto(
        nome.value,
        descrizione.value,
        brand.value,
        img.value,
        prezzo.value,
        
    )
    fetch("https://striveschool-api.herokuapp.com/api/product/",{
        method:"POST",
        body:JSON.stringify(nuovoProdotto),
        headers:{"Content-Type":"application/json",
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjU1ZThhZDEyOTAwMTU4NzZjYzUiLCJpYXQiOjE3MzE2NjcyOTQsImV4cCI6MTczMjg3Njg5NH0.bvADGPv6PjfO38YPuhRvICMOJCGHgM8i8xCQOD_v7DA"}
    })
    .then((response)=>{
        if(response.ok){
            alert("salavto")
            
        }else{
            throw new Error("errore nel salvataggio")
        }
    })
    .catch((error)=>{
        console.log("error")
    })
}
  //FAR APPARIRE I PRODOTTI ANCHE SOTTO AL FORM
const inserimentoProdotto = function () {
    fetch("https://striveschool-api.herokuapp.com/api/product/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjU1ZThhZDEyOTAwMTU4NzZjYzUiLCJpYXQiOjE3MzE2NjcyOTQsImV4cCI6MTczMjg3Njg5NH0.bvADGPv6PjfO38YPuhRvICMOJCGHgM8i8xCQOD_v7DA",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(" cè un errore");
        }
      })
      .then((prodotti) => {
        console.log(prodotti);
        prodotti.forEach((prodotto) => {
          console.log(prodotto);
          const row = document.getElementById("rowPersonale");
          const newCol = document.createElement("div");
          newCol.classList.add("col-12", "col-md-4", "col-lg-2");
          newCol.innerHTML = `<div class="card">
    <img src="${prodotto.imageUrl}" class="card-img-top" alt="immagine prodotto">
    <div class="card-body">
      <h5 class="card-title">${prodotto.name}</h5>
      <p class="card-text">${prodotto.description}</p>
      <p class="card-text fw-bold">${prodotto.brand}</p>
      <div class="card-footer text-body-secondary d-flex justify-content-center ">
      <p class="m-0">  ${prodotto.price + "€"}</p>
    
    </div>
    <div class= "d-flex justify-content-center"> 
      <a href="#" class="btn btn-warning mt-2">Elimina</a>
      </div>
    </div>
  </div>`;
          row.appendChild(newCol);
        });
      })
      .catch((error) => {
        console.log("orrore");
      });
  };
  inserimentoProdotto();


  //ELIMINARE UN PRODOTTO SIA DALLO SHOP SIA DAL PERSONALE
const eliminaProdotto=function(){
    
}



//FUNZIONA CREAZION EPRODOTTO ASSOCIATA AL SUBMIT
const form=document.getElementById("form")
form.addEventListener("submit", (e)=>{
    e.preventDefault()

    creazioneProdotto()
})
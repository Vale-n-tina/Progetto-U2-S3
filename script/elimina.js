const addressBar= new URLSearchParams(window.location.search)
const prodottoId=addressBar.get("prodottoId")
console.log("prodottoid",prodottoId)


const eliminaProdotto=function(){
   fetch("https://striveschool-api.herokuapp.com/api/product" + "/" + prodottoId, {
       method:"DELETE",
       headers: {
           Authorization:
             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjU1ZThhZDEyOTAwMTU4NzZjYzUiLCJpYXQiOjE3MzE2NjcyOTQsImV4cCI6MTczMjg3Njg5NH0.bvADGPv6PjfO38YPuhRvICMOJCGHgM8i8xCQOD_v7DA",
         },
   })
   .then((response)=>{
       if(response.ok){
           alert("Prodotto eliminato con successo");
            window.location.href="./personale.html";

       }else{
           throw new Error("errore")
       }
   })
   .catch((error)=>{
       console.log("error")
   })
}
 
const trasferimento=function(){
 fetch("https://striveschool-api.herokuapp.com/api/product" + "/" + prodottoId , {
    headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MjU1ZThhZDEyOTAwMTU4NzZjYzUiLCJpYXQiOjE3MzE2NjcyOTQsImV4cCI6MTczMjg3Njg5NH0.bvADGPv6PjfO38YPuhRvICMOJCGHgM8i8xCQOD_v7DA",
      },
 })
 .then((response)=>{
    if(response.ok){
    return response.json()
    }else{ throw new Error("orroree")}
 })
 .then((prodotto)=>{
   
    const card=document.getElementById("col")
    
    card.innerHTML= `<div class="card">
    <img src="${prodotto.imageUrl}" class="card-img-top" alt="immagine prodotto">
    <div class="card-body">
      <h5 class="card-title">${prodotto.name}</h5>
      <p class="card-text">${prodotto.description}</p>
      <p class="card-text fw-bold">${prodotto.brand}</p>
      <div class="card-footer text-body-secondary d-flex justify-content-center ">
      <p class="m-0">  ${prodotto.price + "€"}</p>
    
    </div>
    <div class= "d-flex justify-content-center"> 
      <a href="#" class="btn btn-warning mt-2" onclick="eliminaProdotto()" id="buttonnn">Elimina</a>
      </div>
    </div>
  </div>`;
 
 })
 .catch((error)=>{
    console.log("error")
 })
}

 trasferimento()

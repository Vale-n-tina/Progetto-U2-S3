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
        const row = document.getElementById("prodottiRow");
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
    <a href="#" class="btn btn-primary mt-2">Compra</a>
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

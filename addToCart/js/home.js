let product = [];
let res = document.querySelector("#res");

function showdata(){
  let proData= JSON.parse(localStorage.getItem("product"));
  product = proData;

  let getData;

  product.forEach((items)=>{
    getData = `
    <div class="col-4">
    <div class="card" style="width: 18rem;">
      <img src="image/${items.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${items.title}</h5>
        <p class="card-text"><strong>Rs. ${items.price}</strong>&nbsp;&nbsp;<del>${items.oldprice}</del></p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>`
  });
  
  res.innerHTML = getData;
}

showdata();
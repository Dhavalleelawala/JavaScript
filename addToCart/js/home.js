let product = [];
let cart = [];
let res = document.querySelector("#res");
let cardNum = document.querySelector("#cardNum"); 


function showdata(){
  let proData= JSON.parse(localStorage.getItem("product"));
  product = proData;

  let getData = "";
  product.forEach((items,index)=>{
    getData += `
    <div class="col-3">
    <div class="card my-4" style="width: 18rem;">
      <img src="image/${items.img}" class="card-img-top" alt="..." width="100%" height="200px">
      <div class="card-body">
        <h5 class="card-title">${items.title}</h5>
        <p class="card-text"><strong>Rs. ${items.price}</strong>&nbsp;&nbsp;<del>${items.oldprice}</del></p>
        <a href="#" class="btn-add-to-cart btn btn-primary" onclick="getData(${items,index})">Add to Cart</a>
      </div>
    </div>
    </div>`
    
});
res.innerHTML = getData;
let cartData = JSON.parse(localStorage.getItem('cart'));
cart = cartData;
cardNum.innerHTML = cart.length;
}

showdata();
// function AutoRefresh( t ) {
//   setTimeout("location.reload(true);", t);
// }


function getData(items,index){
  let cartData = JSON.parse(localStorage.getItem('cart'));
  cart = cartData;

  obj = product[items];
  cart.push(obj);
  localStorage.setItem('cart',JSON.stringify(cart));
  cardNum.innerHTML = cart.length;
}
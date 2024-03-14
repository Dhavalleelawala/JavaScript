let product = [];

let title = document.querySelector("#title");
let category = document.querySelector("#category");
let price = document.querySelector("#price");
let oldprice = document.querySelector("#oldprice");
let color = document.querySelector("#color");
let description = document.querySelector("#description");
let img = document.querySelector("#imgfile");

function addProduct(){
  
  let obj = {
    title : title.value,
    category : category.value,
    price : price.value,
    oldprice : oldprice.value,
    color : color.value,
    description : description.value,
    img : img.files[0].name
  }
  
  product.push(obj);
  localStorage.setItem('product',JSON.stringify(product));
  storData();
}

function storData(){
  let dataBase = JSON.parse(localStorage.getItem("product"));
  product = dataBase;
}

storData();



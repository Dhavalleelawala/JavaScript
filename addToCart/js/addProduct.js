let product = [];
<<<<<<< HEAD
let table1 = document.querySelector("#table1");
let table2 = document.querySelector("#table2");

=======
>>>>>>> e58a17bd28004f2a9b7e34a600fba89333d9ef89

let title = document.querySelector("#title");
let category = document.querySelector("#category");
let price = document.querySelector("#price");
let oldprice = document.querySelector("#oldprice");
let color = document.querySelector("#color");
let description = document.querySelector("#description");
let img = document.querySelector("#imgfile");

function addProduct(){
<<<<<<< HEAD
  table1.classList.remove("d-none");
  table2.classList.add("d-none");
=======
>>>>>>> e58a17bd28004f2a9b7e34a600fba89333d9ef89
  
  let obj = {
    title : title.value,
    category : category.value,
<<<<<<< HEAD
    price : parseInt(price.value),
=======
    price : price.value,
>>>>>>> e58a17bd28004f2a9b7e34a600fba89333d9ef89
    oldprice : oldprice.value,
    color : color.value,
    description : description.value,
    img : img.files[0].name
  }
  
  product.push(obj);
  localStorage.setItem('product',JSON.stringify(product));
  storData();
<<<<<<< HEAD
  
=======
>>>>>>> e58a17bd28004f2a9b7e34a600fba89333d9ef89
}

function storData(){
  let dataBase = JSON.parse(localStorage.getItem("product"));
  product = dataBase;
}

<<<<<<< HEAD
storData();


function editData(){
  
}

let res2 = document.querySelector("#res2");
function showCart(){
  let cartData = JSON.parse(localStorage.getItem('product'));
  cart = cartData;

  let showData = "";
  let count=1;
  product.forEach((items,index) => {
    showData+=
    `<tr>
    <td>${count++}</td>
    <td scope="row" ><img src="image/${items.img}" width="100px"></td>
    <td>${items.title}</td>
    <td>${items.price}</td>
    <td></td>
    <td><botton onclick="removeCart(${index})" class="btn btn-danger">Remove</botton></td>
    </tr>`
  });
  res2.innerHTML = showData;
}
showCart();

function removeCart(index){
  product.splice(index,1);
  localStorage.setItem('product',JSON.stringify(product));
  showCart();
}

function allData(){
  table1.classList.add("d-none");
  table2.classList.remove("d-none");
}
=======

>>>>>>> e58a17bd28004f2a9b7e34a600fba89333d9ef89

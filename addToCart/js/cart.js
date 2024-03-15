let cart = [];
let product =[];
let res = document.querySelector("#res");
let qty=1;
var pri=1;
function showCart(){
  let cartData = JSON.parse(localStorage.getItem('cart'));
  cart = cartData;

  let showData = "";
  let count=1;
  cart.forEach((items,index) => {
    showData+=
    `<tr>
    <td>${count++}</td>
    <td scope="row" ><img src="image/${items.img}" width="100px"></td>
    <td>${items.title}</td>
    <td id="price${index}">${items.price}</td>
    <td>
      <select id="qty${index}" onchange="getQty(${index})">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </td>
    <td id="total${index}">${items.price}</td>
    <td><botton onclick="removeCart(${index})" class="btn btn-danger">Remove</botton></td>
    </tr>
    `
  });
  showData += `
  <tr>
  <td colspan="5"><h2>Total Amount</h2></td>
  <td id="totalamount"></td>
  </tr>`

  res.innerHTML = showData;
  let total = 0;
  cart.forEach((items,index)=>{
    let totalId = 'total' + index;
    let totalamount = parseInt(document.getElementById(totalId).innerHTML);
    total+=totalamount;
    console.log(totalamount);
  });
  document.getElementById("totalamount").innerHTML = total;
}
showCart();

function removeCart(index){
  cart.splice(index,1);
  localStorage.setItem('cart',JSON.stringify(cart));
  showCart();
}

function getQty(index){
  let priceId = 'price' + index;
  let price = document.getElementById(priceId).innerHTML;

  let qtyId = 'qty' + index;
  let qty = document.getElementById(qtyId).value;

  let totalId = 'total' + index;
  document.getElementById(totalId).innerHTML = price * qty;
  console.log(priceId+""+qtyId);

  let cartData = JSON.parse(localStorage.getItem('cart'));
  cart = cartData;

  let total = 0;
  cart.forEach((items,index)=>{
    let totalId = 'total' + index;
    let totalamount = parseInt(document.getElementById(totalId).innerHTML);
    total+=totalamount;
    console.log(totalamount);
  });
  document.getElementById("totalamount").innerHTML = total;
}


// function getData(items,index){
//   let cartData = JSON.parse(localStorage.getItem('cart'));
//   cart = cartData;
  
//   obj = product[items];
//   cart.push(obj);
//   localStorage.setItem('cart',JSON.stringify(cart));
//   console.log(cart);
// }
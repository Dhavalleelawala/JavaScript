let card = [];

let show = document.getElementById("res");

function getProductData(){
  $.ajax({
    url : "https://fakestoreapi.com/products",
    method : 'get',

    success : function(res) {
      let showData = "";
      res.forEach((element,index) => {
        console.log(element);
        showData += `
        
        <div class="product col-sm-6 col-md-4 col-xl-3 my-3">
        <div class="card" style="width: 18rem;">
          <img src="${element.image}" class="card-img-top" alt="..." width="200px" height="200px">
          <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.description}</p>
            <a href="#" class="btn btn-primary">Add To cart</a>
          </div>
        </div>
        </div>

        `
      });

      show.innerHTML = showData;

    }

  })
  
}

getProductData();

// function search1(){
//   let filter = document.getElementById('find').value.toUpperCase();
//   let item = document.querySelectorAll('.product');
//   let l = document.getElementsByTagName('h5');

//   for(var i=0; i<l.length; i++){
//     let a = item[i].querySelectorAll('h5')[0];
//     let value= a.innerHTML || a.innerText || a.textContent;

//     if(value.toLowerCase().indexOf(filter) > -1){
//       item[i].style.display="block";
//     }else{
//       item[i].style.display="none";
//     }
//   }
// }

function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let items = document.querySelectorAll('.product');

  items.forEach(item => {
    let title = item.querySelector('h5').textContent.toUpperCase();
    if (title.includes(filter)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
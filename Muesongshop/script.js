fetch("item.json")
  .then(function(response) {
    return response.json();
  })

  .then(function(data) {
    localStorage.setItem("products", JSON.stringify(data));


  })
document.addEventListener('DOMContentLoaded', () => {
  //when the page is ready

  //load the cart items
  updatecart();
});
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}
let cartdiv = document.getElementById("cartdiv");
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));
if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", "[]");
}

function showcart() {
  document.getElementById("cartdiv").style.display = "block";
  document.getElementById("navbar").style.display = "none";

}

function closecart() {
  document.getElementById("cartdiv").style.display = "none";
  document.getElementById("navbar").style.display = "block";

}

function addItem(id) {
  let product = products.find(function(product) {
    return product.id == id;

  });

  let cartproduct = cart.find(function(cartproduct) {
    return cartproduct.id == id;

  });
  let res = cart.find(element => element.id == id);
  console.log(res);
  if (res === undefined) {
    cart.push(product);
    updateQuantity(product.id, 1);

  } else {
    updateQuantity(cartproduct.id, 1);

  }
  updatecart();
  // if(cart.lenght == 0){
  //   cart.push(product);
  //   updateQuantity(id, product.quantity + 1);
  //   updatecart();
  // }
  // else{
  //   let res = cart.find(element=> element.id == id);
  //   if (res === undefined){
  //     cart.push(product);
  //     updateQuantity(id, product.quantity + 1);
  //     updatecart();
  //   }
  // }
}

function removeItem(productid) {
  for (let product of cart) {
    if (product.id == productid) {
      product.quantity = 0;
    }
  }
  let temp = cart.filter(item => item.id !== productid);
  localStorage.setItem("cart", JSON.stringify(temp));
  // let product = products.find(function(product) {
  //     product.quantity = 1;
  // })

  cart = temp;
  updatecart();


}


function getTotalPrice() {
  let num = 0;
  for (let product of cart) {
    num += parseInt(product.quantity) * parseInt(product.price);
  }
  console.log(num);
  return num;
}

function getTotalItem() {
  let num = 0;
  for (let product of cart) {
    num += product.quantity;
  }
  console.log(num);
  return num;

}

function refreshcart() {
  let cartlist = document.getElementById("cart-list");
  for (let product of cart) {
    let name = product.name;
    let quantity = product.quantity;
    let price = product.price;
    let img = product.img[0];
    let id = product.id;
    let type = product.subtype;
    cartlist.innerHTML += `<div class = "cart-item">
      <img src = "${img}" alt = "product image">
      <div class = "cart-item-info">
        <span class = "cart-item-category subtype">${type}</span>
        <h3 class = "cart-item-name">${name}</h3>
        <span class = "cart-item-price">฿${price}.00</span>
      </div>
      <div class='cart-item-right'>
        <button class = 'quantitybtn' onclick="decrease(${id})" type = 'button'>-</button>
        <span>${quantity}</span>
        <button class = 'quantitybtn' type = 'button' onclick="increase(${id})">+</button>
      <button onclick = 'removeItem(${id})' class='removebtn'type = "button">
        remove
      </button>
      </div>
    </div>`
  }
  document.getElementById("cart-count-info").innerHTML = getTotalItem();
  let total = getTotalItem();
  let totalprice = getTotalPrice();
  document.getElementById("cart-head").innerHTML = `ตะกร้า(${total})`;
  document.getElementById("cart-total-value").innerHTML = `ทั้งหมด : ${totalprice} บาท`;
}

function increase(id) {
  for (let product of cart) {
    if (product.id == id) {
      product.quantity += 1;
    }
  }
  updatecart();

}

function decrease(id) {
  for (let product of cart) {
    if (product.id == id) {
      if (product.quantity > 0) {
        product.quantity -= 1;
        if (product.quantity == 0) {
          removeItem(id);
        }
        updatecart();
      }
    }
    updatecart();

  }
}

function updatecart() {
  let cartdiv = document.getElementById("cartdiv");
  if (cart.length == 0) {
    cartdiv.innerHTML = `   
        <div class="cart-header">
          <h1 id='cart-head'>My cart(0)</h1>
          <button class="close-cart-btn" onclick="closecart()">X</button>
        </div>
        <div class="no-item"><h1>ไม่มีสินค้า</h1></div>
    
       
     `
  }
  else {
    cartdiv.innerHTML = `   
        <div class="cart-header">
          <h1 id='cart-head'>My cart(0)</h1>
          <button class="close-cart-btn" onclick="closecart()">X</button>
        </div>
        <div class = "cart-list" id="cart-list">
          
        </div>
    
        <div class = "cart-total">
        
          <span id = "cart-total-value">Total : </span>
          <br>
          <a href="payment.html">
            <button class="checkoutbtn"> จ่ายเงิน</button>
          </a>
        </div>
     `
    let cartlist = document.getElementById("cart-list");
    cartlist.innerHTML = "";
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  refreshcart();
}

function updateQuantity(id, num) {
  for (let product of cart) {
    if (product.id == id) {
      product.quantity += num;
    }
  }
  localStorage.setItem("cart", JSON.stringify(cart));


}

function ChangeToTwo() {
  let button1 = document.getElementById("gridbtn1");
  let button2 = document.getElementById("gridbtn2");
  let div = document.getElementsByClassName("product-list");
  let card = document.querySelectorAll(".product-list img");
  for (var i = 0; i < div.length; i++) {
    div[i].style.gridTemplateColumns = "1fr 1fr";
  }
  for (var i = 0; i < card.length; i++) {
    card[i].style.height = "1000px";
  }


  button1.style.color = "white";
  button2.style.color = "#FA8128";

}

function ChangeToFour() {
  let button1 = document.getElementById("gridbtn1");
  let button2 = document.getElementById("gridbtn2");
  let div = document.getElementsByClassName("product-list");
  let card = document.querySelectorAll(".product-list img");
  for (var i = 0; i < div.length; i++) {
    div[i].style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
  }
  for (var i = 0; i < card.length; i++) {
    card[i].style.height = "500px";
  }


  button1.style.color = "#FA8128";
  button2.style.color = "white";

}


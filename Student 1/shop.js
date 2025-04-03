const product = [
  {
    id: 0,
    image: "Stethoscope.jpeg",
    title: "Stethoscope",
    price: 500,
  },
  {
    id: 1,
    image: "Wheelchair.jpg",
    title: "Wheelchair",
    price: 700,
  },
  {
    id: 2,
    image: "Masks.jpg",
    title: "Masks",
    price: 20,
  },
  {
    id: 3,
    image: "BloodPressureMonitor.jpg",
    title: "Blood Pressure Monitor",
    price: 1000,
  },
];
const categoris = [
  ...new Set(
    product.map((item) => {
      return item;
    })
  ),
];
let i = 0;
document.getElementById("root").innerHTML = categoris
  .map((item) => {
    var { image, title, price } = item;
    return (
      `<div class= 'box'>
           <div class= img-box>
                <img class= 'images'  src=${image}></img>
            </div>
        <div class= 'bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>` +
      "<button onclick='addtocart(" +
      i++ +
      ")'>Add to cart</button>" +
      `</div>
        </div>`
    );
  })
  .join("");

var cart = [];

function addtocart(a) {
  cart.push({ ...categoris[a] });
  displaycart();
}
function delElement(a){
    cart.splice(a,1);
    displaycart();
}

function displaycart(a) {
  let j = 0, total=0;
  document.getElementById("count").innerHTML=cart.length

  if (cart.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("total").innerHTML = "$ "+0+".00";
  } 
  else {
    document.getElementById("cartItem").innerHTML = cart.map((items) => 
    {
        var { image, title, price } = items;
        total=total+price;
        document.getElementById("total")
        return (
          `<div class='cart-item'>
                <div class='row-img' 
                    <img class= 'rowimg' src=${image}></img>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size:15px;'>$ ${price}.00</h2>` +
          "<i class='fa-solid fa-trash' onclick='delElement(" +
          j++ +
          ")'></i></div>"
        );
      })
      .join("");
  }
}

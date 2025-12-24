let menu = [
  {
    img: "images/paneer.jpg",
    name: "Paneer Butter Masala",
    price: 220
  },
  {
    img: "images/nan.jpg",
    name: "Butter Naan",
    price: 40
  },
  {
    img: "images/biryani.jpg",
    name: "Veg Biryani",
    price: 180
  },
  {
    img: "images/dosa.jpg",
    name: "Masala Dosa",
    price: 120
  },
  {
    img: "images/pizza.jpg",
    name: "Cheese Pizza",
    price: 250
  },
  {
    img: "images/burger.jpg",
    name: "Veg Burger",
    price: 130
  },
  {
    img: "images/fries.jpg",
    name: "French Fries",
    price: 90
  },
  {
    img: "images/thali.jpg",
    name: "Gujarati Thali",
    price: 260
  },
  {
    img: "images/manchurian.jpg",
    name: "Veg Manchurian",
    price: 170
  },
  {
    img: "images/hakka.jpg",
    name: "Hakka Noodles",
    price: 160
  },
  {
    img: "images/pavbhaji.jpg",
    name: "Pav Bhaji",
    price: 150
  },
  {
    img: "media/chole.jpg",
    name: "Chole Bhature",
    price: 190
  },
  {
    img: "images/idli.jpg",
    name: "Idli Sambhar",
    price: 100
  },
  {
    img: "images/rice.jpg",
    name: "Veg Fried Rice",
    price: 160
  },
  {
    img: "images/coffe.jpg",
    name: "Cold Coffee",
    price: 110
  },
  {
    img: "images/brownie.jpg",
    name: "Chocolate Brownie",
    price: 140
  }
];
let menus = document.getElementById("menus");

menus.innerHTML = menu.map(function(item , index){
    return `<div id="card">
        <img src=${item.img}/>
        <h2>${item.name}</h2>
        <span>Price : ${item.price} RS</span>
        <button onClick=addTocart(${index})>Add to Cart</button>
    </div>`
}).join("")

function addTocart(index){
   
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(menu[index]);
    
    localStorage.setItem("cart" , JSON.stringify(cart));

    alert(`${menu[index].name} Is Added To Cart.`)
}

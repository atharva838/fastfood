

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let cartcontainer = document.getElementById("cartcontainer")
let total1 = document.getElementById("total");


function removeitem(index){
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index , 1);

    localStorage.setItem("cart" , JSON.stringify(cart)); 
    location.reload()
}


if(cart.length===0){
    cartcontainer.innerHTML = "<h1>oops your cart is empty</h1>"
}else {
    let total2 = 0 ;
    cartcontainer.innerHTML = cart.map((item , index) => {
        total2 += item.price
        return `
           <h2>${item.name}</h2>
           <p>${item.price} RS</p>
           <button onClick="removeitem(${index})">remove</button>
        `;
    }).join("")
    total1.innerText = `Total : ${total2} RUPEES`;
}

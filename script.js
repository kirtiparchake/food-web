function myfun(){
    let searchbar = document.querySelector(".text").value.toUpperCase() ;
    let table= document.getElementsByTagName("table")
    let tr = document.getElementsByTagName('tr');

     let headpage= document.querySelector(".head")
    for(let i=0; i<tr.length; i++){
        let td=tr[i].getElementsByTagName('td')[0];
        if (td){
            let text= td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchbar)> -1){
                tr[i].style.display=''
                headpage.style.display='none'

            }else{
                tr[i].style.display='none'
               
            }
        }
    }
    if(searchbar ==""){
        headpage.style.display= "block"
    }
    console.log(searchbar)
}
function toggleNav() {
    let nav = document.querySelector('.nav');
    let login = document.querySelector('.login');

    // Toggle the display of nav and hide login
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
        login.style.display = 'none'; // Assuming you want to hide login whenever nav is opened
    }
}

function toggleLoginNav() {
    let login = document.querySelector('.login');
    let nav = document.querySelector('.nav');

    // Toggle the display of login and nav
    if (login.style.display === 'block' || nav.style.display === 'block') {
        login.style.display = 'none';
        nav.style.display = 'none';
    } else {
        login.style.display = 'block';
        nav.style.display = 'none'; // Assuming you want to hide nav initially
    }
}

function nav() {
    let nav = document.querySelector('.nav');
    let login = document.querySelector('.login');

    // Display nav and hide login
    nav.style.display = 'block';
    login.style.display = 'none';
}



let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left=`${index * 100}%`
})
function openDishDetails(name, price, image, description) {
    // Redirect to the dish-details.html page with query parameters
    window.location.href = `dish-details.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&description=${encodeURIComponent(description)}`;
}


function next(){
    count ++;
    if(count == slide.length){
        count=0;
    }
    bar()
}

function pre(){
    count--;
    if(count == -1){
        count = slide.length-1
    }
    bar()
}


function bar(){
    slide.forEach(function(customer){
        customer.style.transform = `translateX(-${count * 100}%)`
    })
}



function navigateToCart() {
    window.open('cart.html', '_blank');
}

function addToCart(name, price, img) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ name: name, price: price, img: img });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart();
}

function deleteItem(index) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    cartItems.splice(index, 1);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCart();
}

function displayCart() {
    let cartIcon = document.querySelector('.cart');
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let cartItemsContainer = document.getElementById('cart-items');
    if(cartIcon){
        cartIcon.innerHTML = cartItems ? cartItems.length : 0;
    }
    if(cartItemsContainer){
        cartItemsContainer.innerHTML = '';
        if (cartItems && cartItems.length > 0) {
            cartItems.forEach((item, index) => {
                let itemElement = document.createElement('div');
                itemElement.classList.add('dish-card');
                itemElement.innerHTML = `
                    <button class="delete-button" onclick="deleteItem(${index})">X</button>
                    <img src="${item.img}" alt="${item.name}">
                    <div class="dish-details">
                        <h2 class="dish-name">${item.name}</h2>
                        <p class="dish-price">Price: ${item.price}</p>
                        <button class="order-button" onclick="order('${item.name}')">Order</button>
                    </div>
                `;
                cartItemsContainer.appendChild(itemElement);
            });
        } else {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            cartItemsContainer.style.backgroundColor = '#ffffff'; // Set background color to white
        }
    }
}


// Initial display
function viewDishDetails(name, price, image) {
    // Encode dish details in the URL parameters
    const queryParams = new URLSearchParams({
        name: name,
        price: price,
        image: image
    });
    // Redirect to the new page with dish details
    window.location.href = 'dish-details.html?' + queryParams.toString();
}
displayCart();
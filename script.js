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
function displayDishDetails(dishName, price) {
    // Open a new tab
    let newTab = window.open('', '_blank');
    
    // Write HTML content to the new tab
    newTab.document.write(`
        <html>
        <head>
            <title>${dishName} Details</title>
            <style>
                /* Inline CSS styles for the new tab content */
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f8f8f8;
                    padding: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                }
                .dish-details {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;
                    max-width: 50%;
                }
                h1 {
                    color: #333;
                    margin-bottom: 10px;
                }
                img {
                    max-width: 100%;
                    height: auto;
                    margin-right: 20px;
                }
                p {
                    margin-bottom: 10px;
                }
                button {
                    padding: 10px 20px;
                    background-color: #ff9800;
                    color: #fff;
                    border: none;
                    cursor: pointer;
                    margin-right: 10px;
                }
                div{
                    display: flex;
                }
                button:hover {
                    background-color: #f57c00;
                }
            </style>
        </head>
        <body>
            <img src="img/${dishName}.jpg" alt="${dishName}">
            <div class="dish-details">
                <h1>${dishName}</h1>
                <p>Price: ${price}</p>
                <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, ipsum.</p>
                <div>
                <button onclick="order('${dishName}')">Order</button>
                <button onclick="addToCart('${dishName}')">Add to Cart</button>
                </div>
            </div>
        </body>
        </html>
    `);
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


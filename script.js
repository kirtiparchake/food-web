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
function nav(){
    let nav=document.querySelector('.nav')
    nav.style.display= "block";




    let login=document.querySelector('.login')
    login.style.display='none'
    
}
function login (){
    let login=document.querySelector('.login')
      login.style.display='block'


    let nav=document.querySelector('.nav')
      nav.style.display= "none"
    
    
}
let slide = document.querySelectorAll(".customer");
let count = 0;
console.log(slide);

slide.forEach(function(customer, index){
    customer.style.left=`${index * 100}%`
})

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


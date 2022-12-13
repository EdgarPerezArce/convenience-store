
let userName= prompt("Enter your User Name");
let userEmail = prompt ("Enter your email");
let userPassword = prompt ("Enter Password");
let creditCard = prompt ("Enter Credit Card Info")



console.log(userName,userEmail,userPassword);

let total=0;

function addCart(price){
    total = total + price;
    console.log(total);
    return total;
    
    
}

function calculateTaxes(){
    subtotal=addCart(1);
    
    let totalTax = subtotal *1.11;

    document.getElementById
    ("receipt").innerHTML=
        `<p>Customer = ${userName}<p>
        <p>Email = ${userEmail}<p>
        <p> Subtotal = ${subtotal}<p>
        <p> Taxes = ${totalTax}<p>
        <p>"Have a Wonderful day!"</p>`;

    
}






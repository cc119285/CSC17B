/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function cart() {
    var cartstr=[];
    var name;
    var description;
    var price;
    
    //Create catalogue
    var catalogue=[];
    var itemID;
};

cart.displayCart=function() {
    var order=document.getElementById("order");
    var totPrce=0;
    
    //Get info of what's in the cart
    for (var product in cart.cartstr) {
        var row=order.insertRow();
        var name=row.insertCell(0);
        var descrip=row.insertCell(1);
        var price=row.insertCell(2);
        
        name.innerHTML=cart.cartstr[product].name;
        descrip.innerHTML=cart.cartstr[product].description;
        price.innerHTML=cart.cartstr[product].price;
        totPrce+=cart.cartstr[product].price;
    }
    document.getElementById("totPrice").innerHTML=totPrce;
    
    //Display
    
};

cart.displayinv=function() {
    for (var i=0; i<10; i++) {
        document.write(cart.catalogue[i]);
    }
};

cart.addTo=function(name, descrip, price) {
    var product={};
    product.name=name;
    product.description=descrip;
    product.price=price;
    
    cart.cartstr.push(product);
};

cart.item=function(name, descrip, price, id) {
    cart.catalogue.name=name;
    cart.catalogue.description=descrip;
    cart.catalogue.price=price;
    cart.catalogue.itemID=id;
};

cart.fillCat=function() {
    var itmAryn=["Table Lamp","Desk lamp","Buffet lamp","Torchiere","Piano lamp","Floor lamp","Arc lamp","Embedded lamp","Conveniently Shaped lamp","Dragon-Shaped lamp"];
    var itmAryd=["A small, traditional lamp","A lamp designed to illuminate deskspace","A small decorative lamp","A lamp shaped like a torch","A wide, slender lamp","A slim, raised light source","An arching lamp with a hanging light source","A lamp embedded in a table","A perfect hiding spot for a game of hide and seek","A lamp shaped like a dragon"];
    var itmAryp=[19.95, 20.15, 14.55, 18.55, 29.99, 25.95, 38.49, 28.85, 45.95, 99.99];
    
    for (var i=0; i<10; i++) {
        cart.catalogue[i]=cart.item(itmAryn[i],itmAryd[i],itmAryp,i);
    }
};
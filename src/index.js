import React from "react";
import ReactDOM from "react-dom";

const element =      <div class="products">
<div class="product-items">
    {/* <img src="../images/jackets_bershka.jpg" alt=""> */}

    <div>
        <h1 class="header-text">Outdoor Jacket</h1>
        <p>Fancy men's jacket for outdoor walking. Buy now at Shoppiz...</p>
        <span class="new">25% OFF</span>
        <h3 class="header-text"><del>$15.00</del>&nbsp;&nbsp;&nbsp;&nbsp;<span>$9.99</span></h3>
        <button>Buy now</button>
    </div>    
</div>  
<div class="product-items">

    {/* <img src="../images/New folder/pants.jpg" alt="" > */}
    <div>
        <h1 class="header-text">Mens pants</h1>
        <p>Fancy men's Jeans for outdoor walking. Buy now at Shoppiz...</p>
        <h3 class="header-text"><del>$15.00</del>&nbsp;&nbsp;&nbsp;&nbsp;<span>$9.99</span></h3>
        <button>Buy now</button>
    </div>        
</div>  

<div class="product-items">
    {/* <img src="../images/New folder/tshirt.jpg" alt=""> */}
    <div>
        <h1 class="header-text">Mens Outdoor T-shirt</h1>
        <p>Men's Summer T-Shirt for outdoor walking. Buy now at Shoppiz...</p>
        <h3 class="header-text"><del>$15.00</del>&nbsp;&nbsp;&nbsp;&nbsp;<span>$9.99</span></h3>
        <button>Buy now</button>
    </div>    
</div>  
<div class="product-items">
    <div>
    {/* <img src="../images/New folder/suit.jpg" alt=""> */}

        <h1 class="header-text">Mens Formal</h1>
        <p>Formal Suit for men for casual occasions. Buy now at Shoppiz...</p>
        <h3 class="header-text"><del>$150.00</del>&nbsp;&nbsp;&nbsp;&nbsp;<span>$90.99</span></h3>
        <button>Buy now</button>
    </div>    
</div>   
<div class="product-items">
    {/* <img src="../images/New folder/trousers-pants.jpeg" alt=""> */}
    <div>
        <h1 class="header-text">Mens sports</h1>
        <p>Fancy men's sports sports wear trousers for outdoor joggin'. Buy now at Shoppiz...</p>
        <span class="new">25% OFF</span>
        <h3 class="header-text"><del>$15.00</del>&nbsp;&nbsp;&nbsp;&nbsp;<span>$9.99</span></h3>
        <button>Buy now</button>
    </div>    
</div>  

</div>;

ReactDOM.render(element, document.getElementById("root"));


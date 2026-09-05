export let cart = JSON.parse(localStorage.getItem('cart'));

if(!cart){
    cart = [{
                productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 2,
            }, {
                productId:'15b6fc6f-327a-4ec4-896f-486349e85a3d',
                quantity: 1
            }];
}




// save in local stroge of data
function saveToStroage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}



// add to Cart products
export function addToCart(productId) 
        {   //working of cart button function
            let matchingItem;

            cart.forEach((CartItem) =>{
                    if(productId === CartItem.productId){
                        matchingItem = CartItem;        }
                });
                //
                if(matchingItem){
                    matchingItem.quantity += 1;
                }else
                    {
                        cart.push({
                            productId: productId,
                            quantity: 1
                        });
                    }
                    saveToStroage();
        }



//[ removing || using delete button for crat summary ] 
export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStroage();
}




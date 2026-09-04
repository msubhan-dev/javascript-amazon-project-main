export const cart =[];

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
                    matchingItem.Quantity += 1;
                }else
                    {
                        cart.push({
                            productId: productId,
                            Quantity: 1
                        });
                    }
        }

// cart quantity update

export function updateCartQuantity()
        {
            let cartQuantity = 0;
                cart.forEach((CartItem) => {
                    cartQuantity += CartItem.Quantity;
                });
                document.querySelector('.js-cart-quantity')
                .innerHTML = cartQuantity;
                //console.log(cartQuantity);
                //console.log(cart);
        }
import NavBar from "./nav-bar";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import ProductGallery from "./product-gallery";
import { useEffect, useState } from "react";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [addToCart, setAddToCart] = useState(false);
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  function handleShowCart() {
    if (openCart) {
      setOpenCart(false);
    } else {
      setOpenCart(true);
    }
  }
  function handleHamburgerMenu() {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    } else setIsMenuOpen(true);
  }
  function handleIncrement() {
    setQuantity((prev) => prev + 1);
  }
  function handleDecrement() {
    if (quantity <= 0) {
      setQuantity(0);
    } else {
      setQuantity((prev) => prev - 1);
    }
  }

  return (
    <div>
      <div>
        <NavBar
          hamburgerMenu={<Menu size={24} color="#5c5c5c" />}
          showCart={handleShowCart}
          openMenu={handleHamburgerMenu}
          isMenuOpen={isMenuOpen}
          closeButton={<X size={24} color="#5c5c5c" />}
          quantity={quantity}
          addToCart={addToCart}
        />
        <div className="md:flex md:gap-20 md:px-10 md:items-stretch">
          <ProductGallery />
          <div className="font-sans mx-8 mt-5 flex-1">
            <p className="text-Dark-grayish-blue text-sm font-semibold uppercase mb-1">
              Sneaker Company
            </p>
            <h1 className="font-bold text-2xl w-[70%] md:text-3xl md:w-80 md:mb-5 mb-2">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-Dark-grayish-blue text-sm lg:text-md">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            {/* price section */}
            <div className="flex md:flex-col md:gap-4 justify-between mt-5">
              <div className="flex gap-4 align-bottom">
                <p className="text-2xl font-bold">$125.00</p>
                <p className="self-end bg-black py-0.5 px-3 text-white text-sm font-semibold rounded-md">
                  50%
                </p>
              </div>
              <div>
                <p className="text-Dark-grayish-blue font-semibold line-through">
                  $250.00
                </p>
              </div>
            </div>
            {/* price section */}

            {/* add to cart button and select quantity section  */}
            <div className="mt-5 md:flex md:gap-4">
              <div className="md:flex-1 bg-Light-grayish-blue p-4 flex justify-between rounded-lg">
                <img
                  src="/src/assets/images/icon-minus.svg"
                  alt="minus.svg"
                  className="self-center hover:cursor-pointer"
                  onClick={handleDecrement}
                />
                <p className="font-bold self-center">{quantity}</p>
                <img
                  src="/src/assets/images/icon-plus.svg"
                  alt="plus.svg"
                  className="self-center hover:cursor-pointer"
                  onClick={handleIncrement}
                />
              </div>
              <button
              onClick={()=>{quantity>0 &&  setAddToCart(true)}}
              className="md:flex-2 bg-Orange gap-4 flex p-4 mt-4 mb-4 rounded-lg justify-center w-full hover:cursor-pointer">
                <img
                  src="/src/assets/images/icon-cart.svg"
                  alt="icon-cart.svg"
                  className="h-4 self-center"
                />
                <p className="font-semibold">Add to cart</p>
              </button>
            </div>
            {/* add to cart button and select quantity section */}
          </div>
          {/* the cart */}
          {openCart && (
            <div className="absolute top-20 left-1 bg-white py-4 flex flex-col gap-4 w-[98%] rounded-md md:w-[30%] md:left-[60%] md:shadow-Dark-grayish-blue md:shadow">
              <h1 className="mx-4 font-semibold">Cart</h1>
              <div className=" bg-Grayish-blue w-full p-[.5px]"></div>
              {addToCart ? (
                <div className="font-sans mx-10 flex flex-col gap-4">
                  <div className="flex justify-around">
                    <img
                      src="/src/assets/images/image-product-1-thumbnail.jpg"
                      alt="thumbnail"
                      className="w-[15%] rounded-md"
                    />
                    <div className="self-center text-Grayish-blue text-md">
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125 x {quantity}{" "}
                        <span className="text-black font-semibold">
                          ${quantity * 125}
                        </span>
                      </p>
                    </div>
                    <img
                      src="/src/assets/images/icon-delete.svg"
                      alt="delete-icon"
                      className="h-4 self-center"
                      onClick={()=> setAddToCart(false)}
                    />
                  </div>
                  <button className="bg-Orange font-semibold w-full p-3 mb-4 rounded-md">
                    Checkout
                  </button>
                </div>
              ) : (
                <div className="p-10 text-center font-semibold text-Dark-grayish-blue">
                  Your cart is empty
                </div>
              )}
            </div>
          )}
          {isMenuOpen && (
            <div className="bg-black/75 absolute top-0 left-0 w-full h-full lg:hidden">
              <ul className="flex flex-col gap-5 md:gap-10 bg-white w-2/3 h-full px-5 py-20 md:px-25">
                <li className="font-bold text-Very-dark-blue">Collections</li>
                <li className="font-bold text-Very-dark-blue">Men</li>
                <li className="font-bold text-Very-dark-blue">Women</li>
                <li className="font-bold text-Very-dark-blue">About</li>
                <li className="font-bold text-Very-dark-blue">Contact</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

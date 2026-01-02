function NavBar({ hamburgerMenu, openMenu,addToCart, showCart, isMenuOpen, closeButton, quantity }) {
  return (
    <div className="md:px-20">
        <div className="bg-white flex justify-between px-5 py-5 md:border-b md:mb-20 border-Grayish-blue">
          <div className="flex align-middle gap-5">
            <div className="lg:hidden z-10" onClick={openMenu}>{isMenuOpen? closeButton:hamburgerMenu}</div>
            <img src="./assets/images/logo.svg" alt="logo.svg" />
            <div className="mx-15 hidden lg:block ">
            <ul className="flex gap-5 text-Dark-grayish-blue">
              <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-5
              after:h-[2px] after:w-0 after:bg-Orange after:transition-all after:duration-300 hover:after:w-full
              ">Collection</li>
              <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-5
              after:h-[2px] after:w-0 after:bg-Orange after:transition-all after:duration-300 hover:after:w-full
              ">Men</li>
              <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-5
              after:h-[2px] after:w-0 after:bg-Orange after:transition-all after:duration-300 hover:after:w-full
              ">Women</li>
              <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-5
              after:h-[2px] after:w-0 after:bg-Orange after:transition-all after:duration-300 hover:after:w-full
              ">About</li>
              <li className="relative cursor-pointer after:content-[''] after:absolute after:left-0 after:-bottom-5
              after:h-[2px] after:w-0 after:bg-Orange after:transition-all after:duration-300 hover:after:w-full
              ">Contact</li>
            </ul>
          </div>
          </div>
          <div className="flex gap-5 align-middle">
            <img
              className="h-5 hover:cursor-pointer"
              src="./assets/images/icon-cart.svg"
              alt="icon-cart"
              onClick={showCart}
            />
            {addToCart&&<p className="absolute mx-2 -my-3.5 bg-Orange py-0.5 px-2 rounded-full text-white font-semibold text-sm">{quantity}</p>}
            <img
              className="h-5 border-Orange rounded-full hover:border-2 cursor-pointer "
              src="./assets/images/image-avatar.png"
              alt="image-avatar"
            />
          </div>
        </div>
    </div>
  );
}
export default NavBar;

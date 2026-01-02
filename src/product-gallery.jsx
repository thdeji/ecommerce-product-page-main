import { useState } from "react";

function ProductGallery() {
  const images = [
    "/src/assets/images/image-product-1.jpg",
    "/src/assets/images/image-product-2.jpg",
    "/src/assets/images/image-product-3.jpg",
    "/src/assets/images/image-product-4.jpg",
  ];
  const [imageIndex, setImageIndex] = useState(0);

  function handleIncrement() {
    let count = imageIndex;
    if (imageIndex >= 3) {
      count = 0;
      setImageIndex(0);
    } else {
      count++;
      setImageIndex(count);
    }
    console.log({ imageIndex });
  }

  function handleDecrement() {
    let count = imageIndex;
    if (count <= 0) {
      count = 3;
      setImageIndex(3);
    } else {
      count--;
      setImageIndex(count);
    }
    console.log({ imageIndex });
  }

  return (
    <div className="flex-1">
      <div className="absolute flex justify-around gap-60 w-full mt-[50%] md:hidden">
        <img
          className="bg-white p-5 rounded-full hover:cursor-pointer"
          src="/src/assets/images/icon-previous.svg"
          alt="previous"
          onClick={handleDecrement}
        />
        <img
          className="bg-white p-5 rounded-full hover:cursor-pointer"
          src="/src/assets/images/icon-next.svg"
          alt="next"
          onClick={handleIncrement}
        />
      </div>
      <div>
        <img src={images[imageIndex]} alt="imageProduct" className="md:rounded-2xl"/>
        <div className="hidden md:flex justify-between mt-4">
          <img
            src="/src/assets/images/image-product-1-thumbnail.jpg"
            alt="image-thumbnail.img"
            className="w-1/5"
            onClick={()=> setImageIndex(0)}
          />
          <img
            src="/src/assets/images/image-product-2-thumbnail.jpg"
            alt="image-thumbnail.img"
            className="w-1/5"
            onClick={()=> setImageIndex(1)}
          />
          <img
            src="/src/assets/images/image-product-3-thumbnail.jpg"
            alt="image-thumbnail.img"
            className="w-1/5"
            onClick={()=> setImageIndex(2)}
          />
          <img
            src="/src/assets/images/image-product-4-thumbnail.jpg"
            alt="image-thumbnail.img"
            className="w-1/5"
            onClick={()=> setImageIndex(3)}
          />
        </div>
      </div>
    </div>
  );
}
export default ProductGallery;

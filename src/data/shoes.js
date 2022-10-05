import image1 from './../images/image-product-1.jpg';
import image2 from './../images/image-product-2.jpg';
import image3 from './../images/image-product-3.jpg';
import image4 from './../images/image-product-4.jpg';
import image1Thumb from './../images/image-product-1-thumbnail.jpg';
import image2Thumb from './../images/image-product-2-thumbnail.jpg';
import image3Thumb from './../images/image-product-3-thumbnail.jpg';
import image4Thumb from './../images/image-product-4-thumbnail.jpg';



const productData = {
    "productId" : "1",
    "name": "fall limited edition sneakers ",
    "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, the'll withstand everything the weather can offer.",
    "picture": [image1, image2, image3, image4],
    "thumbnails" : [image1Thumb,image2Thumb,image3Thumb,image4Thumb],
    "price": 250,
    "isDiscount": true,
    "discount": 50,
} 

export default productData;
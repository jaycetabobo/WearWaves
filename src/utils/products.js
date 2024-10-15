// bag slide
import slidebag1 from "../Images/bag1.jpg";
import slidebag2 from "../Images/bag2.jpg";
import slidebag3 from "../Images/bag3.jpg";
import slidebag4 from "../Images/bag4.jpg";

//discount bag
import discountbag1 from '../Images/discountbag1.jpg';
import discountbag2 from '../Images/discountbag2.png';

//product 
import productbag1 from '../Images/productbag1.webp';
import productbag2 from '../Images/productbag2.jpg';
import productbag3 from '../Images/productbag3.jpg';
import productbag4 from '../Images/productbag4.jpg';
import productbag5 from '../Images/productbag5.jpg';

export const SliderData = [
  {
    id: 1,
    title: "50% Off On Stylish Bags For Your First Shopping",
    desc: "Discover our collection of stylish bags, crafted for both elegance and durability. Perfect for everyday use or special occasions, combining fashion with functionality.",
    cover: slidebag1,
  },
  {
    id: 2,
    title: "50% Off On Trendy Bags For Your First Shopping",
    desc: "Upgrade your style with our trendy bags, designed to suit any outfit and occasion. Made from high-quality materials to ensure long-lasting use.",
    cover: slidebag2,
  },
  {
    id: 3,
    title: "50% Off On Versatile Bags For Your First Shopping",
    desc: "Our versatile bags offer the perfect blend of style and practicality. Ideal for work, travel, or casual outings, with spacious compartments to fit all your essentials.",
    cover: slidebag3,
  },
  {
    id: 4,
    title: "50% Off On Premium Bags For Your First Shopping",
    desc: "Experience the elegance of our premium bags, thoughtfully designed for those who appreciate both style and functionality. A must-have accessory for any wardrobe.",
    cover: slidebag4,
  },
];


export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Enjoy free shipping on all bag orders. Get your favorite styles delivered straight to your door!",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Shop securely with our safe payment options for your bag purchases.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Secure Checkout",
    subtitle: "Your personal information is safe with us. Experience secure and easy checkout.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Money-Back Guarantee",
    subtitle: "Shop with confidence! Enjoy a money-back guarantee on all bags if you’re not satisfied.",
    bg: "#d6e5fb",
  },
];


export const discoutProducts = [
  {
    id: "01",
    productName: "Ganterberg Tote Bag",
    imgUrl: discountbag1, // Path to your uploaded image
    category: "tote bag",
    price: 2466, // Adjust the price as needed
    discount: 15, // Adjust the discount percentage as needed
    shortDesc: "Stylish tote bag with leather straps, perfect for everyday use.",
    description:
      "This elegant Ganterberg Tote Bag features premium leather handles and a spacious interior. Ideal for work or casual outings, it offers a chic design while providing comfort and functionality. The detachable shoulder strap allows for versatility, making it a great choice for any occasion.",
    reviews: [
      {
        rating: 4.7,
        text: "High-quality material and a great fit for daily use.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Pink Backpack",
    imgUrl: discountbag2, // Path to your uploaded image
    category: "backpack bag",
    price: 1882, // Adjust the price as needed
    discount: 10, // Adjust the discount percentage as needed
    shortDesc: "A stylish and lightweight backpack perfect for everyday use.",
    description:
      "This pink backpack combines both style and functionality. Made from durable materials, it offers plenty of space for your belongings and a comfortable fit with padded shoulder straps. Perfect for students, commuters, or anyone looking for a versatile and trendy accessory.",
    reviews: [
      {
        rating: 4.8,
        text: "Great quality and very comfortable to wear daily.",
      },
      {
        rating: 4.8,
        text: "Love the design and how lightweight it is!",
      },
    ],
    avgRating: 4.7,
  }

]

export const products = [
  {
    id: "01",
    productName: "Ganterberg Tote Bag",
    imgUrl: discountbag1, // Path to your uploaded image
    category: "tote bag",
    price: 2466, // Adjust the price as needed
    discount: 15, // Adjust the discount percentage as needed
    shortDesc: "Stylish tote bag with leather straps, perfect for everyday use.",
    description:
      "This elegant Ganterberg Tote Bag features premium leather handles and a spacious interior. Ideal for work or casual outings, it offers a chic design while providing comfort and functionality. The detachable shoulder strap allows for versatility, making it a great choice for any occasion.",
    reviews: [
      {
        rating: 4.7,
        text: "High-quality material and a great fit for daily use.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Pink Backpack",
    imgUrl: discountbag2, // Path to your uploaded image
    category: "backpack bag",
    price: 1882, // Adjust the price as needed
    discount: 10, // Adjust the discount percentage as needed
    shortDesc: "A stylish and lightweight backpack perfect for everyday use.",
    description:
      "This pink backpack combines both style and functionality. Made from durable materials, it offers plenty of space for your belongings and a comfortable fit with padded shoulder straps. Perfect for students, commuters, or anyone looking for a versatile and trendy accessory.",
    reviews: [
      {
        rating: 4.8,
        text: "Great quality and very comfortable to wear daily.",
      },
      {
        rating: 4.8,
        text: "Love the design and how lightweight it is!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Brown Crossbody Bag",
    imgUrl: productbag1, // Path to your uploaded image
    category: "crossbody bag", // or "shoulder bag" depending on your preference
    price: 6990, // Adjust the price as needed
    shortDesc: "A chic and versatile crossbody bag for casual or formal wear.",
    description:
      "This elegant brown crossbody bag is perfect for both casual outings and formal occasions. Crafted from high-quality materials with a sleek design, it features a gold-tone clasp and adjustable strap, making it a timeless addition to your wardrobe.",
    reviews: [
      {
        rating: 4.6,
        text: "Beautiful design and perfect size for everyday essentials.",
      },
      {
        rating: 4.5,
        text: "Love the quality of the leather and the modern look.",
      },
    ],
    avgRating: 4.55,
  },

  {
    id: "04",
    productName: "Black Crossbody Bag",
    imgUrl: productbag2,  // Path to your uploaded image
    category: "crossbody bag",  // or "shoulder bag" depending on your preference
    price: 560,  // Adjust the price as needed
    shortDesc: "A sleek and versatile crossbody bag for any occasion.",
    description: "This stylish black crossbody bag is designed for both casual and formal events. Made from premium textured leather, it features a durable strap and a spacious compartment to carry your essentials with ease.",
    reviews: [
      {
        rating: 4.6,
        text: "Excellent quality and perfect size for daily use."
      },
      {
        rating: 4.5,
        text: "The design is simple yet elegant, and the leather feels premium."
      }
    ],
    avgRating: 4.55
  },
  {
    id: "05",
    productName: "Black Belt Bag",
    imgUrl: productbag3,  // Path to your uploaded image
    category: "belt bag",  // or "fanny pack" depending on your preference
    price: 680,  // Adjust the price as needed
    shortDesc: "A compact and practical belt bag for everyday convenience.",
    description: "This black belt bag offers a sleek and hands-free solution for carrying your essentials. Featuring multiple zip compartments and an adjustable strap, it’s perfect for daily use or travel. Durable and versatile, it fits comfortably around the waist or across the body.",
    reviews: [
      {
        rating: 4.7,
        text: "Very practical and lightweight, perfect for casual outings."
      },
      {
        rating: 4.6,
        text: "Love the minimalist design and the adjustable strap for comfort."
      }
    ],
    avgRating: 4.65
  },

  {
    id: "06",
    productName: "Beige Tote Bag",
    imgUrl: productbag4,  // Path to your uploaded image
    category: "tote bag",
    price: 120,  // Adjust the price as needed
    shortDesc: "A spacious beige tote bag ideal for shopping or casual outings.",
    description: "This beige tote bag features a sturdy design with ample space for carrying daily essentials or groceries. The black and white striped handles add a stylish touch, making it suitable for both casual outings and practical use. Made from durable material, it is easy to clean and perfect for everyday use.",
    reviews: [
      {
        rating: 4.8,
        text: "Great size and very durable. Perfect for groceries."
      },
      {
        rating: 4.5,
        text: "Stylish and practical. I love the design and spaciousness."
      }
    ],
    avgRating: 4.65
  },
  {
    id: "07",
    productName: "Blue and Black Duffel Bag",
    imgUrl: productbag5,  // Path to your uploaded image
    category: "duffel bag",
    price: 450,  // Adjust the price as needed
    shortDesc: "A versatile and spacious duffel bag perfect for sports or travel.",
    description: "This blue and black duffel bag features a durable design with multiple compartments for organizing your gear. Ideal for gym sessions, sports activities, or travel, it comes with a comfortable shoulder strap and sturdy handles for easy carrying. The stylish color combination adds a touch of elegance, making it suitable for both casual and athletic use.",
    reviews: [
      {
        rating: 4.6,
        text: "Perfect size for gym gear. Very durable and practical."
      },
      {
        rating: 4.7,
        text: "Love the color and spaciousness. Great for weekend trips."
      }
    ],
    avgRating: 4.65
  },
];

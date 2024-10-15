//slider image
import sliderbeach from '../Images/sliderbeach.jpg';
import sliderbeach2 from '../Images/sliderbeach2.jpg';
import sliderbeach3 from '../Images/sliderbeach3.jpg';

//discount product
import discountproduct from '../Images/discountswim.jpg'
import discountproduct2 from '../Images/discountswim2.jpg'

//product
import productswim from '../Images/productswim.jpg';
import productswim2 from '../Images/productswim2.jpg';
import productswim3 from '../Images/productswim3.jpg';
import productswim4 from '../Images/productswim4.jpg';
import productswim5 from '../Images/productswim5.jpg';


export const SliderData = [
  {
    id: 1,
    title: "Summer Splash Sale - Up to 50% Off",
    desc: "Dive into our exclusive summer collection! Enjoy up to 50% off on stylish swimsuits, bikinis, and swim trunks. Perfect for beach days and poolside lounging.",
    cover: sliderbeach, // Replace with your swimwear image
  },
  {
    id: 2,
    title: "New Arrivals: Trendy Swimwear 2024",
    desc: "Discover the latest trends in swimwear for 2024. From vibrant prints to classic cuts, find the perfect piece to elevate your summer wardrobe.",
    cover: sliderbeach2, // Replace with your swimwear image
  },
  {
    id: 3,
    title: "Bundle & Save: Buy More, Save More",
    desc: "Get more value with our bundle deals. Purchase multiple items and enjoy significant savings on your favorite swimwear.",
    cover: sliderbeach3, // Replace with your swimwear image
  },
];


export const serviceData = [
  {
    icon: <ion-icon name="rainy-outline"></ion-icon>,
    title: "Free Shipping",
    subtitle:
      "Get free shipping on all swimwear orders. Enjoy fast delivery for all your beach essentials!",
    bg: "#b2ebf2", // Light turquoise
  },
  {
    icon: <ion-icon name="sunny-outline"></ion-icon>,
    title: "Sun Protection Guarantee",
    subtitle:
      "Stay protected with our UV-resistant swimwear, designed to keep you safe under the sun.",
    bg: "#ffe0b2", // Light orange
  },
  {
    icon: <ion-icon name="shield-outline"></ion-icon>,
    title: "Secure Checkout",
    subtitle:
      "Your purchase is protected with our secure checkout process. Shop with peace of mind.",
    bg: "#c8e6c9", // Light green
  },
  {
    icon: <ion-icon name="umbrella-outline"></ion-icon>,
    title: "Beach-Ready Styles",
    subtitle:
      "Discover a wide range of swimwear designed for comfort, style, and durability.",
    bg: "#d1c4e9", // Light purple
  },
];


export const discoutProducts = [
  {
    id: "01",
    productName: "Hard Summer Triangle Top",
    imgUrl: discountproduct, // Path to your uploaded image
    category: "Women",
    price: 6400, // Adjust the price as needed
    discount: 20, // Adjust the discount percentage as needed
    shortDesc: "Shine at the beach with this metallic rose gold triangle top.",
    description:
      "Hard Summer is Beach Bunny's top selling collection. Our rose gold fabric is metallic and you will shine at the beach or pool.",
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
    productName: "Ice & Slice",
    imgUrl: discountproduct2, // Path to your uploaded image
    category: "Men",
    price: 4737, // Adjust the price as needed
    discount: 10, // Adjust the discount percentage as needed
    shortDesc: "Refresh your look and get fruity this season with our Ice & Slice shorts.",
    description:
      "They're made from 100% super-soft, quick drying recycled REPREVE® polyester and come in a mid length. Each pair comes with a matching swim bag. Feel like a peach on the *Paired best with a G&T!.",
    reviews: [
      {
        rating: 4.8,
        text: "Great quality and very comfortable",
      },
      {
        rating: 4.8,
        text: "Love the design!",
      },
    ],
    avgRating: 4.7,
  }

]

export const products = [
  {
    id: "01",
    productName: "Hard Summer Triangle Top",
    imgUrl: discountproduct, // Path to your uploaded image
    category: "Women",
    price: 6400, // Adjust the price as needed
    shortDesc: "Shine at the beach with this metallic rose gold triangle top.",
    description:
      "Hard Summer is Beach Bunny's top selling collection. Our rose gold fabric is metallic and you will shine at the beach or pool.",
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
    productName: "Ice & Slice",
    imgUrl: discountproduct2, // Path to your uploaded image
    category: "Men",
    price: 4737, // Adjust the price as needed
    shortDesc: "Refresh your look and get fruity this season with our Ice & Slice shorts.",
    description:
      "They're made from 100% super-soft, quick drying recycled REPREVE® polyester and come in a mid length. Each pair comes with a matching swim bag. Feel like a peach on the *Paired best with a G&T!.",
    reviews: [
      {
        rating: 4.8,
        text: "Great quality and very comfortable",
      },
      {
        rating: 4.8,
        text: "Love the design!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Fresh Prince Womens",
    imgUrl: productswim, // Path to your uploaded image
    category: "Women", // or "shoulder bag" depending on your preference
    price: 4332, // Adjust the price as needed
    shortDesc: "Stylish swimwear with quick-drying fabric and a matching mini bag.",
    description:
      "Now, this is a story all about how your style got flipped-turned upside down... sit on your throne - or sun lounger this Summer and feel like the Fresh Prince(ss) in our fresh print. They're made from super-soft, quick drying fabric and come with a matching mini bag. Perfect for pairing with a bikini, one-piece or even one of our t-shirts.",
    reviews: [
      {
        rating: 4.6,
        text: "Beautiful design and perfect size.",
      },
      {
        rating: 4.5,
        text: "Love the quality!",
      },
    ],
    avgRating: 4.55,
  },

  {
    id: "04",
    productName: "Purfect Paradise Triangle",
    imgUrl: productswim2,  // Path to your uploaded image
    category: "Women",  // or "shoulder bag" depending on your preference
    price: 4043,  // Adjust the price as needed
    shortDesc: "Leopard print triangle top made from 100% recycled materials, featuring a rose gold clasp and adjustable straps.",
    description: "What's your 'Purfect' Paradise? This leopard adorned, jungle inspired triangle top is made from premium 100% regenerated materials.* It features a branded rose gold back clasp fastening and adjustable shoulder straps. Pair with the classic bottoms or with the high waisted bottoms if you're feeling more active. You'll be sure to look the coolest cat in the pool! Model is 165 / 5'4 and is wearing XS top / XS bottom.This bikini comes in a swim bag perfect for your travels. * The solid colour of this bikini top is made from ECONYL®, a fibre produced by recovering nylon waste such as fishing nets from the oceans and other discarded waste material.It is then turned into virgin quality nylon yarn.The printed fabric is made from REPREVE®, a fibre made from 100 % recycled plastic, most of which are water bottles.They offset the use of new petroleum, emitting fewer greenhouse gases, whilst conserving water and energy throughout the process.",
    reviews: [
      {
        rating: 4.6,
        text: "Excellent quality and perfect size."
      },
      {
        rating: 4.5,
        text: "The design is simple yet elegant, and the material feels premium."
      }
    ],
    avgRating: 4.55
  },
  {
    id: "05",
    productName: "CIRO & LUMA SUNLACE white crochet bikini",
    imgUrl: productswim3,  // Path to your uploaded image
    category: "Women",  // or "fanny pack" depending on your preference
    price: 3025,  // Adjust the price as needed
    shortDesc: "Adjustable triangle top with a trendy crocheted design, perfect for a stylish summer look.",
    description: "CIRO SUNLACE white bikini top: this triangle top is a key piece in our collection and is fully adjustable with ties. Its on-trend crocheted design sets it apart.",
    reviews: [
      {
        rating: 4.7,
        text: "Very practical and lightweight, perfect for summer."
      },
      {
        rating: 4.6,
        text: "Love the minimalist design and the comfort."
      }
    ],
    avgRating: 4.65
  },

  {
    id: "06",
    productName: "Palms Swim Brief",
    imgUrl: productswim4,  // Path to your uploaded image
    category: "Men",
    price: 3466,  // Adjust the price as needed
    shortDesc: "Stylish swim briefs featuring a vibrant palm print, perfect for beach days and poolside lounging.",
    description: "Leafing soon to go on vacation? Just like plants, we also need a bit of sunlight and water to live our best lives. Throw our Palm swim briefs in your case this Summer and let the compliments roll in. They're made from super-soft and quick drying fabric. ",
    reviews: [
      {
        rating: 4.8,
        text: "Great size and very durable. Perfect for swimming."
      },
      {
        rating: 4.5,
        text: "Stylish and practical. I love the design."
      }
    ],
    avgRating: 4.65
  },
  {
    id: "07",
    productName: "Black / Neon Green Stretch",
    imgUrl: productswim5,  // Path to your uploaded image
    category: "Men",
    price: 4737,  // Adjust the price as needed
    shortDesc: "Classic black active shorts with neon green palm tree detail, made from soft, recycled REPREVE® polyester.",
    description: "Keep it classic this season in our solid black active shorts. Simple with a pop of a green neon Boardies® palm tree to light up your Summer. They're made from a super-soft, recycled stretch REPREVE® polyester. The black draw cords have neon green dipped ends, zip side pockets and the shorts are lined with a black sporty mesh with a neon green branded Boardies® binding.  Perfect for taking you from gym to swim!",
    reviews: [
      {
        rating: 4.6,
        text: "Perfect size for summer sports. Very durable and practical."
      },
      {
        rating: 4.7,
        text: "Love the color. Great for summer trips."
      }
    ],
    avgRating: 4.65
  },
];

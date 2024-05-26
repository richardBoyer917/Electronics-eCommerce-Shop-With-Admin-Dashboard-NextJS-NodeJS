const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const demoProducts = [
  {
    id: "1",
    title: "Smart phone",
    price: 22,
    rating: 5,
    description: "This is smart phone description",
    mainImage: "product1.webp",
    slug: "smart-phone-demo",
    manufacturer: "Samsung",
    categoryId: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    inStock: 0,
  },
  {
    id: "2",
    title: "SLR camera",
    price: 24,
    rating: 0,
    description: "This is slr description",
    mainImage: "product2.webp",
    slug: "slr-camera-demo",
    manufacturer: "Canon",
    categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    inStock: 0,
  },
  {
    id: "3",
    title: "Mixer grinder",
    price: 25,
    rating: 4,
    description: "This is mixed grinder description",
    mainImage: "product3.webp",
    slug: "mixed-grinder-demo",
    manufacturer: "ZunVolt",
    categoryId: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    inStock: 1,
  },
  {
    id: "4",
    title: "Phone gimbal",
    price: 21,
    rating: 5,
    description: "This is phone gimbal description",
    mainImage: "product4.webp",
    slug: "phone-gimbal-demo",
    manufacturer: "Samsung",
    categoryId: "d30b85e2-e544-4f48-8434-33fe0b591579",
    inStock: 1,
  },
  {
    id: "5",
    title: "Tablet keyboard",
    price: 52,
    rating: 4,
    description: "This is tablet keyboard description",
    mainImage: "product5.webp",
    slug: "tablet-keyboard-demo",
    manufacturer: "Samsung",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 1,
  },
  {
    id: "6",
    title: "Wireless earbuds",
    price: 74,
    rating: 3,
    description: "This is earbuds description",
    mainImage: "product6.webp",
    slug: "wireless-earbuds-demo",
    manufacturer: "Samsung",
    categoryId: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    inStock: 1,
  },
  {
    id: "7",
    title: "Party speakers",
    price: 35,
    rating: 5,
    description: "This is party speakers description",
    mainImage: "product7.webp",
    slug: "party-speakers-demo",
    manufacturer: "SOWO",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 1,
  },
  {
    id: "8",
    title: "Slow juicer",
    price: 69,
    rating: 5,
    description: "Slow juicer desc",
    mainImage: "product8.webp",
    slug: "slow-juicer-demo",
    manufacturer: "Bosch",
    categoryId: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    inStock: 1,
  },
  {
    id: "9",
    title: "Wireless headphones",
    price: 89,
    rating: 3,
    description: "This is wireless headphones description",
    mainImage: "product9.webp",
    slug: "wireless-headphones-demo",
    manufacturer: "Sony",
    categoryId: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    inStock: 1,
  },
  {
    id: "10",
    title: "Smart watch",
    price: 64,
    rating: 3,
    description: "This is smart watch description",
    mainImage: "product10.webp",
    slug: "smart-watch-demo",
    manufacturer: "Samsung",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 1,
  },
  {
    id: "11",
    title: "Notebook horizon",
    price: 52,
    rating: 5,
    description: "This is notebook description",
    mainImage: "product11.webp",
    slug: "notebook-horizon-demo",
    manufacturer: "HP",
    categoryId: "782e7829-806b-489f-8c3a-2689548d7153",
    inStock: 1,
  },
  {
    id: "12",
    title: "Mens trimmer",
    price: 54,
    rating: 5,
    description: "This is trimmer description",
    mainImage: "product12.webp",
    slug: "mens-trimmer-demo",
    manufacturer: "Gillete",
    categoryId: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    inStock: 0,
  },
  {
    id: "13",
    title: "Sony Bluetooth Speaker",
    price: 100,
    rating: 5,
    description: "This is Sony Bluetooth Speaker",
    mainImage: "sony speaker image 1.jpg",
    slug: "sony-speaker-bluetooth",
    manufacturer: "Sony",
    categoryId: "7a241318-624f-48f7-9921-1818f6c20d85",
    inStock: 1,
  },
  {
    id: "14",
    title: "DELAX 1800 PREMIUM",
    price: 50,
    rating: 5,
    description: "This is DELAX 1800 PREMIUM description",
    mainImage: "mouse 1.png",
    slug: "delax-1800-premium",
    manufacturer: "DELAX",
    categoryId: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    inStock: 1,
  },
  {
    id: "15",
    title: "DELAX 2800 STANDARD",
    price: 60,
    rating: 4,
    description: "This is DELAX 2800 STANDARD description",
    mainImage: "mouse 2 1.png",
    slug: "delax-2800-standard",
    manufacturer: "DELAX",
    categoryId: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    inStock: 1,
  },
  {
    id: "16",
    title: "DELAX 800 PREMIUM",
    price: 100,
    rating: 2,
    description: "This is DELAX 800 PREMIUM description",
    mainImage: "mouse 3 1.png",
    slug: "delax-800-premium",
    manufacturer: "DELAX",
    categoryId: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    inStock: 1,
  },
  {
    id: "17",
    title: "MING TABLET 1200",
    price: 100,
    rating: 2,
    description: "This is MING TABLET 1200 description",
    mainImage: "tablet 1 1.png",
    slug: "ming-tablet-1200",
    manufacturer: "MING",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 1,
  },
  {
    id: "18",
    title: "MING TABLET 2200",
    price: 130,
    rating: 5,
    description: "This is MING TABLET 2200 description",
    mainImage: "tablet 2 1.png",
    slug: "ming-tablet-2200",
    manufacturer: "MING",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 1,
  },
  {
    id: "19",
    title: "MING TABLET 5000",
    price: 230,
    rating: 4,
    description: "This is MING TABLET 5000 description",
    mainImage: "tablet 3 1.png",
    slug: "ming-tablet-5000",
    manufacturer: "MING",
    categoryId: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    inStock: 0,
  },
  {
    id: "20",
    title: "MING SMART PHONE 3000",
    price: 230,
    rating: 4,
    description: "This is MING SMART PHONE 3000 description",
    mainImage: "smart phone 1.png",
    slug: "ming-smart-phone-3000",
    manufacturer: "MING",
    categoryId: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    inStock: 1,
  },
  {
    id: "21",
    title: "MING SMART PHONE 1000",
    price: 130,
    rating: 5,
    description: "This is MING SMART PHONE 1000 description",
    mainImage: "smart phone 2.png",
    slug: "ming-smart-phone-1000",
    manufacturer: "MING",
    categoryId: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    inStock: 1,
  },
  {
    id: "22",
    title: "MING SMART PHONE 9000",
    price: 290,
    rating: 3,
    description: "This is MING SMART PHONE 9000 description",
    mainImage: "smart phone 3.png",
    slug: "ming-smart-phone-9000",
    manufacturer: "MING",
    categoryId: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    inStock: 1,
  },
  {
    id: "23",
    title: "VISION HD CAMERA 1000",
    price: 290,
    rating: 3,
    description: "This is VISION HD CAMERA 1000 description",
    mainImage: "camera 1.png",
    slug: "vision-hd-camera-1000",
    manufacturer: "VISION",
    categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    inStock: 1,
  },
  {
    id: "24",
    title: "VISION HD CAMERA 3000",
    price: 590,
    rating: 5,
    description: "This is VISION HD CAMERA 3000 description",
    mainImage: "camera 2.png",
    slug: "vision-hd-camera-3000",
    manufacturer: "VISION",
    categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    inStock: 1,
  },
  {
    id: "25",
    title: "VISION HD CAMERA 7000",
    price: 390,
    rating: 5,
    description: "This is VISION HD CAMERA 7000 description",
    mainImage: "camera 3.png",
    slug: "vision-hd-camera-7000",
    manufacturer: "VISION",
    categoryId: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    inStock: 0,
  },
  {
    id: "26",
    title: "SAMSUNG SMART WATCH M6",
    price: 500,
    rating: 5,
    description: "This is SAMSUNG SMART WATCH M6 description",
    mainImage: "smart watch 1.png",
    slug: "samsung-smart-watch-m6",
    manufacturer: "SAMSUNG",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 1,
  },
  {
    id: "27",
    title: "SAMSUNG SMART WATCH M7",
    price: 500,
    rating: 5,
    description: "This is SAMSUNG SMART WATCH M6 description",
    mainImage: "smart watch 2.png",
    slug: "samsung-smart-watch-m7",
    manufacturer: "SAMSUNG",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 1,
  },
  {
    id: "28",
    title: "SAMSUNG SMART WATCH M4",
    price: 300,
    rating: 4,
    description: "This is SAMSUNG SMART WATCH M4 description",
    mainImage: "smart watch 3.png",
    slug: "samsung-smart-watch-m4",
    manufacturer: "SAMSUNG",
    categoryId: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    inStock: 1,
  }

];

const demoProductImages = [
  {
    imageID: "1",
    productID: "13",
    image: "sony speaker image 1.jpg",
  },
  {
    imageID: "2",
    productID: "13",
    image: "sony speaker image 2.jpg",
  },
  {
    imageID: "3",
    productID: "13",
    image: "sony speaker image 3.jpg",
  },
  {
    imageID: "4",
    productID: "13",
    image: "sony speaker image 4.jpg",
  },
  {
    imageID: "5",
    productID: "14",
    image: "mouse 1 2.png",
  },
  {
    imageID: "6",
    productID: "14",
    image: "mouse 1 3.png",
  },
  {
    imageID: "7",
    productID: "15",
    image: "mouse 2 2.png",
  },
  {
    imageID: "8",
    productID: "15",
    image: "mouse 2 3.png",
  },
  {
    imageID: "9",
    productID: "16",
    image: "mouse 3 1.png",
  },
  {
    imageID: "10",
    productID: "16",
    image: "mouse 3 2.png",
  },
  {
    imageID: "11",
    productID: "16",
    image: "mouse 3 3.png",
  }
  
];

const demoCategories = [
  {
    id: "7a241318-624f-48f7-9921-1818f6c20d85",
    name: "speakers",
  },
  {
    id: "313eee86-bc11-4dc1-8cb0-6b2c2a2a1ccb",
    name: "trimmers",
  },
  {
    id: "782e7829-806b-489f-8c3a-2689548d7153",
    name: "laptops",
  },
  {
    id: "a6896b67-197c-4b2a-b5e2-93954474d8b4",
    name: "watches",
  },
  {
    id: "4c2cc9ec-7504-4b7c-8ecd-2379a854a423",
    name: "headphones",
  },
  {
    id: "8d2a091c-4b90-4d60-b191-114b895f3e54",
    name: "juicers",
  },
  {
    id: "1cb9439a-ea47-4a33-913b-e9bf935bcc0b",
    name: "earbuds",
  },
  {
    id: "ada699e5-e764-4da0-8d3e-18a8c8c5ed24",
    name: "tablet-keyboards",
  },
  {
    id: "d30b85e2-e544-4f48-8434-33fe0b591579",
    name: "phone-gimbals",
  },
  {
    id: "6c3b8591-b01e-4842-bce1-2f5585bf3a28",
    name: "mixer-grinders",
  },
  {
    id: "659a91b9-3ff6-47d5-9830-5e7ac905b961",
    name: "cameras",
  },
  {
    id: "3117a1b0-6369-491e-8b8b-9fdd5ad9912e",
    name: "smart-phones",
  },
  {
    id: "da6413b4-22fd-4fbb-9741-d77580dfdcd5",
    name: "mouses"
  }
];

async function insertDemoData() {
  
  for (const image of demoProductImages) {
    await prisma.image.create({
      data: image,
    });
  }
  console.log("Demo images inserted successfully!");
  
  for (const category of demoCategories) {
    await prisma.category.create({
      data: category,
    });
  }
  console.log("Demo categories inserted successfully!");
  
  for (const product of demoProducts) {
    await prisma.product.create({
      data: product,
    });
  }
  console.log("Demo products inserted successfully!");
}

insertDemoData()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

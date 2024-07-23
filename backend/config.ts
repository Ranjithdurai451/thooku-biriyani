import { Account, Avatars, Client, Databases } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://cloud.appwrite.io/v1') // Your Appwrite Endpoint
  .setProject('66842f3c003d870ba37e'); // Your project ID

const databases = new Databases(client);
const account = new Account(client);

export const appwriteConfig = {
  menuCollectionId: "66852d590015fc9f651c",
  databaseId: "66852d4b00215a3cf713",
  userCollectionId: "6686abab0021f72f20b2",
  orderCollectionId: "6687f9750023207a8caf",
}

export { client, databases, account };


const data = [
  {
    category: 'combo',
    name: 'Chicken Thooku Biriyani Family Combo',
    price: 1599,
    original_price: 1799,
    offer: 200,
    serves: 5,
    items: [
      'Chicken Biriyani With 8 Large Chicken Pieces',
      'Chicken 65 - 7 To 8 Pieces',
      'Pepper Chicken Gravy With Pieces',
      "Idiyappam - 5 No's",
      'Marriage Style Brinjal Gravy',
      'Nuts Sweet Bread Halwa',
      'Onion Raitha',
      'Nannari Sarbath 750ml',
      'Steel Thooku',
    ],
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'A delightful family combo featuring chicken biriyani and sides. Perfect for family gatherings.',
  },
  {
    category: 'combo',
    name: 'Prawn Thooku Biriyani Family Combo',
    price: 1899,
    original_price: 2099,
    offer: 200,
    serves: 5,
    availability: 'Monday to Saturday',
    items: [
      'Prawn Biriyani With 20 - 25 Prawn Pieces',
      'Nethili 65 / Any Other Fish Fry (Depends On Availability)',
      'Prawn Pepper Masala With 12 To 15 Prawn Pieces',
      "Idiyappam - 5 No's",
      'Marriage Style Brinjal Gravy',
      'Nuts Sweet Bread Halwa',
      'Onion Raitha',
      'Nannari Sarbath 750ml',
      'Steel Thooku',
    ],
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'A delightful family combo featuring prawn biriyani and sides. Perfect for family gatherings.',
  },
  {
    category: 'combo',
    name: 'Two Person Chicken Biriyani Combo',
    price: 799,
    serves: 2,
    items: [
      'Chicken Biriyani With 4 Large Chicken Pieces',
      'Chicken 65 - 4 To 5 Pieces',
      'Pepper Chicken Gravy With Pieces',
      "Idiyappam - 3 No's",
      'Marriage Style Brinjal Gravy',
      'Nuts Sweet Bread Halwa',
      'Onion Raitha',
      'Nannari Sarbath 750ml',
    ],
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'A perfect combo for two featuring chicken biriyani and a variety of sides. Ideal for a special meal.',
  },
  {
    category: 'combo',
    name: 'Two Person Prawn Biriyani Combo',
    price: 999,
    serves: 2,
    availability: 'Monday to Saturday',
    items: [
      'Prawn Biriyani With Prawn Pieces',
      'Nethili 65 / Any Other Fish Fry (Depends On Availability)',
      'Prawn Pepper Masala With Prawn Pieces',
      "Idiyappam - 5 No's",
      'Marriage Style Brinjal Gravy',
      'Nuts Sweet Bread Halwa',
      'Onion Raitha',
      'Nannari Sarbath 750ml',
    ],
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'A perfect combo for two featuring prawn biriyani and a variety of sides. Ideal for a special meal.',
  },
  {
    category: 'combo',
    name: 'Mini Chicken Combo',
    price: 299,
    serves: 1,
    items: [
      'Chicken Biriyani With Chicken Piece',
      'Chicken 65',
      'Pepper Chicken Gravy With Piece',
      "Idiyappam - 2 No's",
      'Brinjal Gravy',
      'Bread Halwa',
      'Onion Raitha',
      'Nannari Sarbath 250ml',
    ],
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'A convenient and delicious mini combo featuring chicken biriyani and sides. Perfect for one.',
  },
  {
    category: 'add-on',
    name: 'Chicken 65',
    quantity: '10 Pcs',
    price: 200,
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'Crispy and spicy Chicken 65, perfect as an add-on to your meal.',
  },
  {
    category: 'add-on',
    name: 'Pepper Chicken Gravy With Pieces',
    price: 200,
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'Flavorful pepper chicken gravy, a perfect addition to your meal.',
  },
  {
    category: 'add-on',
    name: 'Marriage Style Brinjal Gravy',
    price: 120,
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'Authentic marriage-style brinjal gravy to enhance your dining experience.',
  },
  {
    category: 'add-on',
    name: 'Nuts Sweet Bread Halwa',
    price: 120,
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'Delicious sweet bread halwa with nuts, perfect as a dessert.',
  },
  {
    category: 'add-on',
    name: 'Idiyappam',
    quantity: '5 Pcs',
    price: 120,
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'Soft and fluffy Idiyappam, a great addition to your meal.',
  },
  {
    category: 'add-on',
    name: 'Nannari Sarbath',
    price: 100,
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'Refreshing Nannari Sarbath, perfect to quench your thirst.',
  },
  {
    category: 'add-on',
    name: 'Onion Raitha',
    price: 50,
    image_url:
      'https://sahibsbiryani.com/cdn/shop/files/mutton-Biryani_jpg.jpg?v=171273207',
    description: 'Cool and tangy onion raitha, a perfect side for biriyani.',
  },
];








// lib/appwrite.js


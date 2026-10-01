// Central content config — edit restaurant details & menu here.

const px = (id: number, size = 600) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${size}&h=${size}&fit=crop`;

export const pxTall = (id: number, w = 900, h = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}&h=${h}&fit=crop`;

export const site = {
  name: "A1 Restaurant",
  tagline: "Charcoal Grill & Kitchen",
  currency: "£",
  phone: "+44 20 7946 0101",
  phoneHref: "tel:+442079460101",
  email: "hello@a1restaurant.com",
  address: ["128 High Street", "City Centre", "Open for dine-in & takeaway"],
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=A1+Restaurant",
  hours: [
    { days: "Mon – Thu", time: "12:00 – 23:00" },
    { days: "Fri – Sat", time: "12:00 – 00:00" },
    { days: "Sunday", time: "13:00 – 22:30" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
  ],
};

export const images = {
  hero: px(18698223, 1100),
  heroSmall: px(29685054, 400),
  aboutTall: pxTall(32738698),
  aboutSmall: px(39641551, 500),
};

export type MenuItem = {
  name: string;
  desc: string;
  price: number;
  img: string;
  tags?: ("Spicy" | "Chef's pick" | "Veg" | "Sharing")[];
};

export const signatures: (MenuItem & { note: string })[] = [
  {
    name: "A1 Mixed Grill",
    note: "The house platter",
    desc: "Seekh, tikka, lamb chops & wings over charcoal, with mint chutney and fresh naan.",
    price: 24.5,
    img: px(39641551, 700),
  },
  {
    name: "Dum Chicken Biryani",
    note: "Slow-sealed, saffron rice",
    desc: "Aged basmati layered with spiced chicken, fried onions and saffron, sealed and slow-steamed.",
    price: 13.9,
    img: px(17696653, 700),
  },
  {
    name: "Butter Chicken",
    note: "Velvet tomato makhani",
    desc: "Tandoor-charred chicken folded into a silky tomato, butter and fenugreek sauce.",
    price: 12.5,
    img: px(29685054, 700),
  },
];

export const menu: { id: string; label: string; items: MenuItem[] }[] = [
  {
    id: "grill",
    label: "From the Grill",
    items: [
      {
        name: "Seekh Kebab",
        desc: "Hand-minced lamb, green chilli, coriander, kissed by open coals.",
        price: 8.5,
        img: px(32986491),
        tags: ["Spicy"],
      },
      {
        name: "Chicken Tikka",
        desc: "Yoghurt & Kashmiri chilli marinade, charred at the edges.",
        price: 9.0,
        img: px(18698226),
        tags: ["Chef's pick"],
      },
      {
        name: "Lamb Chops",
        desc: "Overnight-marinated chops, smoked garlic, roasted spices.",
        price: 14.5,
        img: px(18698225),
      },
      {
        name: "Chapli Kebab",
        desc: "Peshawari-style flat kebab with pomegranate & crushed coriander.",
        price: 9.5,
        img: px(6089827),
      },
      {
        name: "Mixed Grill Platter",
        desc: "A generous selection of everything off the grill, for the table.",
        price: 24.5,
        img: px(29935500),
        tags: ["Sharing"],
      },
    ],
  },
  {
    id: "curries",
    label: "Curries",
    items: [
      {
        name: "Butter Chicken",
        desc: "Tandoori chicken in a silky tomato, butter and fenugreek makhani.",
        price: 12.5,
        img: px(29685054),
        tags: ["Chef's pick"],
      },
      {
        name: "Lamb Karahi",
        desc: "Wok-tossed in tomato, ginger and green chilli. Bold and fragrant.",
        price: 14.0,
        img: px(18698259),
        tags: ["Spicy"],
      },
      {
        name: "Chicken Handi",
        desc: "Slow-cooked in a clay pot with cream, cashew and gentle spice.",
        price: 12.0,
        img: px(32986463),
      },
      {
        name: "Daal Makhani",
        desc: "Black lentils simmered overnight, finished with butter & cream.",
        price: 8.5,
        img: px(29253305),
        tags: ["Veg"],
      },
    ],
  },
  {
    id: "rice",
    label: "Biryani & Rice",
    items: [
      {
        name: "Dum Chicken Biryani",
        desc: "Layered, sealed and slow-steamed. Served with raita.",
        price: 13.9,
        img: px(12737656),
        tags: ["Chef's pick"],
      },
      {
        name: "Lamb Biryani",
        desc: "Tender on-the-bone lamb, saffron basmati, crispy onions.",
        price: 15.5,
        img: px(17696656),
      },
      {
        name: "Saffron Pulao",
        desc: "Aromatic long-grain rice with whole spices and saffron.",
        price: 5.5,
        img: px(17696653),
        tags: ["Veg"],
      },
    ],
  },
  {
    id: "burgers",
    label: "Burgers & Wraps",
    items: [
      {
        name: "A1 Smash Burger",
        desc: "Double halal beef, house sauce, pickles, brioche. With fries.",
        price: 11.5,
        img: px(23106708),
      },
      {
        name: "Tikka Wrap",
        desc: "Chargrilled tikka, crunchy slaw, garlic mayo, warm flatbread.",
        price: 9.5,
        img: px(18698223),
      },
      {
        name: "Loaded Grill Box",
        desc: "Wings, tenders and a burger with cheese fries. Built to share.",
        price: 17.9,
        img: px(19709548),
        tags: ["Sharing"],
      },
    ],
  },
  {
    id: "sweets",
    label: "Sweets & Sips",
    items: [
      {
        name: "Royal Mithai",
        desc: "A selection of traditional sweets — gulab jamun, barfi and more.",
        price: 5.5,
        img: px(9951856),
        tags: ["Veg"],
      },
      {
        name: "Chef's Dessert",
        desc: "Seasonal plated dessert. Ask your server for today's creation.",
        price: 6.5,
        img: px(15643149),
      },
      {
        name: "Mango Lassi",
        desc: "Alphonso mango, thick yoghurt, a pinch of cardamom.",
        price: 4.0,
        img: px(6416553),
      },
      {
        name: "Rose Sherbet",
        desc: "Chilled rose syrup, basil seeds, citrus and mint.",
        price: 3.5,
        img: px(15823268),
      },
    ],
  },
];

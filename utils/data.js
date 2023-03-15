export const products = [
  {
    id: 1,
    slug: "egg-chair-1",
    name: "egg chair",
    price: 85,
    image: "egg-chair.png",
    brand: "cosmo",
    discount: 10,
    size: {
      height: 76,
      width: 57,
      diameter: 61,
    },
    productOptions: [
      {
        id: "1a",
        color: "grey",
        image: "egg-chair-1.png",
        product: 1,
        stock: 2,
      },
      {
        id: "1b",
        color: "black",
        image: "egg-chair-2.png",
        product: 1,
        stock: 3,
      },
      {
        id: "1c",
        color: "lightyellow",
        image: "egg-chair-3.png",
        product: 1,
        stock: 4,
      },
    ],
    stock: 9,
  },
  {
    id: 2,
    slug: "chair-back-1",
    name: "chair back",
    price: 125,
    image: "chair-back.png",
    brand: "cosmo",
    discount: 0,
    size: {
      height: 76,
      width: 57,
      diameter: 61,
    },
    productOptions: [
      {
        id: "2a",
        color: "black",
        image: "chair-back.png",
        product: 2,
        stock: 2,
      },
      {
        id: "2b",
        color: "red",
        image: "chair-back-2.png",
        product: 2,
        stock: 2,
      },
      {
        id: "2c",
        color: "indigo",
        image: "chair-back-3.png",
        product: 2,
        stock: 3,
      },
    ],
    stock: 7,
  },
  {
    id: 3,
    slug: "wide-chair",
    name: "wide chair",
    price: 150,
    image: "wide-chair.png",
    brand: "cosmo",
    discount: 0,
    size: {
      height: 76,
      width: 57,
      diameter: 61,
    },
    productOptions: [
      {
        id: "3a",
        color: "black",
        image: "wide-chair.png",
        product: 3,
        stock: 1,
      },
      {
        id: "3a",
        color: "blue",
        image: "wide-chair-2.png",
        product: 3,
        stock: 3,
      },
      {
        id: "3b",
        color: "white",
        image: "wide-chair-4.png",
        product: 2,
        stock: 2,
      },
      {
        id: "3c",
        color: "grey",
        image: "wide-chair-3.png",
        product: 2,
        stock: 2,
      },
    ],
    stock: 8,
  },
  {
    id: 3,
    slug: "wide-chair",
    name: "wide chair",
    price: 150,
    image: "wide-chair.png",
    brand: "cosmo",
    discount: 0,
    size: {
      height: 76,
      width: 57,
      diameter: 61,
    },
    productOptions: [
      {
        id: "3a",
        color: "black",
        image: "wide-chair.png",
        product: 3,
        stock: 1,
      },
      {
        id: "3a",
        color: "blue",
        image: "wide-chair-2.png",
        product: 3,
        stock: 3,
      },
      {
        id: "3b",
        color: "white",
        image: "wide-chair-4.png",
        product: 2,
        stock: 2,
      },
      {
        id: "3c",
        color: "grey",
        image: "wide-chair-3.png",
        product: 2,
        stock: 2,
      },
    ],
    stock: 8,
  },
];

export const categories = [
  "sofas",
  "beds",
  "lamps",
  "armchairs",
  "chairs",
  "mirrors",
  "textile",
  "decorations",
];

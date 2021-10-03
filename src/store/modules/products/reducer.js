const initialState = [
  {
    id: 1,
    name: "Gin Gordon's Sicilian Lemon",
    price: 68.9,
    image: "https://m.media-amazon.com/images/I/712FXO9qaPS._AC_SL1500_.jpg",
  },
  {
    id: 2,
    name: "Gin Gordon's Pink",
    price: 70.9,
    image: "https://m.media-amazon.com/images/I/71yTuX2M+hL._AC_SL1500_.jpg",
  },
  {
    id: 3,
    name: "Gin Tanqueray",
    price: 113.92,
    image: "https://m.media-amazon.com/images/I/41H3C8VDziL._AC_.jpg",
  },
  {
    id: 4,
    name: "Gin Tanqueray Sevilla",
    price: 119.9,
    image: "https://m.media-amazon.com/images/I/61sH6+eCmFL._AC_SL1080_.jpg",
  },
  {
    id: 5,
    name: "Kit Gin Tônica Preto 8 Especiarias",
    price: 135.9,
    image: "https://m.media-amazon.com/images/I/81C7-GXY-VS._AC_SL1500_.jpg",
  },
];

const productsReducer = (state = initialState, action) => {
  return state;
};

export default productsReducer;

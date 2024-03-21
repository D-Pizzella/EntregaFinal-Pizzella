const products = [
  {
    id: 1,
    title: 'Remera',
    price: '4000',
    category: 'vestimenta',
    description: 'talles: XL, L, M, S, XS',
    image:
      'https://lafabricaderemeras.com.ar/wp-content/uploads/2023/02/2-REMERAS-DEPORTIVAS-150x150.jpg',
  },
  {
    id: 2,
    title: 'Sillón Indiviual',
    price: '20000',
    category: 'mueblería',
    description: 'Colores: Negro, Gris, Bordeaux',
    image:
      'https://img.freepik.com/foto-gratis/wing-back-chair-alfombra-no-people_53876-14506.jpg?t=st=1710979836~exp=1710983436~hmac=23d008e942e0f580dfd93b46f42297d34403b240f5fed5564f3da07e5089ae2e&w=150&h=150',
  },
  {
    id: 3,
    title: 'Short',
    price: '2500',
    category: 'vestimenta',
    description: 'Talle S, M , L',
    image:
      'https://img.freepik.com/fotos-premium/pantalones-cortos-moda-ilustracion-cuadrada-dibujos-animados-inferior_107173-41327.jpg?w=150&h=150',
  },
  {
    id: 4,
    title: 'Teléfono',
    price: '300000',
    category: 'electrónica',
    description: 'Colores: Negro, Gris',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/%D0%A0%D0%B0%D0%B4%D0%B8%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD.jpg/150px-%D0%A0%D0%B0%D0%B4%D0%B8%D0%BE%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD.jpg',
  },
  {
    id: 5,
    title: 'Botines',
    price: '15000',
    category: 'deportes',
    description: 'Talle del 37 al 44',
    image:
      'https://assets.adidas.com/images/h_150,f_auto,q_auto,fl_lossy,c_fill,g_auto/7778804f0ed74ecb908d0675734b1dc0_9366/Botines_X_CRAZYFAST_FG_Blanco_GY7377_HM1.jpg',
  },
];

export const getProducts = new Promise((resolve) => {
  setTimeout(() => {
    resolve(products);
    console.log('Enviando datos!!!');
  }, 800);
});

export const getProduct = (id) => {
  return products.find((prod) => prod.id == id);
};

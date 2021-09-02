import IProduct from '../interfaces/IProduct';

const productItemDTO = (productItem: IProduct) => {
  return {
    id: productItem.id,
    name: productItem.name,
    price: productItem.price,
    image: productItem.image,
    stock: productItem.stock,
  };
};

export default productItemDTO;

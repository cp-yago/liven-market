import IProduct from '../interfaces/IProduct';

const productItemDTO = (productItem: IProduct) => {
  return {
    id: productItem.id,
    name: productItem.name,
    price: productItem.price,
    imageUrl: productItem.imageUrl,
    stock: productItem.stock,
  };
};

export default productItemDTO;

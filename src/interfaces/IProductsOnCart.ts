import IProduct from './IProduct';

export default interface ProductOnCart extends IProduct {
  quantity: number;
}

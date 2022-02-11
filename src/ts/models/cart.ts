import { Product } from "./productcatalog";

export class Cart {
  product: Product;
  qty: number;

  constructor(product: Product, qty: number) {
    this.product = product;
    this.qty = qty;
  }
}
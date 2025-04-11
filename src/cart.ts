import { z } from 'zod';

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

let cartState: {
  products: Product[];
} = {
  products: []
}

export const resetCart = (): void => {
  cartState = { products: [] };
}

export const getProducts = (): Product[] => {
  return [...cartState.products];
}

export const addProduct = (product: Product): void => {
  cartState.products.push({ ...product })
}
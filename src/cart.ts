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
  const existingproductIndex = cartState.products.findIndex(p => p.id === product.id);

  if (existingproductIndex !== -1){
    cartState.products[existingproductIndex].quantity += product.quantity
  } else{
    cartState.products.push({ ...product })
  }
}
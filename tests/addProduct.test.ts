import { beforeEach, describe, expect, it } from "vitest";
import * as cart from '../src/cart';

let testCart: { products: cart.Product[]};

describe("cart module", () => {
  beforeEach(() => {
    testCart = {products: [] };

    cart.resetCart();
  })
  it("should add a product to the cart", () => {
    const product: cart.Product = {
      id: 'd44zd57zza',
      name: 'Chaussure Nike',
      price: 190,
      quantity: 2,
    }

    cart.addProduct(product);

    const products = cart.getProducts();
    expect(products).toHaveLength(1);
    expect(products[0]).toEqual(product);
  });

  
});
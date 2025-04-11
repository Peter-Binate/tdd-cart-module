import { beforeEach, describe, expect, it } from "vitest";
import * as cart from '../src/cart';

let testCart: { products: cart.Product[]};

describe("cart module", () => {
  beforeEach(() => {
    testCart = {products: [] };
  })

  it("should calculate the total number of products", () => {
    cart.addProduct({
      id: 'prod1',
      name: 'Chaussure Fila',
      price: 75,
      quantity: 1,
    })
    
    cart.addProduct({
      id: 'prod2',
      name: 'Chaussure Rebook',
      price: 55,
      quantity: 4,
    })

    const count = cart.getProductCount();
    expect(count).toBe(5);
  });
});
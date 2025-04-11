import { beforeEach, describe, expect, it } from "vitest";
import * as cart from '../src/cart';

let testCart: { products: cart.Product[]};

describe("cart module", () => {
  beforeEach(() => {
    testCart = {products: [] };
  })

  it("should remove a product from the cart", () => {
    const product: cart.Product = {
      id: 'd44zd57zza',
      name: 'Chaussure Nike',
      price: 190,
      quantity: 2,
    }

    cart.addProduct(product);

    let products = cart.getProducts();
    expect(products).toHaveLength(1);

    cart.removeProduct('d44zd57zza');
    products = cart.getProducts();
    expect(products).toHaveLength(0);
  });

  it('should do nothing when removing a non-existent product', () => {
    const product: cart.Product = {
      id: 'prod1',
      name: 'Test Product',
      price: 10.99,
      quantity: 1
    };
    cart.addProduct(product);
    
    cart.removeProduct('nonexistent');
    
    const products = cart.getProducts();
    expect(products).toHaveLength(1);
    expect(products[0].id).toBe('prod1');
  });
  
});
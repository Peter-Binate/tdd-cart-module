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

  it("should increase quantity when we adding an existing product", () => {
      const Existingproduct: cart.Product = {
        id: 'd44zd57zza',
        name: 'Chaussure Nike',
        price: 190,
        quantity: 2,
      }

      cart.addProduct(Existingproduct);
      cart.addProduct({ ...Existingproduct, quantity: 1 });

      const products = cart.getProducts();
      expect(products).toHaveLength(1);
      expect(products[0].id).toBe('d44zd57zza');
      expect(products[0].quantity).toBe(3);
  })

  
});
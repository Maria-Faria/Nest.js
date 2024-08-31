import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductRepository {
  private products = [];

  async list() {
    return this.products;
  }

  async save(product) {
    this.products.push(product);
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Controller('/products')
export class ProductController {
  constructor(private productRepository: ProductRepository) {}

  @Get()
  async listProducts() {
    return this.productRepository.list();
  }

  @Post()
  async createProduct(@Body() product) {
    this.productRepository.save(product);
    return product;
  }
}

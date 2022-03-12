import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '324250924',
      name: 'ASODJI',
      qty: 100,
      description: 'ASojdjasjojsad',
    },
    {
      id: '324250912321324',
      name: 'ASODJI',
      qty: 100,
      description: 'ASojdjasjojsad',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  find(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}

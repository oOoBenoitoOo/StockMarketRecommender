import { Injectable } from '@angular/core';
import { SocialNetwork } from '../../models/social-network.model';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }

  stockPriceGenerator(symbol: string, dates: Date[]): {date: Date, price: number}[]{
    const priceArray = [];
    dates.forEach(item => priceArray.push({date: item, price:  (Math.random() * (1000 - 1) + 1).toFixed(2)}));
    console.log(`fake values generated for this symbole ${symbol}`, priceArray);
    return priceArray;
  }

  socialMediaCountGenerator(symbol: string, social: SocialNetwork): number{
    const count = Math.floor(Math.random() * (1000 - 1) + 1);
    console.log(`fake values generated for this symbole ${symbol} and this social network ${social.name}`, count);
    return count;
  }

}

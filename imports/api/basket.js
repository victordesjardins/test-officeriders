import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Basket = new Mongo.Collection('basket');

Meteor.methods({
  'basket.insert'(productDescription, quantity) {
    check(productDescription, String);

    Basket.insert({
      productDescription,
      quantity,
      createdAt: new Date(),
    });
  },
  'basket.remove'(basketItemId) {
    check(basketItemId, String);

    Basket.remove(basketItemId);
  },
  'basket.updateQuantity'(basketItemId, quantity) {
    check(basketItemId, String);

    Basket.update(basketItemId, { $set: { quantity: quantity } });
  },
});

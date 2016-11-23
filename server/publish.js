import { Meteor } from 'meteor/meteor';

import { Recipes } from '../collections/recipes.js';

Meteor.publish('recipes', function() {
  return Recipes.find({author: this.userId});
});

Animal = function (doc) {
  _.extend(this, doc);
};

_.extend(Animal.prototype, {
  makeNoise: function () {
    console.log(this.sound);
  },
});

export const Test = new Mongo.Collection('test')
export const TestTransformed = new Mongo.Collection('test2', {
  transform: function (doc) { return new Animal(doc); }
});

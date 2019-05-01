import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
  title: DS.attr(),
  owner: DS.attr(),
  city: DS.attr(),
  category: DS.attr(),
  image: DS.attr(),
  bedrooms: DS.attr(),
  description: DS.attr(),
  index: DS.attr(),
  first: DS.attr(),
  last: DS.attr(),
  previous: DS.attr(),
  next: DS.attr()
});

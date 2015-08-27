import DS from 'ember-data';

export default DS.Model.extend({
  clients_order_items: DS.hasMany('item'),
  ship_name: DS.attr('string'),
  address1: DS.attr('string'),
  address2: DS.attr('string'),
  order_number: DS.attr('string'),
  city: DS.attr('string'),
  state: DS.attr('string'),
  country: DS.attr('string'),
  postal_code: DS.attr('string'),
  clients_store_id: DS.attr('number')
});

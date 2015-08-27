import DS from 'ember-data';

export default DS.Model.extend({
  // clients_order_id: DS.belongsTo('order'),
  quantity: DS.attr('string'),
  clients_sku: DS.belongsTo('sku')
});

import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  // keyForAttribute: function(attr, method) {
  //   return Ember.String.
  // },
  attrs:{
    clients_order_items:{ embedded: 'always' }
  }
});

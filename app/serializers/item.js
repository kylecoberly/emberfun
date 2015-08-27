import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
  attrs:{
    clients_sku:{ embedded: 'always' }
  }
});

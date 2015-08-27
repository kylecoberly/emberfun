import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
  edit: function(order) {
    var $items, skus, storeId;
    this.order = order;
    skus = [];
    $items = $('#items');

    $('#order_number').val(order.get('order_number'));
    $('#ship_name').val(order.get('ship_name'));
    $('#address1').val(order.get('address1'));
    $('#address2').val(order.get('address2'));
    $('#city').val(order.get('city'));
    $('#state').val(order.get('state'));
    $('#postal_code').val(order.get('postal_code'));
    // _.each(order.get('clients_order_items'), (function(e, i, l) {
    //   var str;
    //   str = '<div class="fields">';
    //   str += '<div class="field"><label>quantity</label>';
    //   str += '<input type="text" id="quantity" value="' + e.quantity + '"></div>';
    //   str += '<div class="field"><label>Sku</label>';
    //   str += '<input type="text" id="sku" class="sku" value="' + e.clients_sku.sku + '"></div>';
    //   str += '<div class="field"><label>Description</label>';
    //   str += '<input type="text" id="desc" value="' + e.clients_sku.description + '"></div>';
    //   str += '</div>';
    //   return $items.append(str);
    // }));
    storeId = order.get('clients_store_id');
    // $.getJSON("http://localhost:3000/api/skus/" + storeId, function(data) {
    //   return _.each(data.orders, function(e, i, l) {
    //     return skus.push(e.sku);
    //   });
    // });
    // $('.sku').autocomplete({
    //   source: skus
    // });
    return $('#orderinfo').show();
  },
  closeModal: function() {
    $('#orderinfo').hide();
    return $('#items').html('');
  },
  submitOrder: function(id) {
    var fields, items;
    items = {};
    this.order.set('order_number', $('#order_number').val());
    this.order.set('ship_name', $('#ship_name').val());
    this.order.set('address1', $('#address1').val());
    this.order.set('address2', $('#address2').val());
    this.order.set('city', $('#city').val());
    this.order.set('state', $('#state').val());
    this.order.set('postal_code', $('#postal_code').val());
    fields = $('#items').find('.fields');
    items = $('#items .fields').find('input');
    return _.each(fields, (function(fe, i, l) {
      return _.each($(fe).find('input'), function(ie, i, l) {});
    }));
  }
}
});

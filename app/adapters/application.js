// import ApplicationAdapter from './application';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'http://localhost:3000',
  namespace: 'api'
  // adapter: DS.RESTAdapter.create({
  //       namespace: "data",
  //       url: "",
  //       ajax: function (url, type, hash) {
  //           hash.url = url;
  //           hash.type = type;
  //           hash.dataType = 'jsonp';
  //           hash.contentType = 'application/json; charset=utf-8';
  //           hash.context = this;
  //
  //           if (hash.data && type !== 'GET') {
  //               hash.data = JSON.stringify(hash.data);
  //           }
  //
  //           jQuery.ajax(hash);
  //       }
  //   })
});

import DS from 'ember-data';

user = DS.Model.extend({
  // id: DS.attr(''),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  permissions: DS.hasMany('permission'),
});

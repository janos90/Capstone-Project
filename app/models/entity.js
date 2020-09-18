import DS from 'ember-data';

entity = DS.Model.extend({
  // id: DS.attr(''),
  name: DS.attr('string'),
  provides: DS.attr('string'),
  suppliers: DS.hasMany('entity'),
  forms: DS.hasMany('form'),
});

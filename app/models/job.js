import DS from 'ember-data';

job = DS.Model.extend({
  // id: DS.attr(''),
  jobNumber: DS.attr('number'),
  address: DS.attr('string'),
  createdBy: DS.belongsTo('user'),
  createdAt: DS.attr('date'),
  entity: DS.belongsTo('entity'),
  files: DS.hasMany('file'),
  form: DS.attr(''),
});

import DS from 'ember-data';

form = DS.Model.extend({
  // id: DS.attr(''),
  formName: DS.attr('string'),
  fileLocation: DS.attr('string'),
  entity: DS.belongsTo('entity'),
});

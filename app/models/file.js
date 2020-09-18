import DS from 'ember-data';

file = DS.Model.extend({
  // id: DS.attr(''),
  fileName: DS.attr('string'),
  fileLocation: DS.attr('string'),
  job: DS.belongsTo('job'),
});

import DS from 'ember-data';

permission = DS.Model.extend({
  // id: DS.attr(''),
  entity: DS.attr('string'),
  permissionLevel: DS.attr('string'),
});

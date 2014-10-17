Baker.Recipe = DS.Model.extend({
  name: DS.attr('string'),
  author: DS.belongsTo('user')
});
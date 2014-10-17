Baker.User = DS.Model.extend({
  name: DS.attr('string'),
  recipes: DS.hasMany('recipe')
});
Baker.UserModel = DS.Model.extend({
  name: DS.attr('string'),
  recipes: hasMany('recipe')
});
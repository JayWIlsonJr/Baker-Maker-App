Baker.Router.map(function() {
  this.resource('user', function() {
    this.route('recipes'); // http://BatchMaker.com/jaywilsonjr/recipes
    this.route('favorites'); // http://BatchMaker.com/jaywilsonjr/favorites
    this.route('pantry') // http://BatchMaker.com/jaywilsonjr/pantry
    this.route('settings') // http://BatchMaker.com/jaywilsonjr/settings
  });
  
  this.resource('recipes', function() {
    this.route('public'); // http://BatchMaker.com/recipes/public
    this.route('popular'); // http://BatchMaker.com/recipes/popular
    this.route('create'); // http://BatchMaker.com/recipes/create
    this.route('edit', { path: ':recipe_id/edit' }); // http://BatchMaker.com/recipes/8979487198743/edit
    this.route('show', { path: ':recipe_id'}) // http://BatchMaker.com/recipes/671527653
  });

  this.route('login'); // http://BatchMaker.com/login
  this.route('logout'); // http://BatchMaker.com/logout
  this.route('signup') // http://BatchMaker.com/signup
});

Baker.ApplicationRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('user', 'user_id_jay');
  }
});


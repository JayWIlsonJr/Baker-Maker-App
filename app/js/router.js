Baker.Router.map(function() {
  this.resource('recipes' function() {
    this.route('public');
    this.route('popular');
    this.route('favorite')
  });
});
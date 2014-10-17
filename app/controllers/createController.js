Baker.RecipesCreateController = Ember.Controller.extend({
  needs: ['application'],

  recipeName: '',
  authorName: '',

  actions: {
    createRecipe: function() {
      var user = this.get('controllers.application.currentUser')
      console.log(user)
      var recipe = this.store.createRecord('recipe', {
        name: this.get('recipeName'),
        author: user
      });
      recipe.save();
      this.setProperties({recipeName: '', authorName: ''});
    }
  }
});
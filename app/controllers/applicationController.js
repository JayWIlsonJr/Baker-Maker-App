Baker.ApplicationController = Ember.ObjectController.extend({
  currentUser: Ember.computed.alias('model')
});
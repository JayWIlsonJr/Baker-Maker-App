window.Baker = Ember.Application.create();

Baker.ApplicationAdapter = DS.FirebaseAdapter.extend({
  firebase: new Firebase('https://baker-maker.firebaseio.com/')
});
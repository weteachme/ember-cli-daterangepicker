import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return {
      start: '12/12/2015',
      end: '12/12/2018'
    };
  }

});

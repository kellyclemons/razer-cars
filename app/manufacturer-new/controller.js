import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    saveBrand() {
      const brand = this.store.createRecord('brand', this.formValues);

      brand.save().then(() => {
        this.set('formValues', {});

        this.transitionToRoute('manufacturers');
      });
    }
  }
});

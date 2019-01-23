import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  formValues: {},
  writtenText: 'This is an example',
  updatedText: 'This is an example',

  preview: computed('writtenText', 'updatedText', function() {
    if (this.get('formValues.liveChange')) {
      return this.get('writtenText');
    } else {
      return this.get('updatedText');
    } 
  }),

  actions: {
    updatePreview(event) {
      event.preventDefault();
      this.set('updatedText', this.get('writtenText'));
    }
  }
});

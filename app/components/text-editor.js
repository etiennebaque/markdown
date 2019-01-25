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

  buttonState: computed('formValues.liveChange', function() {
    var cls = 'text-md px-4 py-2 rounded-lg text-white mt-4 lg:mt-0 '
    if (this.get('formValues.liveChange')) {
      cls = cls + 'bg-grey-darkest opacity-50 cursor-not-allowed'
    } else{
      cls = cls + 'bg-blue hover:bg-blue-darker';
    }
    return cls;
  }),

  actions: {
    updatePreview(event) {
      event.preventDefault();
      this.set('updatedText', this.get('writtenText'));
    }
  }
});

import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  formValues: {},
  writtenText: 'This is an example',

  preview: computed('writtenText', function() {
    return this.get('writtenText');
  }),
});

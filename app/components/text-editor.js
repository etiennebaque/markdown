import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  liveChange: false,
  writtenText: 'This is an example',
  updatedText: '',

  preview: computed('writtenText', 'updatedText', 'liveChange', function() {
    if (this.get('liveChange')) {
      this.send('updatePreview');
    } 
    return this.get('updatedText');
  }),

  buttonState: computed('liveChange', function() {
    var cls = 'text-md px-4 py-2 rounded-lg text-white mt-4 lg:mt-0 '
    if (this.get('liveChange')) {
      cls = cls + 'bg-grey-darkest opacity-50 cursor-not-allowed'
    } else{
      cls = cls + 'bg-blue hover:bg-blue-darker';
    }
    return cls;
  }),

  actions: {
    updatePreview(event) {
      this.set('updatedText', this.get('writtenText'));
    }
  }
});

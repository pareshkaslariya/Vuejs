import Vue from 'vue'

Vue.component('checkbox', {
    template: '#checkbox',
    data() {
      return {
        checked: false,
        title: 'Check me'
      }
    },
    methods: {
      check() {
        this.checked = !this.checked;
      }
    }
  });
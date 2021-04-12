new Vue ({
    el:'#app',
    data: {
        title: "Hello World!",
        styleCSS: ""
    },
    methods: {
        changeText() {
            this.title = 'Иной текст';
        }
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
});
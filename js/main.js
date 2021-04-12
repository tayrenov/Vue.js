let L1 = new Vue ({
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

let L2 = new Vue({
    el: '#app-2',
    data: {
        todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ]
      }
});

let L3 = new Vue({
    el: '#app-3',
    data: {
        value:1
    },

    methods: {
        increment(value) {
            this.value = value;
            if (value == 25) alert("Число 25");
        }
    },

    computed: {
        doubleValue() {
            return this.value * 2
        }
    }

});

let L4 = new Vue({
    el: '#app-4',
    data: {
        show:false
    }
});

let L5_6 = new Vue({
    el: '#app-5',
    data: {
        hello:'HELLO',
        cars: [
            {model:"BMW", speed: 250.8},
            {model:"Audi", speed: 240.21},
            {model:"Mercedes-Benz AMG", speed: 350.4},
            {model:"Ford", speed: 160.5}
        ]
    },
    filters: {
        lovercase (value) {
            return value.toLowerCase()
        }
    }
});
Vue.component('todo-item', {
	props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#example-3',
  
  data: {
	  msg: 'HELLO 2',
	  groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
  },
  methods: {
	  
	  
  }
})
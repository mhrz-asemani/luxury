/*
Directives:
  v-once : any reactive state inside the element using v-once, only executes once.(it locks the content).
      it means any changes on the reactive state does not affect on the element.
  v-model : is a shorthand for "v-bind:value v-on:input". used for input elements. it's called "two-way binding"(
      a combination of data-binding + event-handling).
      at the same time we're listening to input event, and writing the value back into value attr of the element.
      <input v-on:input="fn" v-bind:value="enteredVal">   === <input v-model="enteredVal">
      fn(e) {      // reads entered value, writes in reactive state
        this.enteredVal = e.target.value;
      }
*/
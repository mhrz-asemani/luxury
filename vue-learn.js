/*
compile sass to css via command line:
  sass --watch src/sass/main.scss:src/css/main.css
 */

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

/*
Properties:
  watcher : like computed, it fires whenever the specified reactive state changes.
      watcher method name must be the same as the tracking reactive state.
      watcher is an alternative for computed. BUT, in a computed property you can watch for 1 or more states,
      while a watcher method could only watch 1 state. so for watching multiple states, you have to write multiple
      methods.
*/
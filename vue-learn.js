/*
compile sass to css via command line:
  sass --watch src/sass/main.scss:src/css/main.css

ES6 proxy object : an object that wraps another object(target) or function and monitors access to target.
  Vue uses proxy object to detect changes to the data. this is how vue detects changes and update the DOM.
  with proxies, we can limit access to the target object. we can also add custom logic to the access.
  Here's an example of what a proxy object do :  new Proxy(target, handler).
      const data = {};
      let pr = new Proxy(data, {
          set: (target, key, value) => {
              if (key === 'm' || key === 's') {
                  Reflect.set(target, key, value);
                  return true;
              }
              else
                  return false;
          },
          get: (target, key) => {
              if (key === 's') {
                  console.log(target[key]);
                  return target[key];
              } else {
                  console.log('key is undefined or not allowed');
                  return false;
              }
          }
      });
      explain: we can only set 'm' and 's' keys for the data object. and we can only get 's' key.
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
  Binding Multiple Classes Dynamically :
      way 1) :class="{class1: condition1, class2: condition2, ...}"
      way 2) :class="[class1, class2, ...]". each index could be a string or an object or even a function.
  v-for : Vue will automatically detect changes in the array/object and update the DOM. It just renders the
      new item that we add not the entire list.
      Vue re-uses DOM elements to optimize performance. this can lead to bugs if elements contain state.
      bind the Key attr to a unique value to help Vue identify elements that belong to list content.
      for more info, refer to "03 Rendering Conditional Content & Lists[UdemyIran.Com]" video.
*/

/*
Properties:
  watcher : like computed, it fires whenever the specified reactive state changes.
      watcher method name must be the same as the tracking reactive state.
      watcher is an alternative for computed. BUT, in a computed property you can watch for 1 or more states,
      while a watcher method could only watch 1 state. so for watching multiple states, you have to write multiple
      methods.
*/
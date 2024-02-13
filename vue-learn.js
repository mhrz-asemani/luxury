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
         2) use $emit property in child component. this way, you can mutate the prop in parent component.
  $emit: this.$emit( "email-change", argument(s) ). arguments will separate with comma => $emit( "email-change", arg1, arg2, arg3, ... ). or pass an array or obj.
      used to communicate component back to parent. for example when we want to inform parent that a data inside
      parent changed. custom event name should be in kebab case.
      Also emit is used to mutate data in parent.
*/

/*
Properties:
  watcher :
      like computed, it fires whenever the specified reactive state changes.
      watcher method name must be the same as the tracking reactive state.
      watcher is an alternative for computed. BUT, in a computed property you can watch for 1 or more states,
      while a watcher method could only watch 1 state. so for watching multiple states, you have to write multiple methods.
  props :
      is a way to pass data from parent to child component. props are read-only.
      props writing syntax should be kebab-case when passing. but in the child component, we should use camelCase.
      props mutation in child is not allowed.
      it is a uni-directional flow. if you want to pass data from child to parent, you should use events.
      if you want to mutate a prop, there are 2 ways:
         1) use a copy of the prop in child component.
  emits:
      is like props. can be an array or an object for validating it.
      for more info refer to "Component Communication 7-8". remember, this property is optional. it is for better knowing
      the component at a glance. so you may list all emits inside the property.
  provide & inject:
      "provide and inject". A potential problem is that when we use nested components, if we want to pass data from parent
      to the inner component, we have to pass it to the first comp at first, then to the second and ... then to specific comp.
      "It is not actually a problem". but we're going to reduce coding. So Vue has a solution for that.
      "Provide data, then listen to it anywhere you want". In inner comp we use the option below to listen to provided data:
      inject: [''] ... just like props.
      we can use it only from ancestor comp to child.
  inject:
      Injections are resolved before the component's own state, so you can access injected properties in data():
      inject is accessible via this key word.
      inject: ['message'],
      data() {
        return {
          fullMessage: this.message
        }
      }
      Remember: we can provide data type function. for example:
      provide() {
        return {
          anyName: this.sliderUpdate    // sliderUpdate here is a method for example.
        }
      }
      We can pass functions through Props or Events. But it's an alt for them.
      Final note: Props & Events should be default for components communication. In case we have multiple
      pass through components for a data, it would be better using Provide & Inject.
  components:
      is an object that contains all the components that we want to use in the parent component.
      there are 2 ways to use a component in another component:
         1) globally: we can use the component in any other component.          // in main.js
         2) locally: we can use the component only in the parent component.     // in the parent component.
*/
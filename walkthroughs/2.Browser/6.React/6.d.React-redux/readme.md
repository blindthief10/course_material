### Redux

This folder is a dedicated walkthrough on how to manage state with redux and how to connect it with react through the react-redux module. Some of the key objectives is that the participants understand the problem that redux solves, how to handle, change and have access a central state, what a redux store and a reducer's job is, and how to build components with access to a central state without worrying for react's component architecture or hierarchy. For full objectives of this topic please refer to the link below.

Beware of the code next to each file's name. This code corresponds to an exercise lecture in goconqr
platform, inside the following link module below.

### Working with React and Redux for managing state

Walkthrough to redux library and how to connect it with a react app [Find the walkthrough here](https://www.goconqr.com/c/74469/course_modules/113627-course-s-objectives?)

#### Trainer's path to this module:

1. The trainer explains the purpose of redux. What problem solves and why it is easier to have a centralized state
2. The trainer explains how redux works in general, and then decomposes it into parts. Clarification needs to be made, that still we haven't connected redux with react, this is the redux lifecycle schema.
3. The trainer explains every single part and it's purpose: The store, the reducer, the action functions and the dispatch, also how to subscribe and getState any time we want.
  * >[It is always better with an abstracted real world example](https://www.goconqr.com/c/74469/course_modules/113800-redux-abstracted?)
  * >[Or speaking strictly technically](https://www.goconqr.com/c/74469/course_modules/113803-redux-schema?=)
4. The trainer implements live the example of having a deposit and withdraw actions from a balance variable in state.
5. The trainer starts by explaining that this will be executed first from node.js. So after installing redux and requiring it, it creates the store live.
6. The trainer implements the withdraw and deposit actions live, by explaining the type property and how it is connected to the reducer function.
7. The trainer explains the purpose of the reducer function and actually implements one that handles the deposit and withdraw actions live.
8. The trainer explains why shouldn't directly mutate the state and what techniques can we have to create a copy of state. ex **Spread operator**, **Object.assing** etc.
9. The trainer shows how to dispatch actions manually, and then how to get the current state after every dispatch with the .getState function.
10. The trainer shows can we can create 'hooks' after a dispatch by using the subscribe method of the store.
11. The trainer introduces the concept of redux and connecting it with react application. So every component instead having a local state (which is also possible in parallel) has access to modify, change or retrieve info from the global state.
12. The trainer implements the same example by creating two buttons and a heading, with three different components that have no local state.
  * >[Full example walkthrough starts here](https://www.goconqr.com/c/74469/course_modules/113694-connect-with-react?=)
  * > The trainer following this walkthrough, explains what is the difference between `redux` and `react-redux`, and what is the purpose of the `Provider` component, it's `store` prop, the `connect` function and how to map state to props and map dispatch to props accordingly. 





* Live coding example's code can be found into the **live_example** folder
* Code for the live react-redux example can be found also in the folder

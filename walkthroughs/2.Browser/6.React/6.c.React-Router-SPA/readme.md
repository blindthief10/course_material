### React-Router-SPA

This folder is a dedicated walkthrough on how to create Single Page Applications with react and how to implement client-side routing by using the react-router-dom module. Key objectives of this course among others are: the participants learn the difference between Single Page Applications and Multi Page Applications architecture. How to use the react-router-dom components to perform multiple routes on the client and reduce the load from the server. For full objectives of this topic please refer to the link below.

Beware of the code next to each file's name. This code corresponds to an exercise lecture in goconqr
platform, inside the following link module below.

### Creating Single Page Apps with React

Walkthrough to react-router-dom library and it's core functionality [Find the walkthrough here](https://www.goconqr.com/c/74394/course_modules/113491-course-s-objectives?)

#### Trainer's path to this module:

1. The trainer explains the difference between an SPA vs MPA architecture. What are the pros and cons and why should we care? How does react-router-dom help to implement SPA architecture for our app?
2. Installation, introduction and import of BrowserRouter, NavLink and Route components. What are they good for? What is the purpose of each one? Under which attributes are they connected?
3. The trainer explains how the BrowserRouter wraps all routing functionality.
4. The trainer shows how the NavLink component acts like a normal link, except for client-side routing. What is the purpose of the `to` attribute?
5. The trainer introduces the actual routes that have to lie inside the BrowserRouter component. What is the `path` attribute. How many ways do we have, in order to define what will be shown (`render` and `component`). What an `exact` keyword is? What is a partial match?
6. The trainer shows how we can redirect the user to a given route by using the `Redirect` component.
7. The trainer gives a problem, on how to redirect to a route, after 5 seconds from when the component has mounted to the DOM? Talk in class? How can we apply functionality, exactly after the component mount?
[Find the full questions here](https://www.goconqr.com/c/74455/course_modules/113598-redirecting-after-5-seconds-problem-?=)
8. The problem is solved by the trainer by introducing the lifecycle methods and the `componentDidMount` in particular, by applying a timeout as [shown here](https://www.goconqr.com/c/74455/course_modules/113601-redirect-after-5-seconds-solution?).
9. The trainer asks from participant to reset the state after it has unmounted from DOM to it's previous state. They should find the `componentWillUnmount` useful for that purpose.
[You can find the full problem here](https://www.goconqr.com/c/74455/course_modules/113604-reset-the-state-after-unmount?=)
10. The trainer shows how to take only the first matched Route by using the `Switch` component from `react-router-dom`.
11. The trainer shows how can we implement dynamic routes, by passing parameters to the routes and catching the values of them by the `match.params` object.
* **RR-1.create_blog** **_Prerequisites__**:
  * >All 6.a.React-core module
  * >All 6.c.React-Router-SPA module
* **RR-2.login_spa** **_Prerequisites__**:
  * >All RR-1 Prerequisites

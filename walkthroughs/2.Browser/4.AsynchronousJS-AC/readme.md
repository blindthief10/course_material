### Asynchronous Execution

This folder is a dedicated walkthrough to executing code in an asynchronous way. The main objectives for the
participants at the  end of this module are: To understand the difference between synchronous or blocking execution and asynchronous or non-blocking execution. To understand the order of execution of asynchronous functions, what callback functions are, what problem arises from them, how promises solve syntactically this
problem and what is the alternative async/await ES7 syntax. In the middle of all this, participants should feel comfortable to perform external requests and fetch data from existing API's by using the fetch function and being able to understand what a JSON object is and parse it. Full module's objectives can be found inside the walkthrough's link below.

Beware of the code next to each file's name. This code corresponds to an exercise lecture in goconqr
platform, inside the following link module below.

### Working with Asynchronous code in JavaScript

A walkthrough to all key concepts of asynchronous JS code [Find the walkthrough here](https://www.goconqr.com/c/65065-asynchronous-code-in-js/course_modules/97867-course-s-objectives?)

#### The trainer's path to this module:

1. The trainer introduces to participants the **try...catch...finally** blocks and shows how to catch errors without making the whole program to crash. It is very important for the trainer to state that this has nothing to do with asynchronous code, and it is just important to see the difference between this way and the **.catch** method that promise-way provides.
2. The trainer shows an example of synchronous code and explains how it will be executed. Sets an initial variable for a value, after that logs this variable to the console, after the log, reset a new value, and then logs the variable again. Thus it shows that the whole program runs sequentially with each line after the other. There is an existing example in goconqr regarding the ruler change of the iron throne with random names.
3. The trainer introduces the concept of asynchronous operations, what are they and how they run. What are the main benefits of using them and why are they introduced? In which kind of operations is almost mandatory to use them?
4. The trainer explains the event loop, callback queue, the stack etc. and the order of execution of asynchronous operations in general. A real-life example would be preferable here.
5. The trainer is trying to show how a change of ruler in the previous example would work asynchronously, by assigning a **_setTimeout_** function after 3 seconds and consoling.log the new value immediately after. It explains why this doesn't work. A good opportunity for brainstorming with the class on why this example will not work.
6. After some time trainer shows that console and everything that follows an asynchronous operation has to be defined
**inside** this callback function and not after like in synchronous code. Thus, further explanation about the nature of
callback functions and the purpose they serve is given.
7. The trainer explains that nested callback function are possible if an asynchronous operation would be required to run after the end of a previous asynchronous operation. In this case we change the ruler that sits on the iron throne again to a third person as a nested callback.
* **AC-1** add_more_rulers.js **_Prerequisites_**:
  * >Asynchronous code execution and event loop theory
  * >callback functions
  * >nested callback functions
  * >TimingFunctions module
  * >Programming_Basics topic
8. The trainer discusses the cons that arose from the previous exercise and explains what callback hell or pyramid of doom is? How can this be avoided and how we can re-write the same logic with a little bit cleaner
and more concise syntax?
9. Introduction to promises and to the what problem do they solve? Show syntax, the native promise object, and the methods, resolve and reject. Real world example again needed here.
10. The trainer introduces what the **.then()** function does, and how it can be chained after a function that returns a promise resolved.
11. The trainer shows that the .then function can be chained in order to perform many non-blocking operations that each waits for the previous execution to finish in order to start. It's important to have a log statement outside of the promise.then sequence so participants understand that the log executes first!
* **AC-2** promisify_rulers.js: **_Prerequisites_**:
  * >AC-1 Prerequisites
  * >Promises section, the .then() function, and chaining promises
12. The trainer shows how to catch errors in promise chain by introducing the .catch block to the students.
13. The trainer introduces the concept of AJAX calls, what are they and how are they useful in order to fetch data from an external resource without having to reload the whole page necessarily. Additionally explains what requests and responses are, and what is a JSON data structure and why it is introduced when exchanging data.
14. The trainer shows the fetch API. How it is used in order to connect and fetch data and perform AJAX calls, which arguments does it accept and what does it return (a promise)?
15. The trainer explains how to parse JSON and the body of a response and not only the header with .json function.
* **AC-3** promise_weather.js: **_Prerequsites_**:
  * >AC-2 Prerequisites
  * >VanillaDOM module
  * >The fetch API
  * >AJAX calls
  * >JSON data structure
  * >Authentication token is required, you can use this: `16d4785f9c10724266053adb3c29dcfd`
  * >The endpoint to hit is :
  `https://api.openweathermap.org/data/2.5/weather?q=${yourCityHere}&APPID=${yourAuthenticationTokenHere}`
16. The trainer introduces a different syntax in an async/await method. Why is this more clear way writing asynchronous code in synchronous fashion?
* **AC-4** weather_async_await.js: **_Prerequisites_**:
  * >AC-3 Prerequisites
  * >The async await syntax
* **AC-5** multiple_requests.js: **_Prerequisites_**:
  * >AC-4 Prerequisites
17. The trainer shows last the Promise.all method and how to perform multiple requests, save all promises into an array of promises, and when everything is back proceed further.

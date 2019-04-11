### JS Forms

This folder is a dedicated walkthrough on how to deal with forms in JavaScript, how to validate each input
field of a form, and on learning how to write regular expression patterns. Among the main objectives of the
participants are: To learn how to validate each input field. To learn how many different types of validations
exists. To learn how to check validity in every field from JS. To learn about the invalid event and how to use it in order to server custom error messages to the user based on the error. To understand what regex is,
and how to use it to test if a string matches a specific pattern. Full module's objectives can be found inside the walkthrough's link below.

Beware of the code next to each file's name. This code corresponds to an exercise lecture in goconqr
platform, inside the following link module below.

### Working with Forms and Regular Expressions

A walkthrough to major key concepts of forms and creating and testing patterns with Regular expressions[Find the walkthrough here](https://www.goconqr.com/c/64304/course_modules/96502-course-s-objectives?)

#### The trainer's path to this module:

1. The trainer introduces the concept of validating data before submitting and why it should be done.
2. The trainer introduces the submit and the reset events that are attached to a form.
3. The trainer shows to class the HTML attributes for handling validation without a script such as: minLength, maxLength, min, max, required etc among others.
4. The trainer gives a simple form validation exercise, so the participants get familiar with the attributes and most input types. [An example of such an exercise could be found here](https://www.goconqr.com/c/64304/course_modules/111950-validate-a-basic-form?=)
5. The trainer shows the checkValidity() function and how it is used through a script to find if a field contains invalid data or not.
6. The trainer shows to the class the **_invalid_** event that is triggered when the checkValidity() function returns false.
7. The trainer shows the validity object of every form's element, that holds information regarding which specific part of validation has failed. Shows briefly all the properties of the objects and to which error each corresponds to.
8. The trainer introduces the setCustomValidity() function in order for the students to learn how to customise error messages.
9. The trainer shows how to use the css :invalid, :valid, :required and :optional pseudo selectors to style accordingly.
* **FO-1** fo-1.cv: **_Prerequisites_**:
  * >Forms-fo module
  * >Reference to DOM-9.cv.js exercise.
10. The trainer introduces the concept of testing matching patterns. How regular expressions can save us? What are regular expressions? Which problem do they solve? [Show a telephone code example](https://www.goconqr.com/c/64304/course_modules/96738-the-telephone-number-pattern?=)
11. The trainer introduces the key concepts of regular expressions. Of which parts a regex is comprised of. And how to test a matching pattern with the test function. Literal strings, alternatives and optionals are introduced.
* **FO-2** fo-2.moh_problem.js: **_Prerequisites_**:
  * >Regex theory covered from number 11
12. The trainer introduces the concept of character sets, metacharacters and quantifiers.
* **FO-3** fo-3.names.js: **_Prereqisites_**:
  * >Regex theory from points 11 and 12
* **FO-4** fo-4.validate_password.js: **_Prerequisites_**:
  * >All FO-3 Prerequisites
* **FO-5** fo-5.validate_phone.js: **_Prereqisites_**:
  * >All FO-3 Prerequisites
* **FO-6** fo-6.validate_mail.js: **_Prereqisites_**:
  * >All FO-3 Prerequisites
* **FO-7** fo-7.validate_url.js: **_Prerequisites_**:
  * >All FO-3 Prerequisites
13. The trainer shows the boundary metacharacter
* **FO-8** fo-8.bears.js: **_Prereqisites_**:
  * >All FO-3 Prerequisites
  * >The theory from module 13
14. The trainer introduces the match function. What is the difference between the test function and the match function, what match returns.
15. The trainer shows also the concept of modifiers, except ignoring case, how to match results globally, and multiline.
* **FO-9** fo-9.socialTextArea: **_Prereqisites_**:
  * >All F0-8 Prerequisites
  * >The theory from module 14 and 15
16. The trainer introduces here the pattern attribute, how it can be used directly inside an HTML attribute and what are the limitations if used from HTML and not JS.
17. Additionally closing the form section, the trainer introduces the method and the action attribute of a form. This will act as a 'bridge' with the next section that deals with API's, fetching data and making requests. 

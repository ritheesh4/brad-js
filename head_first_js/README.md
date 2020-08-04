## Chapter -1

1. <script></script>

- This tag is used to include the javascript code to the html.
- JavaScript can be added as inline in the html file or could be loaded as a seperate file.
- JavScript computes values and adds behaviour to the page.
- We should avoid JavaScript keywords when naming variables.
- There are three common types of expressions in JavaScript
  1. Numberic
  2. String and
  3. Boolean
- If else statements used to make decisions in the code.
- While or for loops allow to execute code many times as a loop.
- console.log() function can be used to display the the messages to the console instead of usin altert.
- console.log() is used for troubleshooting. Users will most likely never see console messages.
- The behaviour of the page can be controlled amazingly by using JavaSript.
- Variable naming

  1.1 Start your variables with a letter, an underscore or a
  dollar sign.
  1.2 After that, use as many letters, numeric digits,
  underscores or dollar signs as you like.

2. Inbuild keywords of JavaScript
   break
   case
   catch
   class
   const
   continue
   debugger
   default
   delete
   do
   else
   enum
   export
   extends
   false
   finally
   for
   function
   if
   implements
   import
   in
   instanceof
   interface
   let
   new
   package
   private
   protected
   public
   return
   static
   super
   switch
   this
   throw
   true
   try
   typeof
   var
   void
   while
   with
   yield

- document.write = Used to insert data into html document.
- console.log = Used for debugging purpose.
- alert = Used to deliver short message.
- document object model = Used to controll the web page. Get the values.

## Chapter -2

1. Pseudocode

- Pseudocode is halfway between real JavaScript code and a plain
  English description of the program

2. Promt

- This can be used to receive the input from the user
- If the user clicks the cancel button in the prompt dialogue box, then prompt returns the vlaue null rather than a  
  string. Null means no value. So the return of the prompt cancel is null.

3. Comparison Operators

- Comparison operators compare two values. Here are some common comparison operators:
  < means less than.
  > means greater than.
  > == means equal to.
  > === means exactly equal to.
  > <= means “less than or equal to.
  > = means “greater than or equal to.
  > != means not equal to.

4. Logical Operators

- Logical operators combine two boolean expressions to create one boolean result (true or false). Here are two logical operators:
  || means OR. Results in true of either of the two expressions is true.
  && means AND, Resutls in true if both of ht two expressions are true.
  ! Mean NOT> Tesults in true if hte expresions is false.

5. QA (Quality assurance)

- Quality assurance is hte process of testing software to find defects.

6. Boolean

- If we check condition for an if loop like this
  if (false || false) {} of if( false && false), false or false is not true in this statement and it would be false.
  If we substitute 0 in that. The results will be same like above

7. Math.random()

- Math.random generates a number between 0 and 1, but not including 1. THe maximum number ou can get from Math.random  
  is 0.999... When you multiply that number by any number for example 5, the hights nubmer you will get is 4.9999...
  Math.floor always rounds a number down. So 1.2 becomes 1, but so does 1.9999. If we generate a number from 0 to 4.999... then everything will be rounded down to 0 to 4.
- To get complete nubmers in the limit, just add one at the end limit.
  example: If I want to get nubmes between 0 to 10, I should take 0 to 11 for the random nubmer generation.

## Chapter -3

1. Parameter

- Each parameter acts like a variable throughout th ebody of the function. When you call the function, each value you
  pass in is assigned to a correspondgin parameter.
  Argument
- Its another name for hte vlaues you poass into a fucniton. They are the arguments of the function call.

2. What can I pass to a function

- When you call a function , you pass it arguments and those arguments the n get matched up with the parameters in the
  function definition. We can pass pretty mych any JavaScript value as an argument, liike a string, a blooean, or a number.

  saveMyProfile("krissy", 1991, 3.81, false);
  const saveMyProfile = (name, birthday, GPA, newuser) => {
  if (birthday >= 2004) {
  // code for handling a child
  }
  // rest of code for this function here
  }

3. How to Invoke a Function

- To call, or inovke, a function, jsut use its name, followe by an open parenthesis, then vany values you need ot pass
  it, separated by commas, and finally a closin gparenthesis,The values in the parentheses are arguments.

4. JavaScript is pass-by-value

- Its iportant to understand how JavaScript passes arguments. JavaScript passes arguments to a function usin gpass-by-value. It means is that each argument is copied into the parameter variable.

5. Why parameter names have not let const or var in front of them

- The functiond oes all the work of instantiating the variable fro you, so you don't need to supply the var keyowrd in
  front of your parameter names.

6. What funciton returns if it does not have a return statement

- A fucntion without a return statement returns undefined.

7. Global and local variable
   Global: Scope availbe to ponit
   Local: Scope available only in that particular function

## Chapter 4

Arrays

- Store muliple values.
  While loop and for loop
- Without including counter, while loop can run. When use while loop, we have to initialize our counter and increment our counter in separate statement.
- In for loop, everything is packed right in the FOR statement for all to see and with no chance of htings getting
  changed or lost.

What is sparse arrya?

- A sparse array is just an array that has values at only a few indices and no values in between. You can craete a sparse arrya easilty, like this:
  let sparseArray = [];
  sparseArray[0] = true;
  sparseArray[100] = true;

In this example, the sparseArray has only two values, both true, at indices 0 and 100. The values at all the other indices are undefined. The lenght of the array is 101 even though there are only two values.

- Try to write functions for all repeating codes.

## Chapter 5

1. How to create an Object

- Add avariable delcaration for the object
- Next, start and object iwth a left curly brace.
- Then all the object's properties go inside.
- Each propterty has a name, a colon and then a value.
- Each property has to be separated by a comma.
- End the object with a closing curly brace, and just like any other variable declaration,
  we end this one with a semicolon.

  Example: let chevy = {
  make: "Chevy",
  model: "Bel Air",
  year: 1957,
  color: "red",
  passengers: 2,
  convertible: false,
  mileage: 1021
  };

2. Object oriented programming

- With object-oriented programming we think about a problem in terms of objects. Objects that have
  state and behavior. IN procedurally thingking, a set of variable declarations, conditionals for/while statements, and function calls are used. Object oriented is different.
- To access a property in the object, start with the object name, follow it with a period (otherwise known as a "dot")
  and then use the property name. We often call that "dot" notation and it looks like this:
  fiat.mileage.

3. How to add a new property.

- Specify the new property and give it a value.
  example:
  fiat.needsSashing = true; As long as the property does not already exist in the object, it's added to the object. Otherwise, the property with this name iis updated.

4. Hot to delete a property in a object

- To delete a property , just use special keyword delete.
  example: delete fido.dogYears;

5. Does varialb hold an object?

- Variables don't actually hold objects. Instead they hold a reference to an object.
- A variable dones not hold the object iteslf, but it holds somethings like a pointer. And, in JavaScript we do not really know what is inside a reference variable, We do know that whatever it is, it points to our object.
- When we use dot notation, the JavaScript onterpreter takes care of using ht e reference to get the object and then
  accesses its propterties for us.

6. You can add functions directly to an object.
   example :let fiat = {
   make: "Fiat",
   model: "500",
   year: 1957,
   color: "Medium Blue",
   passengers: 2,
   convertible: false,
   mileage: 88000,
   drive: function() {
   alert.log("Zoom zoom!");
   }
   };
7. This property is used("this") in JavaScript inside of an object, there is how the property of an object accesses in
   other places inside of that object.

8. Method is just a function that's been assigned to property name in an object.

9. The value of this is et to th eobject when you call the method. SO when you call fiat.start()

## Chapter 6

DOM(Document Object Model)

- DOcument is like th eroot of an upside down tree.
- document => Node at the top
- <html> => top level element added sa a child of document.
- Upcoming elements would be nested with html.

1. Things can be done on the element get by using getElementById()

- Get the content(text or HTML).
- Change the content.
- Read an attribute.
- Add an attribute.
- change an attribute.
- Remove an attribute.

2. What happens if I use document.getElementById and pass in an id that doesn't exist?

- Ans: null returns

3. Other methods to get elements than id

- getElementsByClassName => Returns all the elements whose having the same class name.
- getElementsByTagName => Returns all the elements whose having the similar tag name.

DOM is a big tree of element objects.

4. How to call a function only after the html page is loaded.
   window.onload = init;
   So this callback will invoe the init function only after the html page has loaded.

5. How to set attribute to an element. Example class names to change the stylings.
   planet.setAttribute("class", "redtext"); Here the planet element gets the class attribute as redtext.

6. You can get the attribute of an element by using getAttribute method.\

7. If you put your code in a <script> element in the <head></script> of your page, you need ot make sure you don't
   try to modify the DOM until the page is fully loaded.

8. Window object's onload peoperty to set an event hamdler or callback funtion for the load event.

## Chapter 7

1. Primitive Types

- Number, Blooeans and strings. Low-levedl basic types.

2. Objects

- Document, Element, Math, Car, Dog and song. High-level objects used to represent the things in yourp problem space.

3. Errors

---

- x; If I just put x inside of a program without defining it, error would be
  - ReferenceError: x is not defined
- let x; If I assigned no value for the variable x, error would be
  - undefined
- customer.phoneNumber; if the phoneNumber propety is not there in the object, error would be
  - undefined
- typeOf undefined is also undefined.

# It is most common to use null in places where an object should be but one can’t be created or found, and it is most common to find undefined when you have a variable that hasn’t been initialized, or an object with a missing property, or an array with a missing value.

- Null doesn’t necessarily mean something is wrong. It may just mean something doesn’t exist yet and needs to be  
  created, or something doesn’t exist and you can skip it. Let’s say users have the ability to open or close a weather widget on your site. If a user has it open there’s a <div> with the id of “weatherDiv”, and if not, there isn’t. All of a sudden null becomes quite useful:

4. NULL

- Nulss is intended to represent an object that isn't there.

5. NAN

- JavaScript uses the value NaN, more commonly known as "Not a Number" to represent numerica results that, well ,
  can't be represented. Tak 0/0 for instance. 0/0 evaluates to somethings that just can't be represented in a computer, so it is represented by NaN in JavaScript.

  Nan === Nan is false. They are not equal.
  NaN comes in places of
  let a = 0/0
  let b = "food" \* 1000;
  let c = Math.sqrt(-9);

6. How to check the number is NaN
   if(isNaN(myNum)){
   myNum = 0;
   }

7. If we check the typeOf NaN we will get as number.

8. If we devide a nubmer with 0, we get it as inifinty. We can match the result with infinity as a condition.

9. If we subtract infity from infinity, we well get NaN.

10. typof null is object. But most recent spec defines type of null as null.

11. According to JavaScript rules, it will convert the true to 1 athen compare with the next value.

12. What JvaScript considers falsey

    - undefined is falsey.
    - null is falsey.
    - 0 is falsey.
    - The empty string is falsey.
    - NaN is falsey.

13. Strings
    Strings are both premitive and object type. Numbers and booleans can also act like objects.//refrece book:The Definitive
    - string.trim() => Removes white spaces are the string.
    - string.toUpperCase() => Convert letters into upper case.
    - string.charAt(index) => Gives the character on that particular index of the string.
    - string.indexOf("substring") => This resutrns the index of the substring beginning.
    - string.indexOf("substrig", index) => By giving the second argument index, the search skips index values of the  
      index provided. For example is the index is 5, the search starts from index 5. Its like a starting position.
    - If the string can not be found, -1 returns as the index.
    - strings.substring(5, 10) => Is used to find the substring of index starts at 5 and ends at 10;(delimiter)
    - string.split(",") => the comma's are splitted then add those substrings to an array.
    - string.replace("target","string") => Using this, string can be replaced.
    - string.match(/substring/g) => This can be used to check a particualr string is matching the main string.Regexp is
      required = /substring/g.

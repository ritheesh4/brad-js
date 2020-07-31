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
  
* document.write = Used to insert data into html document.
* console.log = Used for debugging purpose.
* alert = Used to deliver short message.
* document object model = Used to controll the web page. Get the values.

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
- Without including counter, while loop can run.  When use while loop, we have to initialize our counter and increment our counter in separate statement.
- In for loop, everything is packed right in the FOR statement for all to see and with no chance of htings getting 
  changed or lost.

What is sparse arrya?
 - A sparse array is just an array that has values at only a few indices and no values in between. You can craete a sparse arrya easilty, like this:
  let sparseArray = [];
  sparseArray[0] = true;
  sparseArray[100] = true;
  
In this example, the sparseArray has only two values, both true, at indices 0 and 100. The values at all the other indices are undefined. The lenght of the array is 101 even though there are only two values.
 
- Try to write functions for all repeating codes.
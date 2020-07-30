Parameter
- Each parameter acts like a variable throughout th ebody of the function. When you call the function, each value you
  pass in is assigned to a correspondgin parameter.
Argument
- Its another name for hte vlaues you poass into a fucniton. They are the arguments of the function call.

What can I pass to a function
- When you call a function , you pass it arguments and those arguments the n get matched up with the parameters in the 
  function definition. We can pass pretty mych any JavaScript value as an argument, liike a string, a blooean, or a number.

  saveMyProfile("krissy", 1991, 3.81, false);
  const saveMyProfile = (name, birthday, GPA, newuser) => {
  if (birthday >= 2004) {
  // code for handling a child 
  }
  // rest of code for this function here
  }
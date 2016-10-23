/*******************************/
/*   Setting up the examples   */
/*******************************/
var whatIsThis = function(a, b) {
    console.log('This is...', this);
    console.log('a = ', a);
    console.log('b = ', b);
};

var inAnObject = {
    name: 'inAnObject',
    test1: whatIsThis,
    anotherObject: {
        name: 'anotherObject',
        test2: whatIsThis
    }
};

var inAFunction = function(a, b) {
    this.name = 'Sally';
    whatIsThis(a, b);
};

inAFunction.prototype.test3 = whatIsThis;

var trickyTricky = {
    name: 'trickyTricky',
    why: 'does this work?',
    what: 'is going on here?'
};

var confusing = {
    name: 'confusing',
    state: 'Alaska',
    city: 'Anchorage'
};


/*******************************/
/*     Running the examples    */
/*******************************/

/* Instructions:
   You are a scientist who has just discovered a *mysterious* new element in your lab. Since creativity isn't your strong suit, you name the element `this`. Your job is to figure out the properties of this new element as well as how it interacts with its environment. Run through each of the examples in whatIsThis.js, one by one (commenting out the previous example and uncomment the current example as necessary). In the comments section below each example fill in what `this` is referencing inside of the whatIsThis function. Why? If it throws an error, why is it throwing an error?

   Create an index.html and link this file.  Open index.html in your browser and view your console to get started.
*/

// * Problem 1
// whatIsThis('hello', 'world');
/*
- "this" is ...
      the window object
- because ...
    "Whenever a function is contained in the global scope, the value of this inside of that function will be the window object."
    -got from https://john-dugan.com/this-in-javascript/
    This function is in the global scope.
*/




// * Problem 2
// window.whatIsThis('hello', 'world');
/*
- "this" is ...
    the window object
- because ...
    This is kind of like a meta statement.
    "The window property of a window object points to the window object itself. Thus the following expressions all return the same window object:"
    -got from https://developer.mozilla.org/en-US/docs/Web/API/Window/window
*/




// * Problem 3
// inAnObject.test1('face', 'book');
/*
- "this" is ...
    an object (inAnObject)
- because ...
    "Whenever a function is called by a preceding dot, the object before that dot is this."
        -got from https://john-dugan.com/this-in-javascript/
    Test1 is a function that has the word "this" in it. inAnObject is the object before the function and 'this' will be referring to that.
*/




// * Problem 4
// inAnObject.anotherObject.test1('twitter', 'book');
/*
- "this" is ...
    An error code!!!!
- because ...
    test1 is not a function inside of the property "anotherObject," so it cannot be called.
*/




// * Problem 5
// inAnObject.anotherObject.test2('twitter', 'book');
/*
- "this" is ...
    object (anotherObject)
- because ...
    When a function is called (in this case test2), by a preceding dot, the object before that dot (in this case anotherObject) is "this."
        -got from https://john-dugan.com/this-in-javascript/ again
*/




// * Problem 6
// whatIsThis.call();
/*
- "this" is ...
    Window object
- because ...
    When you use call, "this" will usually be applied to the first parameter. Since this has no parameter, it will be applied to the "whatIsThis" function, which will result in the window object
*/




// * Problem 7
// whatIsThis.call(trickyTricky);
/*
- "this" is ...
    object "trickyTricky"
- because ...
    Whenever JavaScript’s call or apply method is used, this is explicitly defined.
      -got from "https://john-dugan.com/this-in-javascript/"
    This uses call, which asks for the "trickyTricky" object, which this refers to.
*/




// * Problem 8
// whatIsThis.call(trickyTricky, 'nice', 'job');
/*
- "this" is ...
    object trickyTricky
- because ...
    This is trickyTricky... AND because the first parameter in call is trickyTricky, "this" will refer to this (see what I did here?) object.

    "JavaScript’s call and apply methods allow you to execute a function in a different context. The first argument passed to either of these methods explicitly sets what this points to."
      -got from https://john-dugan.com/this-in-javascript/
*/




// * Problem 9
// whatIsThis.call(confusing);
/*
- "this" is ...
    object 'confusing'
- because ...
    just like the problems above, 'this' is explicitly defined by call, so it will refere to the object within call, which in this case is confusing.
*/




// * Problem 10
// whatIsThis.call(confusing, 'hello');
/*
- "this" is ...
    object 'confusing'
- because ...
    when you use call, the first parameter is 'confusing,' which is an object. The first parameter is what this is going to refer to, which will be 'confusing.'
*/




// * Problem 11
// whatIsThis.apply(trickyTricky);
/*
- "this" is ...
    object 'trickyTricky'
- because ...
    the 'apply' method works just like 'call' in this situation. Apply is oging to use the first parameter(argument) to reference 'this.'
    Once again...
    "JavaScript’s call and apply methods allow you to execute a function in a different context. The first argument passed to either of these methods explicitly sets what this points to. Because call and apply are explicit, they present the clearest case of what this points to."
      -got from "https://john-dugan.com/this-in-javascript/"
*/




// * Problem 12
// whatIsThis.apply(confusing, ['nice', 'job']);
/*
- "this" is ...
    the object 'confusing'
- because ...
    Just like above, 'apply' will set the first argument (in this case confusing), to be what this refers to. Remember, first parameter in '.apply' = this.
*/




// * Problem 13
// whatIsThis.apply(confusing, 'nice', 'job');
/*
- "this" is ...
    an error!!!!!!
- because ...
    Apply needs an array as the second argument. This is actually quite convenient because apply begins with an "a", so you can remember that it needs an array, which also begins with an a.

    "So that's where apply comes in - the second argument needs to be an array, which is unpacked into arguments that are passed to the called function.
    So that's the difference between call and apply. Both can be called on functions, which they run in the context of the first argument. In call the subsequent arguments are passed in to the function as they are, while apply expects the second argument to be an array that it unpacks as arguments for the called function."
    -got from http://hangar.runway7.net/javascript/difference-call-apply
*/




// * Problem 14
// inAFunction('what will', 'happen?');
/*
- "this" is ...
      the window object
- because ...
      The 'this' that is being logged in the console is coming from the 'whatIsThis' function, which is a function on the global scope which returns the window object when referring to this.
*/




// * Problem 15
// inAFunction.test3('A', 'B');
/*
- "this" is ...
    an error!!!!
- because ...
    Pretty convenient that the console tells you that test3 is not a function. And it's right, test3 is not a function, so it could not be called if it does not exist. It's not a function because was not assigned as a Constructor for test3. One would need to claim a variable and set it equal to new inAFunction for this to happen. I think...
*/




// * Problem 16
// var newObject = new inAFunction('what will', 'happen?');
/*
- "this" is ...
    the window object
- because ...
      The 'this' that is being logged in the console is coming from the 'whatIsThis' function, which is a function on the global scope which returns the window object when referring to this. We are in the global scope, not inside of an object.
*/




// * Problem 17
// var newObject = new inAFunction('what will', 'happen?');
// newObject.test3('C', 'D');
/*
- "this" is ...
    The first reference to 'this' is the window object
    The second reference to 'this' refers to the specific object created with the Constructor and is returned by that Constructor
- because ...
    #1: when newObject is created, it calls 'inAFunction' which calls "whatIsThis" function, in which 'this' refers to the window object. This function does NOT have an owner object, so the value is a global valuse which is the browser window.

      "When a function is called without an owner object, the value of this becomes the global object.
      In a web browser the global object is the browser window."
        -got from http://www.w3schools.com/js/js_function_invocation.asp

    #2: In the second "this is", this is referring to the inAFunction object and points towards 'Sally.' We are specifically referring to the object created (which is 'newObject') and assigning it to a method 'test3' which calls the function 'whatIsThis,' and this will refer to the constructor function which is inAFunction.

*/




// * Problem 18
// inAnObject.test1.call(trickyTricky, 'face', 'book');
/*
- "this" is ...
    object trickyTricky
- because ...
    Once again we are using the method 'call' in which the first parameter (in this case, trickyTricky), is what 'this' will refer to.
*/




// * Problem 19
// inAnObject.anotherObject.test2.apply(confusing, ['foo', 'bar']);
/*
- "this" is ...
    object confusing
- because ...
    We are using the method 'apply' in which the first parameter (in this case is the object confusing) is what this will refer to. It works because the second parameter is an array.
*/

* What is scope in JS?
	- In Javascript, "scope" refers to the context in which variables, fucnntions and objects, are accessible during runtime.
	- There are three main types of Scope in JavaScript:
		i) Function Scope:
			=> variables which are declared inside a fucntion are only accessible inside that fucntion
				exmaple:- fucntion first(){
						let a = 200
					  }

		ii) Block Scope:
			=> varibles which are declared inside a block({}) are only accessible inside that block
				exmaple:- if(){
						let a = 400
					  }

		iii) Global Scope:
			=> variables which are not declared inside any fuction or any block are accessible globaly
				exmaple:- let a = 600


*  Execution Context in JavaScript:
		1. What is Execution Context?
		    	=> It is the environment in which JavaScript code is executed. It keeps track of variables, functions,
		    	   and the value of `this`.

		2. Types of Execution Context:
			• Global Execution Context: Created when JavaScript starts running. Only one GEC exists.
			• Function Execution Context: Created every time a function is called.
			• Eval Execution Context: Created when eval() is used (not recommended).
		3. Phases of Execution Context
			i) Creation Phase:
				• Memory allocated to variables and functions
				• Variables → undefined
				• Functions → Full function stored
				• `this` keyword is set
		 	ii) Execution Phase:
				• Code runs line by line
				• Values assigned to variables
				• Functions are executed

		4. Example Code:
			var name = "World"; 
			function greet() { 
				console.log("Hello " + name); 
			} 
			greet();
		5. Execution Flow (Call Stack)
			• Global Execution Context created
			• Variable `name` allocated → undefined → 'World'
			• Function `greet` is hoisted
			• `greet()` called → new Function Execution Context created
			• Inside `greet` → console.log('Hello World')
			• Function Execution Context removed
			• Global Context ends
		7. Key Points to Remember
			• JavaScript is single-threaded → only one context runs at a time.
			• Contexts are managed using the Call Stack.
			• Every function creates a new context.

* Lexical Scope vs Dynamic Scope:
		1. JavaScript Uses: Lexical Scope

		2.  What is Lexical Scope?
				=> Lexical scope (also called static scope) means that the scope of a variable is determined by its location in the source code.

					When a function is defined, it remembers the scope in which it was written, regardless of where it's called later.
				   Example:
					let name = "Global";

					function outer() {
  					let name = "Outer";

  						function inner() {
   							console.log(name);  // Output: "Outer"
  						}

  						inner();
					}

					outer();

				   	inner() is defined inside outer(), so it has access to outer()'s name.


			3. What is Dynamic Scope?
				=> Dynamic scope means the scope of variables is determined by the call stack — where the function is called, not where it was defined.

				⚠️ JavaScript does NOT support dynamic scoping.
				Languages like Bash, Perl, or old Lisp support dynamic scoping.
					Example:-
						name="Global"

						function inner {
  							echo $name
						}

						function outer {
  							local name="Outer"
  							inner  # This would print "Outer" due to dynamic scoping
						}

						outer

					In dynamic scoping, inner() would look for name in the caller's scope (outer), not where it was defined.


			4. Mnemonic to Remember:
				- Lexical = Location of definition

				- Dynamic = Direction of call

* Closures
		1. What is closures?
				=> Closure is a funtion that remebers and can access varibles from it's outer function even after outer funtion exection
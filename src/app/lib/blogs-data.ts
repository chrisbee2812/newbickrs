export type BlogCardProps = {
    header: string;
    headerSubs: string[];
    title: string;
    description: string;
    blogText: string[];
    date: string;
};

export const blogs: BlogCardProps[] = [
  {
    header: 'Back to Basics',
    headerSubs: ['Variables', 'Data Types', 'Operators', 'If Statements'],
    title: 'Start a fresh, Javascript',
    description: "An introduction to Javascript, i've already been over the very basics, and touched on some further basics today during my learning process, so this one will quickly recap variables, operators, and if statements.",
    blogText: [
        'So, I decided to revist all my past learning and document it here, starting from the begining, so this is a quick recap of the very basics of Javascript.',
        "Today I'll just be documenting variables, data types, operators, and if statements. I may add to this individual blog over time if i feel there's bits i've missed or need to expand on.",
        "Variables - In Javascript, variables are used to store data values. You can declare a variable using var (deprecated, I'll expalin why), let, or const. For example:\nlet age = 25; // using let allows you to reassign the variable later, once the variable has been assigned using let, you then reassign by age = 20; \nconst name = 'Chris'; // using const means the variable cannot be reassigned, attempting name = 'Tom'; later would result in an error.\nvar is function-scoped and can lead to unexpected behavior, so it's generally avoided in modern Javascript, otherwise it acts like a let, as in it can be re-assigned a value.",
        "Data Types - Javascript has several data types including:\n- String: represents text, e.g., 'Hello World'\n- Number: represents both integer and floating-point numbers, e.g., 42, 3.14*\n- Boolean: represents true or false values\n- Object: represents complex data structures\n- Array: a special type of object used to store multiple values in a single variable\n*Floating points: due to the way numbers are stored in binary, some decimal numbers cannot be represented with perfect accuracy, leading to small rounding errors in calculations, for accuracy it is always best, where possible to avoid calculations using floating points, and convert the number to a floating point when calculations are complete.",
        "Operators - Operators are used to perform operations on variables and values. Common operators include:\n- Arithmetic Operators: +, -, *, /, %\n- Assignment Operators: =, +=, -=\n- Comparison Operators: ==, ===, !=, !==, >, <, >=, <=\n- Logical Operators: && (AND), || (OR), ! (NOT)",
        "If Statements - If statements are used to perform different actions based on different conditions. The syntax is as follows:\nif (condition) {\n  // code to be executed if condition is true\n} else if (anotherCondition) {\n  // code to be executed if anotherCondition is true\n} else {\n  // code to be executed if all previous conditions are false\n}",
        "Truthy and Falsy - In Javascript, values can be considered 'truthy' or 'falsy' when evaluated in a boolean context. Falsy values include false, 0, '', null, undefined, and NaN (Not a Number). All other values are considered truthy. This is important to understand when using if statements and logical operators.",
        "Ternary Operator - The ternary operator is a shorthand way of writing an if-else statement. It takes three operands: a condition, a value if the condition is true, and a value if the condition is false. The syntax is:\ncondition ? valueIfTrue : valueIfFalse;\nFor example:\nlet access = age >= 18 ? 'granted' : 'denied';",
        "Guard Conditons (&&) - A common pattern in Javascript is to use the logical AND (&&) operator to execute code only if a certain condition is true. For example:\ncondition && doSomething();\nIn this case, doSomething() will only be called if condition is truthy.",
        "Default Values (||) - The logical OR (||) operator can be used to provide default values. If the first operand is falsy, the second operand is returned. For example:\nlet username = inputName || 'Guest';\nIn this case, if inputName is falsy (e.g., '', null, undefined), username will be assigned the value 'Guest'.",
        "That's a quick recap of some Javascript basics, I did cover a little bit more than anticipated here, and hopefully anyone reading didn't get too bored. As I continue my learning journey, I'll be documenting more advanced topics and concepts. Stay tuned for more updates!"
    ],
    date: '10th November 2025'
  },
  {
    header: 'Functions Basics',
    headerSubs: ['Basic Functions', 'Parameters', 'Return Values'],
    title: 'Back to Basics with Functions',
    description: "A refresh on the very basics of functions in Javascript, covering how to declare them, use parameters, and return values.",
    blogText: [
        'Part of my journey to solidify my Javascript knowledge, I am revisiting the basics and documenting them here. This time, focusing on functions (just the very basics of functions).',
        "Today I'll be documenting basic functions, parameters, and return values. I may add to this individual blog over time if i feel there's bits i've missed or need to expand on.",
        "Functions - In Javascript, functions are blocks of re-usable code designed to perform a particular task. You can declare a function using the function keyword (or as an arrow function, however today i'll not be covering that). For example:\nfunction greet() {\n  console.log('Hello!');\n};",
        "The general syntax for declaring a function is:\nfunction functionName(parameters) {\n  // code to be executed\n}; Function names are generally camelCased in Javascript.",
        "Calling Functions - To execute the code within a function, you need to call or invoke the function by using its name followed by parentheses. For example:\ngreet(); // This will output 'Hello!' to the console using the above function.",
        "Parameters - Functions can take parameters, which are values passed into the function when it is called. Parameters act as placeholders for the values that will be provided when the function is invoked. For example:\nfunction greet(name) {\n  console.log('Hello, ' + name + '!');\n};\nIn this case, name is a parameter that will be replaced with the actual value when the function is called.\nYou can call the function with an argument like this:\ngreet('Chris'); // This will output 'Hello, Chris!' to the console.",
        "Multiple Parameters - Functions can have multiple parameters, separated by commas. For example:\nfunction add(a, b) {\n  console.log(a + b);\n};\nYou can call the function with two arguments like this:\nadd(5, 3); // This will output 8 to the console.",
        "Default Parameters - You can also assign default values to parameters. If no argument is provided for that parameter when the function is called, the default value will be used. For example:\nfunction greet(name = 'Guest') {\n  console.log('Hello, ' + name + '!');\n};\nIf you call greet() without an argument, it will output 'Hello, Guest!'.",
        "Return Values - Functions can also return values using the return statement. When a function reaches a return statement, it stops executing and sends the specified value back to the caller. For example:\nfunction add(a, b) {\n  return a + b;\n};\nlet sum = add(5, 3); // sum will be assigned the value 8.",
        "That's a quick recap of the very basics of functions in Javascript. As I continue my learning journey, I'll be documenting more advanced topics and concepts related to functions and other areas of Javascript. Stay tuned for more updates!",
      ],
    date: '11th November 2025'
  },
  {
    header: 'Javascript Objects',
    headerSubs: ['Object Basics', 'Properties', 'Methods'],
    title: 'A Javascript Objects revisit',
    description: "A refresh on the very basics of objects in Javascript, covering how to create them, use properties, and methods.",
    blogText: [
        'Part of my journey to solidify my Javascript knowledge, I am revisiting the basics and documenting them here. This time, focusing on objects (just the very basics of objects).',
        "Today I'll be documenting basic objects, properties, and methods. I may add to this individual blog over time if i feel there's bits i've missed or need to expand on.",
        "Objects - In Javascript, objects are collections of key-value pairs that can store multiple values and more complex data structures. You can create an object using curly braces {}. For example:\nlet person = {\n  name: 'Chris',\n  age: 25\n};",
        "The general syntax for creating an object is:\nlet objectName = {\n  key1: value1,\n  key2: value2,\n  // more key-value pairs\n}; Keys are generally camelCased in Javascript.",
        "Accessing Properties - You can access the properties of an object using dot notation or bracket notation. For example:\nconsole.log(person.name); // Outputs: Chris\nconsole.log(person['age']); // Outputs: 25",
        "Adding/Modifying Properties - You can add new properties or modify existing ones using dot notation or bracket notation. For example:\nperson.gender = 'male'; // Adding a new property\nperson.age = 26; // Modifying an existing property",
        "Methods - Objects can also have methods, which are functions that are properties of the object. You can define methods within an object and call them using dot notation. For example:\nlet calculator = {\n  add: function(a, b) {\n    return a + b;\n  }\n};\nYou can call the method like this:\nlet sum = calculator.add(5, 3); // sum will be assigned the value 8.",
        "Objects are memory reference types - When you assign an object to a variable, you're assigning a reference to that object in memory, not the actual object itself. This means that if you copy the variable to another variable, both variables will reference the same object. Changes made through one variable will affect the other. For example:\nlet obj1 = { key: 'value' };\nlet obj2 = obj1;\nobj2.key = 'newValue';\nconsole.log(obj1.key); // Outputs: newValue\nIn this case, modifying obj2 also modified obj1 because they both reference the same object in memory.\nTo create a copy of an object, you can use methods like Object.assign() or the spread operator (...).\nFor example:\nlet obj1 = { key: 'value' };\nlet obj2 = { ...obj1 }; // Using spread operator to create a shallow copy\nobj2.key = 'newValue';\nconsole.log(obj1.key); // Outputs: value\nIn this case, modifying obj2 does not affect obj1 because they are now separate objects in memory.\nObj2 will also not be equal to obj1 as they are different objects in memory, even though they have the same properties and values.",
        "Object shortcuts - When the property name and variable name are the same, you can use shorthand syntax to create objects. For example:\nlet name = 'Chris';\nlet age = 25;\nlet person = { name, age }; // Shorthand syntax\nThis is equivalent to:\nlet person = { name: name, age: age };",
        "Object destructuring - You can extract properties from an object and assign them to variables using destructuring syntax. For example:\nlet person = { name: 'Chris', age: 25 };\nlet { name, age } = person; // Destructuring\nconsole.log(name); // Outputs: Chris\nconsole.log(age); // Outputs: 25",
        "Built-in Objects - Javascript provides several built-in objects like Date, Math, and Array that come with their own properties and methods. For example, you can create a new Date object to work with dates and times:\nlet currentDate = new Date();\nconsole.log(currentDate.toDateString()); // Outputs the current date in a readable format",
        "That's a quick recap of the very basics of objects in Javascript. As I continue my learning journey, I'll be documenting more advanced topics and concepts related to objects and other areas of Javascript. Stay tuned for more updates!",
      ],
    date: '13th November 2025'
  },
  {
    header: 'The DOM Explained',
    headerSubs: ['DOM Basics', 'Selecting Elements', 'Manipulating Elements'],
    title: 'The Document Object Model (DOM) in Javascript',
    description: "A refresh on the very basics of the DOM in Javascript, covering what it is, how to select elements, and manipulate them.",
    blogText: [
        'Part of my journey to solidify my Javascript knowledge, I am revisiting the basics and documenting them here. This time, focusing on the Document Object Model (DOM) (just the very basics of the DOM).',
        "Today I'll be documenting basic DOM concepts, selecting elements, and manipulating elements. I may add to this individual blog over time if i feel there's bits i've missed or need to expand on.",
        "What is the DOM? - The Document Object Model (DOM) is a programming interface for web documents. It represents the structure of a document as a tree of objects, where each object corresponds to a part of the document (like an element, attribute, or text). The DOM allows you to manipulate the content, structure, and style of a web page using Javascript.",
        "The DOM itself is not part of the Javascript language, but Javascript can interact with the DOM to create dynamic web pages. Within Javascript the DOM is treated as a global object called 'document'.",
        "To access the DOM in Javascript, you typically use the 'document' object, which provides various methods and properties to interact with the elements on a web page.",
        "Normally when working with the DOM, your Javascript code will be placed in a <script> tag within the HTML document, or in an external Javascript file that is linked to the HTML document.",
        "Selecting Elements - You can select elements from the DOM using various methods provided by the 'document' object. Some common methods include:\n- getElementById(id): Selects an element by its ID.\n- getElementsByClassName(className): Selects all elements with a specific class name.\n- getElementsByTagName(tagName): Selects all elements with a specific tag name.\n- querySelector(selector): Selects the first element that matches a CSS selector.\n- querySelectorAll(selector): Selects all elements that match a CSS selector.",
        "Manipulating Elements - Once you have selected an element, you can manipulate it using various properties and methods. Some common manipulations include:\n- Changing content: You can change the text or HTML content of an element using the textContent or innerHTML properties.\n- Changing styles: You can modify the CSS styles of an element using the style property.\n- Adding/removing classes: You can add or remove CSS classes from an element using the classList property.\n- Creating new elements: You can create new elements using the createElement method and then append them to the DOM using methods like appendChild or insertBefore.\n- Removing elements: You can remove elements from the DOM using the removeChild method.",
        "Examples of selecting and manilpulating elements:\nlet myElement = document.getElementById('myElementId');\nmyElement.textContent = 'New Content';\nmyElement.style.color = 'blue';\nmyElement.classList.add('new-class');",
        "The document is a part of the window object - In a web browser, the global object is 'window', which represents the browser window. The 'document' object is a property of the 'window' object, so you can access it using 'window.document' or simply 'document'.",
        "Running console.log(document) in the browser's developer console will display the entire DOM structure of the current web page, allowing you to inspect and interact with it.",
        "Likewise, running console.log(window) will display the window object, which includes properties and methods related to the browser window, including the 'document' property that represents the DOM.",
        "That's a quick recap of the very basics of the Document Object Model (DOM) in Javascript. As I continue my learning journey, I'll be documenting more advanced topics and concepts related to the DOM and other areas of Javascript. Stay tuned for more updates!",
      ],
    date: '16th November 2025'
  },
];

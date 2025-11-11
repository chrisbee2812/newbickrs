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
        "Parameters - Functions can take parameters, which are values passed into the function when it is called. Parameters act as placeholders for the values that will be provided when the function is invoked. For example:\nfunction greet(name) {\n  console.log('Hello, ' + name + '!');\n};\nIn this case, name is a parameter that will be replaced with the actual value when the function is called.",
        "Return Values - Functions can also return values using the return statement. When a function reaches a return statement, it stops executing and sends the specified value back to the caller. For example:\nfunction add(a, b) {\n  return a + b;\n};\nlet sum = add(5, 3); // sum will be assigned the value 8.",
        "That's a quick recap of the very basics of functions in Javascript. As I continue my learning journey, I'll be documenting more advanced topics and concepts related to functions and other areas of Javascript. Stay tuned for more updates!",
      ],
    date: '11th November 2025'
  },
];

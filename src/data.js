export const Skill = {
  HTML: {
    1: {
      Q: "What is HTML5?",
      A: "HTML5 is a markup language used for structuring and displaying content on the internet. This includes animations, audio, images, and text, among many other things, and all without the need for additional software. HTML5 is the most recent and most advanced version of HTML",
    },
    2: {
      Q: "What are the key differences between HTML and HTML5?",
      A: [
        "HTML5 supports video, graphics, and audio, whereas HTML only supports them through third-party extensions",
        "HTML5 is mobile-friendly, whereas HTML is not",
        "HTML5 is compatible with all major web browsers, whereas HTML is not",
        "HTML5 offers several options for local storage, whereas HTML only offers cookies",
        "HTML5 supports multi-threading, whereas HTML operates only in one thread",
      ],
    },
    3: {
      Q: "What are tags in HTML5 and how many are required to make a basic web page?",
      A: "Tags are pieces of HTML5 code used to define the structure of the page. There are more than 100 tags in HTML5, with each one serving a unique purpose, such as positioning text or supporting audio.",
    },
    4: {
      Q: " What are elements in HTML5?",
      A: "Elements are components of HTML5 code that instruct the web browser how to structure and interpret the HTML5 document. Typically, they encompass an opening tag, a closing tag, and specified content between the opening and closing tags, depending on the type of tag used.",
    },
    5: {
      Q: "What are attributes in HTML5?",
      A: "Attributes are special properties or characteristics used within an element to modify its behavior. For example, attributes can be used to specify the dimensions or positioning values of an image. Attributes are specified within the opening tag and must be enclosed in quotation marks.",
    },
    6: {
      Q: "What is CSS and what is its relationship with HTML5?",
      A: "CSS, or Cascading Style Sheet, is a style sheet language used with HTML5 to format and display the elements specified by the markup language for the end user. While HTML5 defines the structure of a page, CSS specifies the document’s style, including page layout, colors, and fonts. ",
    },
    7: {
      Q: "What are the key HTML5 page structure elements?",
      A: [
        "containing the header or top of the page",
        "containing the footer or bottom of the page",
        "containing one section that is thematically similar to other sections",
        "containing standalone content",
        "containing the navigation functionality of the page",
        "containing secondary content",
      ],
    },
    8: {
      Q: "What is the role of drag and drop in HTML5?",
      A: "Drag and drop is a user interface tool used to copy, reorder, and delete items with the cursor. It’s new to HTML5 and helps save a significant amount of time and effort while coding. Once an element’s ‘draggable’ attribute is set to true, it can be dragged and dropped with the mouse.",
    },
    9: {
      Q: "What are input elements in HTML5?",
      A: "Input elements are used to create interactive controls that receive and process information from the user. For example, inputs could be used to process login details, collect customer feedback, or display a form",
    },
    10: {
      Q: "What is meant by web storage in HTML5?",
      A: "Web storage refers to HTML5’s new storage features. Previous HTML versions relied on cookies for storage in the server, but web storage now means data can be stored locally within the user’s browser. Web storage also offers a larger storage limit and is more secure.",
    },
    11: {
      Q: "How do you link to another web page using HTML5?",
      A: "The anchor tag, or tag in code, is used with the ‘href’ attribute to link to other web pages. The URL and linked text are both included in the element.",
    },
    12: {
      Q: "What are the three types of lists in HTML5?",
      A: [
        "Ordered list, which is used to group related items in a specific order",
        "Unordered list, which is used to group related items in no particular order ",
        "Description list, which is used to group terms and their descriptions",
      ],
    },
    13: {
      Q: "What are the key benefits of HTML5?",
      A: [
        "Compatibility with all web browsers and devices",
        "Cleaner code for developers",
        "Native support for multimedia content",
        "Quicker load times due to offline storage cache",
        "Introduction of geolocation",
      ],
    },
    14: {
      Q: "What is the role of formatting tags in HTML5?",
      A: [
        " used to make text bold",
        " used to italicize text",
        " used to underline text",
        " used to highlight text",
        " used to mark text as important",
      ],
    },
    15: {
      Q: "What types of graphics are supported by HTML5?",
      A: [
        "SVG: (Scalable Vector Graphics), used to create vector-based graphics, such as diagrams and icons",
        "Canvas: used to draw graphics, such as shapes",
      ],
    },

    16: {
      Q: "What is new about the relationship between the and tags in HTML5?",
      A: "The tag is used to design the header of a web page and can contain a range of elements including text, logos, or a navigation bar. The tag is the textual part of the header and is used to specify the most important section of a piece of content. It’s often used alongside other header tags (through to ) to format and prioritize content sections.",
    },
    17: {
      Q: "What are some of the new input types in HTML5?",
      A: [
        "Date, used to select a date from a drop-down calendar",
        "Time, used to enter a time",
        "Email, used to enter an email address",
        "Tel, used to enter a telephone number with a specific pattern",
        "Color, used to select a color from a color picker",
        "Range, used to select a range of values on a slider",
      ],
    },
    18: {
      Q: "What are image maps in HTML5?",
      A: "Image maps are images with several clickable areas that link to different web pages. They use the and tags. Coordinates are specified to segment the image into different areas and then relevant links are applied.",
    },
    19: {
      Q: "What are some of the most important APIs in HTML5?",
      A: [
        "Geolocation API, used to identify the user’s location",
        "Web Speech API, which provides speech recognition functionality",
        "Clipboard API, which provides copy, cut, and paste functionality",
        "History API, which provides access to the browser navigation history",
        "Web Notifications API, used to send web-based notifications to users",
      ],
    },
    20: {
      Q: "What is the role of DOCTYPE in HTML5?",
      A: "All HTML pages (HTML5 included) need to have their document type declared in the first line of code. DOCTYPE instructs the browser how to interpret the document by indicating what type and version of markup language are being used.",
    },
    21: {
      Q: "What are the different types of storage in HTML5?",
      A: [
        "sessionStorage: temporary storage available for the duration of the page session",
        "localStorage: permanent storage available until data is deleted by the user",
      ],
    },
    22: {
      Q: "What is metadata in HTML5 and how is it specified?",
      A: "Metadata is data that describes other data, providing additional information about an HTML document. Its purpose is to help browsers, search engines and other web applications better interpret a document. Examples of metadata include the description, author, and keywords.The tag is used to define metadata about an HTML document. tags are always enclosed within the of the HTML document.",
    },
    23: {
      Q: "What are the new tags for multimedia in HTML5?",
      A: [
        " used to embed audio content",
        " used to embed video content",
        " used to embed content from an external source",
        " used to embed multiple media resources",
        " used to specify text tracks (such as subtitles) for audio and video content",
      ],
    },
    24: {
      Q: "What are some of the main issues with HTML5?",
      A: [
        "New security threats associated with local storage",
        "Advanced features are not necessarily supported by all browsers",
        "Mobile compatibility requires additional coding",
        "Its limited access to hardware APIs",
        "Its steep learning curve",
      ],
    },
    25: {
      Q: "What are the best audio and video formats to use in HTML5?",
      A: [
        "HTML5 supports MP3, Ogg, WebM, ADTS, FLAC, and WAV audio formats. A WAV file is uncompressed and typically large, making it unsuitable. Each browser supports its own set of audio formats; MP3 is the only audio format that is currently compatible with all major browsers.",
        "In terms of video, HTML5 supports MP4, WebM, and Ogg formats. While MP4 is generally considered the recommended video format, not all browsers support it natively due to licensing issues. In these cases, WebM can be used as an alternative.",
      ],
    },
    26: {
      Q: "How can HTML5 be used for data storage purposes?",
      A: [
        "IndexedDB API, a standard maintained by the World Wide Web Consortium",
        "Web SQL Database, now considered deprecated",
      ],
    },
    27: {
      Q: "What is microdata in HTML5 and how is it created?",
      A: [
        "Microdata allows developers to define the custom semantics of elements and embed custom properties within the web page. ",

        "It’s used to provide browsers and search engines with more information about the contents of the web page so that they can display results that best match the user’s search intent.",

        "Microdata is created using the element. Information about the item is then specified using the element.",
      ],
    },

    28: {
      Q: "How is the Geolocation API implemented in HTML5?",
      A: [
        "The HTML5 Geolocation API uses the device’s GPS, WiFi or mobile signal to triangulate the user’s latitude and longitude coordinates. The user must give their permission before geolocation services can be used on their device.",

        "From the developer’s point of view, the Geolocation API is implemented firstly by calling the geolocation.navigator object. Three methods are then used by the API to handle location data:",

        "getCurrentPosition identifies the device’s current location and returns a position object with data",
        "watchPosition returns a value whenever the device location changes",
        "clearWatch cancels the previous watchPosition call",
      ],
    },
    29: {
      Q: "What is the role of the WebSocket API in HTML5?",
      A: "The WebSocket API facilitates two-way, interactive communication between the web browser and the web server. This enables a real-time, event-driven data transfer to and from the server. It’s a very popular API that brings speed, security, and flexibility.",
    },
    30: {
      Q: "What are some of the key global attributes in HTML5?",
      A: [
        "accesskey, used to specify a keyboard shortcut for an element",
        "class, used to assign one or more class names to an element",
        "dir, used to specify the base direction of the element’s text",
        "data-*, used to store custom data specific to the web page",
        "contenteditable, used to indicate whether the content is editable or not",
      ],
    },
    31: {
      Q: "What is the role of the Web Workers API in HTML5?",
      A: "The Web Workers API makes it possible to run scripts independently in a background thread, separate from the main execution thread of the HTML5 document. This allows developers to continue working on the page without affecting its performance, while scripts run in the background.",
    },
    32: {
      Q:" How can the performance of an HTML5 web page be measured?",
      A: ["Page load speed: The time it takes for the full page to load",
      "Time to interact: The time it takes for the user to be able to interact with the page",
      "Bounce rate: The proportion of users that leave the page without interacting with it",
      "Error rate: The proportion of visits to the page resulting in errors",
      "Conversion rate: The proportion of users that complete a specified action, such as subscribing to a mailing lis"]
    },
    33: {
      Q:"How can HTML5 web pages be optimized?",
      A:["Compress CPU-intensive assets such as high-resolution images",
      "Bundle code into single files to reduce the number of HTTP requests",
      "Minify code to remove all unnecessary whitespace",
      "Offload operations to the Graphics Processing Unit (GPU)",
      "Use CSS3 for animations and transitions"]
    }
  },

  CSS: {
    1: {
      Q: "What are three possible ways to apply CSS to an Index HTML document?",
      A: ["Inline: Giving style attributes and values directly to HTML elements in the document. Typically, inline styling is to be avoided because it can make it very difficult to debug across multiple device viewports.",

        "Internal: Styling within the <head> of an HTML document and contained within <style> tags. Internal styling is usually used in a component-based architecture, such as React.js, to apply styling to individual components as they’re rendered across the development.",
        
        "Imported: CSS styling imported into an HTML document from an outside `.css` file. This is the most common type of CSS usage in web development projects as it adheres to the “separation of concerns” best practice in which we abstract away potentially confusing coding for the sake of the human developer and not the machine’s computations."]
    },
    2: {
      Q:"How are selectors used?",
      A:"Selectors are used to tell the browser which element to apply certain styles to. Some HTML tags have no styling by default, but many like <h1> tags and list tags do have styling by default. Other elements, however, may get custom ID selectors or query selectors to target in on them and apply specific styling during a project.",
    },
    3: {
      Q:"What is a query selector?",
      A:"A query selector, like an id selector, is used to isolate a specific element within an HTML index by using a `querySelector()` method to return the very first element found. Unlike an id selector, you can also use the `querySelectorAll()` method to find all elements with that query and order them as an array.",
    },
    4: {
      Q:"What is the CSS “ruleset” for isolating elements and giving them attributes?",
      A:"The entire set of rules that govern applying CSS to an HTML document. These include knowledge of selector, pseudo-class, pseudo-element, declaration block, declaration, attributes, values, and keywords used in modern web development front-end styling. ",
    },
    5: {
      Q:"What are pseudo elements and can you name any?",
      A:"Pseudo elements are keywords added to a selector that lets you style a specific part of the selected element. Some examples are ` ::after` and `::before`.",
    },
    6: {
      Q:"Explain the difference between margin and padding.",
      A:"Margin is the space outside the border, and padding is the space between the element and the border. We can think of the HTML element as a picture on the wall with its own height and width. In that case, then the padding would be the amount of space between the edge of the picture and the edge of the picture frame. More, in that case, the margin could be thought of as the amount of space between the pictures.",
    },
    7: {
      Q:"How do we use the box model with CSS?",
      A:"Each element is given a size, padding, and margin — sometimes border — for spacing around the layout design. The goal is to design elements to behave like blocks that will break off into new lines, extend in the inline direction, maintain relative height/width, and other elements will remain at a distance.",
    },
    8: {
      Q:"What is the difference between position: absolute and position: relative?",
      A:"Absolute places an element relative in a position and will change all of the elements around it. Relative position will place an element into a position without changing the elements around it.",
    },
    9: {
      Q:"How are colors defined as values?",
      A:"CSS has a number of case-sensitive color names that can be given as values, such as “dodgerblue” and “rebeccapurple”. RGB, HEX, HSL, RGBA, and HSLA values are also acceptable when defining a color.",
    },
    10: {
      Q:"Which attribute is used to style borders and what values can it be given?",
      A:"The `Border-style` attribute allows developers to define the type of border on all four sides of an HTML element. Those styles include dotted, dashed, solid, and others.",
    },
    11: {
      Q:"What is the overflow attribute and what are some possible values?",
      A:"The overflow attribute defines what happens to content that doesn’t fit cleanly in the browser upon loading. Specifies whether to clip content or not by using values like “scroll” to add a scroll bar with access to the whole page or “hidden” to cut off any remainder on the rendering.",
    },
    12: {
      Q:"Why use a box shadow effect?",
      A:"The box shadow effect will give a 3D appearance, as if the element is floating off the page by presenting a shadow on the bottom and, typically, to the right of the element and no shadow whatsoever across the top and left side of the element. Thus, an effect as though a light is shining on the element from an angle, making it appear to float on the page without the need for any JavaScript or design libraries.",
    },
  },

  Javascript: {
    1: {
      Q: "What is a prototype chain",
      A: ["Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.",

      "The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas prototype on constructors function is available through Object.prototype."]
    },
    2: {
      Q: "What is call() method",
      A: "The call() method invokes a function with a given this value and arguments provided one by one"
    },
    3: {
      Q: "How do you compare Object and Map",
      A: ["The keys of an Object can be Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.",
      "The keys in a Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in the order of insertion.",
      "You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.",
      "A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.",
      "An Object has a prototype, so there are default keys in an object that could collide with your keys if you're not careful. As of ES5 this can be bypassed by creating an object(which can be called a map) using Object.create(null), but this practice is seldom done.",
      "A Map may perform better in scenarios involving frequent addition and removal of key pairs"]
    },
    4: {
      Q: "What are lambda expressions or arrow functions",
      A: "An arrow function is a shorter/concise syntax for a function expression and does not have its own this, arguments, super, or new.target. These functions are best suited for non-method functions, and they cannot be used as constructors."
    },
    5: {
      Q: "What is a higher order function",
      A:"A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both."
    },
    6: {
      Q: "What is the currying function",
      A:"Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, an n-ary function turns into a unary function."
    },
    7: {
      Q: "What is a pure function",
      A:"A Pure function is a function where the return value is only determined by its arguments without any side effects. i.e, If you call a function with the same arguments 'n' number of times and 'n' number of places in the application then it will always return the same value."
    },
    8: {
      Q: "What is the purpose of the let keyword",
      A:"The let statement declares a block scope local variable. Hence the variables defined with let keyword are limited in scope to the block, statement, or expression on which it is used. Whereas variables declared with the var keyword used to define a variable globally, or locally to an entire function regardless of block scope."
    },
    9: {
      Q: "What is the reason to choose the name let as a keyword",
      A:"let is a mathematical statement that was adopted by early programming languages like Scheme and Basic. It has been borrowed from dozens of other languages that use let already as a traditional keyword as close to var as possible."
    },
    10: {
      Q: "What is the Temporal Dead Zone",
      A:"The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone."
    },
    11: {
      Q: "What is memoization",
      A:"Memoization is a functional programming technique which attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache. Let's take an example of adding function with memoization,"
    },
    12: {
      Q: "What is Hoisting",
      A:"Hoisting is a JavaScript mechanism where variables, function declarations and classes are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations, not initialisation. Let's take a simple example of variable hoisting,"
    },
    13: {
      Q: "What are closures",
      A:["A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables. The closure has three scope chains", "Own scope where variables defined between its curly brackets","Outer function’s variables", "Global variables"]
    },
    14: {
      Q: "Why do you need a Cookie",
      A:["Cookies are used to remember information about the user profile(such as username). It basically involves two steps",

"When a user visits a web page, the user profile can be stored in a cookie.",
"Next time the user visits the page, the cookie remembers the user profile"]
    },
    15: {
      Q: "What is a promise",
      A:"A promise is an object that may produce a single value some time in the future with either a resolved value or a reason that it’s not resolved(for example, network error). It will be in one of the 3 possible states: fulfilled, rejected, or pending."
    },
    16: {
      Q: "What are the three states of promise",
      A:["Pending: This is an initial state of the Promise before an operation begins",
      "Fulfilled: This state indicates that the specified operation was completed.",
      "Rejected: This state indicates that the operation did not complete. In this case an error value will be thrown."]
    },
    17: {
      Q: "Why do we need callbacks",
      A:"The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events. Let's take an example with the first function invoking an API call(simulated by setTimeout) and the next function which logs the message."
    },
    18: {
      Q: "What are server-sent events",
      A:"Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc."
    },
    19: {
      Q: "What are the main rules of promise",
      A:["A promise is an object that supplies a standard-compliant .then() method",
      "A pending promise may transition into either fulfilled or rejected state",
      "A fulfilled or rejected promise is settled and it must not transition into any other state.",
      "Once a promise is settled, the value must not change."]
    },
    20: {
      Q: "What is promise chaining",
      A:"The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining. Let's take an example of promise chaining for calculating the final result,"
    },
    21: {
      Q: "What is the purpose of the race method in promise",
      A:"romise.race() method will return the promise instance which is firstly resolved or rejected. Let's take an example of race() method where promise2 is resolved first"
    },
22: {
  Q: "What is the difference between native, host and user objects",
  A: "Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec. Host objects are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects. User objects are objects defined in the javascript code. For example, User objects created for profile information."
},
23 :{
  Q: "What is the use of preventDefault method",
  A:"The preventDefault() method cancels the event if it is cancelable, meaning that the default action or behaviour that belongs to the event will not occur. For example, prevent form submission when clicking on submit button and prevent opening the page URL when clicking on hyperlink are some common use cases."
},
24: {
  Q: "What is the use of stopPropagation method",
  A:"The stopPropagation method is used to stop the event from bubbling up the event chain"
},
25: {
  Q: "Why is JavaScript treated as Single threaded",
  A: "JavaScript is a single-threaded language. Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it in parallel in multiple threads or processes"
},
26 : {
  Q: "What is a polyfill",
  A: "A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7."
},
27: {
  Q: "What is the difference between proto and prototype",
  A: "The __proto__ object is the actual object that is used in the lookup chain to resolve methods, etc. Whereas prototype is the object that is used to build __proto__ when you create an object with new."
},
28: {
  Q: "What is a WeakSet",
  A: "WeakSet is used to store a collection of weakly(weak references) held objects. The syntax would be as follows,"
},
29: {
  Q: "What are the differences between WeakSet and Set",
  A: ["The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. i.e, An object in WeakSet can be garbage collected if there is no other reference to it. Other differences are",

  "Sets can store any value Whereas WeakSets can store only collections of objects",
  "WeakSet does not have size property unlike Set",
  "WeakSet does not have methods such as clear, keys, values, entries, forEach.",
  "WeakSet is not iterable.",
  ]
},
30: {
  Q:"What is a WeakMap",
  A: "The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. In this case, keys must be objects and the values can be arbitrary values."
},
31: {
  Q: "What are the differences between WeakMap and Map",
  A: ["The main difference is that references to key objects in Map are strong while references to key objects in WeakMap are weak. i.e, A key object in WeakMap can be garbage collected if there is no other reference to it. Other differences are,",

    "Maps can store any key type Whereas WeakMaps can store only collections of key objects",
    "WeakMap does not have size property unlike Map",
    "WeakMap does not have methods such as clear, keys, values, entries, forEach.",
    "WeakMap is not iterable."]
},
32: {
  Q: "What is an event loop",
  A:"The event loop is a process that continuously monitors both the call stack and the event queue and checks whether or not the call stack is empty. If the call stack is empty and there are pending events in the event queue, the event loop dequeues the event from the event queue and pushes it to the call stack. The call stack executes the event, and any additional events generated during the execution are added to the end of the event queue."
},
33: {
  Q: "What is call stack",
  A: ["Call Stack is a data structure for javascript interpreters to keep track of function calls(creates execution context) in the program. It has two major actions,",

    "Whenever you call a function for its execution, you are pushing it to the stack.",
    "Whenever the execution is completed, the function is popped out of the stack."]
},
34: {
  Q: "What is an event queue",
  A: ["The event queue follows the queue data structure. It stores async callbacks to be added to the call stack. It is also known as the Callback Queue or Macrotask Queue.",

    "Whenever the call stack receives an async function, it is moved into the Web API. Based on the function, Web API executes it and awaits the result. Once it is finished, it moves the callback into the event queue (the callback of the promise is moved into the microtask queue).",
    
    "The event loop constantly checks whether or not the call stack is empty. Once the call stack is empty and there is a callback in the event queue, the event loop moves the callback into the call stack. But if there is a callback in the microtask queue as well, it is moved first. The microtask queue has a higher priority than the event queue."]
},
35: {
  Q: "List down some of the features of ES6",
  A: ["Support for constants or immutable variables",
  "Block-scope support for variables, constants and functions",
  "Arrow functions",
  "Default parameters",
  "Rest and Spread Parameters",
  "Template Literals",
  "Multi-line Strings",
  "Destructuring Assignment",
  "Enhanced Object Literals",
  "Promises",
  "Classes",
  "Modules"]
}
  }
};

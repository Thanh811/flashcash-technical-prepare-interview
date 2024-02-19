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

  CSS: {},
};

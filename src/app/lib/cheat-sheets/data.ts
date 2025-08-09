export type CheatSheetItem = {
  id: string;
  name: string;
  description: string;
  snippet: string;
  category: string;
};

export const htmlTags: CheatSheetItem[] = [
  // Document structure
  {
    id: 'doctype',
    name: '<!DOCTYPE html>',
    description: 'Document type declaration. Must be the first thing in your HTML document.',
    snippet: '<!DOCTYPE html>',
    category: 'Document'
  },
  {
    id: 'html',
    name: '<html>',
    description: 'The root element of an HTML document. All other elements must be descendants of this element.',
    snippet: '<html lang="en">\n  <head>...</head>\n  <body>...</body>\n</html>',
    category: 'Document'
  },
  {
    id: 'head',
    name: '<head>',
    description: 'Contains machine-readable information (metadata) about the document, like its title, scripts, and style sheets.',
    snippet: '<head>\n  <title>Page Title</title>\n  <meta charset="UTF-8">\n</head>',
    category: 'Document'
  },
  {
    id: 'title',
    name: '<title>',
    description: 'Defines the document\'s title that is shown in a browser\'s title bar or a page\'s tab.',
    snippet: '<title>My Page Title</title>',
    category: 'Document'
  },
  {
    id: 'body',
    name: '<body>',
    description: 'Represents the content of an HTML document. There can be only one <body> element in a document.',
    snippet: '<body>\n  <h1>My Heading</h1>\n  <p>My paragraph.</p>\n</body>',
    category: 'Document'
  },
  
  // Metadata
  {
    id: 'meta',
    name: '<meta>',
    description: 'Represents metadata that cannot be represented by other HTML meta-related elements.',
    snippet: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">',
    category: 'Metadata'
  },
  {
    id: 'link',
    name: '<link>',
    description: 'Specifies relationships between the current document and an external resource (most used to link to style sheets).',
    snippet: '<link rel="stylesheet" href="styles.css">',
    category: 'Metadata'
  },
  {
    id: 'style',
    name: '<style>',
    description: 'Contains style information for a document or part of a document.',
    snippet: '<style>\n  body { font-family: Arial; }\n</style>',
    category: 'Metadata'
  },
  {
    id: 'script',
    name: '<script>',
    description: 'Used to embed or reference executable code (typically JavaScript).',
    snippet: '<script src="app.js"></script>',
    category: 'Metadata'
  },
  {
    id: 'base',
    name: '<base>',
    description: 'Specifies the base URL to use for all relative URLs in a document.',
    snippet: '<base href="https://example.com/">',
    category: 'Metadata'
  },
  
  // Comments
  {
    id: 'comment',
    name: '<!-- -->',
    description: 'Defines a comment that is not displayed in the browser.',
    snippet: '<!-- This is a comment -->',
    category: 'Document'
  },
  
  // Content sectioning
  {
    id: 'header',
    name: '<header>',
    description: 'Represents introductory content, typically a group of introductory or navigational aids.',
    snippet: '<header>\n  <h1>Website Title</h1>\n  <nav>...</nav>\n</header>',
    category: 'Structure'
  },
  {
    id: 'footer',
    name: '<footer>',
    description: 'Represents a footer for its nearest sectioning content or sectioning root element.',
    snippet: '<footer>\n  <p>© 2023 My Company</p>\n</footer>',
    category: 'Structure'
  },
  {
    id: 'main',
    name: '<main>',
    description: 'Represents the dominant content of the body of a document.',
    snippet: '<main>\n  <h1>Main Content</h1>\n  <p>...</p>\n</main>',
    category: 'Structure'
  },
  {
    id: 'article',
    name: '<article>',
    description: 'Represents a self-contained composition in a document, which is intended to be independently distributable.',
    snippet: '<article>\n  <h2>Article Title</h2>\n  <p>Article content...</p>\n</article>',
    category: 'Structure'
  },
  {
    id: 'section',
    name: '<section>',
    description: 'Represents a standalone section of a document, which doesn\'t have a more specific semantic element to represent it.',
    snippet: '<section>\n  <h2>Section Title</h2>\n  <p>Section content...</p>\n</section>',
    category: 'Structure'
  },
  {
    id: 'aside',
    name: '<aside>',
    description: 'Represents a portion of a document whose content is only indirectly related to the document\'s main content.',
    snippet: '<aside>\n  <h3>Related Links</h3>\n  <ul>...</ul>\n</aside>',
    category: 'Structure'
  },
  {
    id: 'nav',
    name: '<nav>',
    description: 'Represents a section of a page whose purpose is to provide navigation links.',
    snippet: '<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n  </ul>\n</nav>',
    category: 'Structure'
  },
  
  // Text content
  {
    id: 'h1',
    name: '<h1>',
    description: 'Represents a level 1 heading (most important).',
    snippet: '<h1>Main Title</h1>',
    category: 'Text'
  },
  {
    id: 'h2',
    name: '<h2>',
    description: 'Represents a level 2 heading.',
    snippet: '<h2>Subsection Title</h2>',
    category: 'Text'
  },
  {
    id: 'h3',
    name: '<h3>',
    description: 'Represents a level 3 heading.',
    snippet: '<h3>Sub-subsection Title</h3>',
    category: 'Text'
  },
  {
    id: 'h4',
    name: '<h4>',
    description: 'Represents a level 4 heading.',
    snippet: '<h4>Minor Heading</h4>',
    category: 'Text'
  },
  {
    id: 'h5',
    name: '<h5>',
    description: 'Represents a level 5 heading.',
    snippet: '<h5>Small Heading</h5>',
    category: 'Text'
  },
  {
    id: 'h6',
    name: '<h6>',
    description: 'Represents a level 6 heading (least important).',
    snippet: '<h6>Tiny Heading</h6>',
    category: 'Text'
  },
  {
    id: 'p',
    name: '<p>',
    description: 'The Paragraph element. Represents a paragraph of text.',
    snippet: '<p>This is a sample paragraph.</p>',
    category: 'Text',
  },
  {
    id: 'div',
    name: '<div>',
    description: 'The Content Division element. It is a generic container for flow content, which does not inherently represent anything.',
    snippet: '<div>\n  <p>This is a paragraph inside a div.</p>\n</div>',
    category: 'Structure',
  },
  {
    id: 'span',
    name: '<span>',
    description: 'A generic inline container for phrasing content, which does not inherently represent anything.',
    snippet: '<p>This is <span style="color:red">red text</span>.</p>',
    category: 'Text'
  },
  {
    id: 'br',
    name: '<br>',
    description: 'Produces a line break in text (carriage-return).',
    snippet: '<p>First line<br>Second line</p>',
    category: 'Text'
  },
  {
    id: 'hr',
    name: '<hr>',
    description: 'Represents a thematic break between paragraph-level elements.',
    snippet: '<p>First section</p>\n<hr>\n<p>Second section</p>',
    category: 'Text'
  },
  
  // Inline text semantics
  {
    id: 'i',
    name: '<i>',
    description: 'Represents a range of text that is set off from the normal text for some reason (typically displayed in italic).',
    snippet: '<p>The <i>Voyager</i> spacecraft...</p>',
    category: 'Text'
  },
  {
    id: 'b',
    name: '<b>',
    description: 'Used to draw attention to text without indicating higher importance (typically displayed in bold).',
    snippet: '<p>This is <b>important</b> text.</p>',
    category: 'Text'
  },
  {
    id: 'strong',
    name: '<strong>',
    description: 'Indicates that its contents have strong importance, seriousness, or urgency (typically displayed in bold).',
    snippet: '<p><strong>Warning:</strong> This is important.</p>',
    category: 'Text'
  },
  {
    id: 'em',
    name: '<em>',
    description: 'Marks text that has stress emphasis (typically displayed in italic).',
    snippet: '<p>I <em>really</em> mean it.</p>',
    category: 'Text'
  },
  {
    id: 'sub',
    name: '<sub>',
    description: 'Defines subscript text (appears half a character below the normal line).',
    snippet: '<p>H<sub>2</sub>O</p>',
    category: 'Text'
  },
  {
    id: 'sup',
    name: '<sup>',
    description: 'Defines superscript text (appears half a character above the normal line).',
    snippet: '<p>E=mc<sup>2</sup></p>',
    category: 'Text'
  },
  {
    id: 'small',
    name: '<small>',
    description: 'Represents side-comments and small print (typically displayed in smaller text).',
    snippet: '<p><small>© 2023 My Company</small></p>',
    category: 'Text'
  },
  {
    id: 'del',
    name: '<del>',
    description: 'Represents a range of text that has been deleted from a document.',
    snippet: '<p>Price: <del>$100</del> $80</p>',
    category: 'Text'
  },
  {
    id: 'ins',
    name: '<ins>',
    description: 'Represents a range of text that has been added to a document.',
    snippet: '<p>My favorite color is <del>blue</del> <ins>red</ins>.</p>',
    category: 'Text'
  },
  {
    id: 'blockquote',
    name: '<blockquote>',
    description: 'Indicates that the enclosed text is an extended quotation.',
    snippet: '<blockquote cite="source.html">\n  <p>This is a long quotation.</p>\n</blockquote>',
    category: 'Text'
  },
  {
    id: 'q',
    name: '<q>',
    description: 'Indicates that the enclosed text is a short inline quotation.',
    snippet: '<p>She said <q>Hello world!</q></p>',
    category: 'Text'
  },
  {
    id: 'cite',
    name: '<cite>',
    description: 'Used to mark up the title of a cited creative work.',
    snippet: '<p><cite>The Mona Lisa</cite> by Leonardo da Vinci</p>',
    category: 'Text'
  },
  {
    id: 'address',
    name: '<address>',
    description: 'Indicates that the enclosed HTML provides contact information.',
    snippet: '<address>\n  Contact <a href="mailto:me@example.com">me</a>\n</address>',
    category: 'Text'
  },
  {
    id: 'abbr',
    name: '<abbr>',
    description: 'Represents an abbreviation or acronym.',
    snippet: '<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>',
    category: 'Text'
  },
  {
    id: 'code',
    name: '<code>',
    description: 'Displays its contents styled in a fashion intended to indicate computer code.',
    snippet: '<p>Use <code>console.log()</code> to print messages.</p>',
    category: 'Text'
  },
  {
    id: 'mark',
    name: '<mark>',
    description: 'Represents text which is marked or highlighted for reference or notation purposes.',
    snippet: '<p>Search results for <mark>HTML</mark></p>',
    category: 'Text'
  },
  {
    id: 'time',
    name: '<time>',
    description: 'Represents a specific period in time.',
    snippet: '<p>The event is on <time datetime="2023-12-25">Christmas</time>.</p>',
    category: 'Text'
  },
  
  // Links
  {
    id: 'a',
    name: '<a>',
    description: 'The Anchor element. Creates a hyperlink to other web pages, files, locations within the same page, email addresses, or any other URL.',
    snippet: '<a href="https://example.com">Visit Example</a>',
    category: 'Text',
  },
  
  // Images and multimedia
  {
    id: 'img',
    name: '<img>',
    description: 'The Image Embed element. Embeds an image into the document.',
    snippet: '<img src="https://placehold.co/200x100.png" alt="Placeholder image" data-ai-hint="abstract image">',
    category: 'Media',
  },
  {
    id: 'figure',
    name: '<figure>',
    description: 'Represents self-contained content, potentially with an optional caption.',
    snippet: '<figure>\n  <img src="image.jpg" alt="Description">\n  <figcaption>Caption for the image</figcaption>\n</figure>',
    category: 'Media'
  },
  {
    id: 'figcaption',
    name: '<figcaption>',
    description: 'Represents a caption or legend describing the rest of the contents of its parent <figure> element.',
    snippet: '<figure>\n  <img src="image.jpg">\n  <figcaption>Image caption</figcaption>\n</figure>',
    category: 'Media'
  },
  {
    id: 'audio',
    name: '<audio>',
    description: 'Used to embed sound content in documents.',
    snippet: '<audio controls>\n  <source src="audio.mp3" type="audio/mpeg">\n  Your browser does not support the audio element.\n</audio>',
    category: 'Media'
  },
  {
    id: 'video',
    name: '<video>',
    description: 'Embeds a media player which supports video playback into the document.',
    snippet: '<video controls width="250">\n  <source src="video.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>',
    category: 'Media'
  },
  
  // Lists
  {
    id: 'ul',
    name: '<ul>',
    description: 'The Unordered List element. Represents an unordered list of items, typically rendered as a bulleted list.',
    snippet: '<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>',
    category: 'Lists',
  },
  {
    id: 'ol',
    name: '<ol>',
    description: 'The Ordered List element. Represents an ordered list of items, typically rendered as a numbered list.',
    snippet: '<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>',
    category: 'Lists'
  },
  {
    id: 'li',
    name: '<li>',
    description: 'The List Item element. Used to represent an item in a list.',
    snippet: '<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n</ul>',
    category: 'Lists'
  },
  
  // Forms
  {
    id: 'form',
    name: '<form>',
    description: 'Represents a document section containing interactive controls for submitting information.',
    snippet: '<form action="/submit" method="post">\n  <input type="text" name="username">\n  <button type="submit">Submit</button>\n</form>',
    category: 'Forms'
  },
  {
    id: 'input',
    name: '<input>',
    description: 'Used to create interactive controls for web-based forms.',
    snippet: '<input type="text" name="username" placeholder="Enter your name">',
    category: 'Forms'
  },
  {
    id: 'textarea',
    name: '<textarea>',
    description: 'Represents a multi-line plain-text editing control.',
    snippet: '<textarea name="comment" rows="4" cols="50">Enter text here...</textarea>',
    category: 'Forms'
  },
  {
    id: 'select',
    name: '<select>',
    description: 'Represents a control that provides a menu of options.',
    snippet: '<select name="cars">\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>',
    category: 'Forms'
  },
  {
    id: 'option',
    name: '<option>',
    description: 'Used to define an item contained in a <select>, <optgroup>, or <datalist> element.',
    snippet: '<select>\n  <option value="1">Option 1</option>\n  <option value="2">Option 2</option>\n</select>',
    category: 'Forms'
  },
  {
    id: 'label',
    name: '<label>',
    description: 'Represents a caption for an item in a user interface.',
    snippet: '<label for="username">Username:</label>\n<input type="text" id="username" name="username">',
    category: 'Forms'
  },
  {
    id: 'button',
    name: '<button>',
    description: 'The Button element. An interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology.',
    snippet: '<button>Click Me</button>',
    category: 'Forms'
  },
  
  // Tables
  {
    id: 'table',
    name: '<table>',
    description: 'Represents tabular data — that is, information presented in a two-dimensional table.',
    snippet: '<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n</table>',
    category: 'Tables'
  },
  {
    id: 'thead',
    name: '<thead>',
    description: 'Defines a set of rows defining the head of the columns of the table.',
    snippet: '<table>\n  <thead>\n    <tr><th>Header 1</th></tr>\n  </thead>\n  <tbody>...</tbody>\n</table>',
    category: 'Tables'
  },
  {
    id: 'tbody',
    name: '<tbody>',
    description: 'Encapsulates a set of table rows, indicating that they comprise the body of the table.',
    snippet: '<table>\n  <thead>...</thead>\n  <tbody>\n    <tr><td>Data</td></tr>\n  </tbody>\n</table>',
    category: 'Tables'
  },
  {
    id: 'tfoot',
    name: '<tfoot>',
    description: 'Defines a set of rows summarizing the columns of the table.',
    snippet: '<table>\n  <thead>...</thead>\n  <tbody>...</tbody>\n  <tfoot>\n    <tr><td>Total</td></tr>\n  </tfoot>\n</table>',
    category: 'Tables'
  },
  {
    id: 'tr',
    name: '<tr>',
    description: 'Defines a row of cells in a table.',
    snippet: '<table>\n  <tr>\n    <td>Cell 1</td>\n    <td>Cell 2</td>\n  </tr>\n</table>',
    category: 'Tables'
  },
  {
    id: 'td',
    name: '<td>',
    description: 'Defines a cell of a table that contains data.',
    snippet: '<table>\n  <tr>\n    <td>Data cell</td>\n  </tr>\n</table>',
    category: 'Tables'
  },
  {
    id: 'th',
    name: '<th>',
    description: 'Defines a cell as a header of a group of table cells.',
    snippet: '<table>\n  <tr>\n    <th>Header cell</th>\n  </tr>\n</table>',
    category: 'Tables'
  },
  
  // Interactive elements
  {
    id: 'details',
    name: '<details>',
    description: 'Creates a disclosure widget in which information is visible only when the widget is toggled into an "open" state.',
    snippet: '<details>\n  <summary>More info</summary>\n  <p>Details content goes here.</p>\n</details>',
    category: 'Interactive'
  },
  {
    id: 'dialog',
    name: '<dialog>',
    description: 'Represents a dialog box or other interactive component.',
    snippet: '<dialog open>\n  <p>Dialog content</p>\n</dialog>',
    category: 'Interactive'
  },
  {
    id: 'meter',
    name: '<meter>',
    description: 'Represents either a scalar value within a known range or a fractional value.',
    snippet: '<meter value="0.6">60%</meter>',
    category: 'Interactive'
  },
  {
    id: 'progress',
    name: '<progress>',
    description: 'Displays an indicator showing the completion progress of a task.',
    snippet: '<progress value="70" max="100">70%</progress>',
    category: 'Interactive'
  },
  
  // Embedded content
  {
    id: 'map',
    name: '<map>',
    description: 'Used with <area> elements to define an image map (a clickable link area).',
    snippet: '<map name="workmap">\n  <area shape="rect" coords="0,0,100,100" href="page.html">\n</map>',
    category: 'Media'
  },
  {
    id: 'area',
    name: '<area>',
    description: 'Defines a hot-spot region on an image, and optionally associates it with a hypertext link.',
    snippet: '<map name="workmap">\n  <area shape="rect" coords="0,0,100,100" href="page.html">\n</map>',
    category: 'Media'
  }
];

export const cssProperties: CheatSheetItem[] = [
  // Background
  {
    id: 'background-color',
    name: 'background-color',
    description: 'Sets the background color of an element.',
    snippet: 'background-color: #29ABE2;',
    category: 'Background',
  },
  {
    id: 'background-image',
    name: 'background-image',
    description: 'Sets one or more background images on an element.',
    snippet: 'background-image: url("image.jpg");',
    category: 'Background'
  },
  {
    id: 'background-size',
    name: 'background-size',
    description: 'Specifies the size of the element\'s background image.',
    snippet: 'background-size: cover; /* or contain */',
    category: 'Background'
  },
  {
    id: 'background-position',
    name: 'background-position',
    description: 'Sets the initial position for each background image.',
    snippet: 'background-position: center center;',
    category: 'Background'
  },
  {
    id: 'background-repeat',
    name: 'background-repeat',
    description: 'Sets how background images are repeated.',
    snippet: 'background-repeat: no-repeat;',
    category: 'Background'
  },
  {
    id: 'background-blend-mode',
    name: 'background-blend-mode',
    description: 'Sets how an element\'s background images should blend with each other and with the element\'s background color.',
    snippet: 'background-blend-mode: multiply;',
    category: 'Background'
  },

  // Layout
  {
    id: 'display-flex',
    name: 'display: flex',
    description: 'Enables a flex container, which provides a more efficient way to lay out, align and distribute space among items in a container.',
    snippet: 'display: flex;\njustify-content: space-between;\nalign-items: center;',
    category: 'Layout',
  },
  {
    id: 'display-grid',
    name: 'display: grid',
    description: 'Enables a grid container, allowing you to create two-dimensional layouts.',
    snippet: 'display: grid;\ngrid-template-columns: repeat(3, 1fr);\ngap: 1rem;',
    category: 'Layout'
  },
  {
    id: 'position',
    name: 'position',
    description: 'Specifies how an element is positioned in a document.',
    snippet: 'position: relative;\ntop: 10px;\nleft: 20px;',
    category: 'Layout'
  },
  {
    id: 'float',
    name: 'float',
    description: 'Places an element on the left or right side of its container, allowing text and inline elements to wrap around it.',
    snippet: 'float: left;\nmargin-right: 1rem;',
    category: 'Layout'
  },
  {
    id: 'z-index',
    name: 'z-index',
    description: 'Sets the z-order of a positioned element and its descendants or flex items.',
    snippet: 'z-index: 10;',
    category: 'Layout'
  },

  // Box Model
  {
    id: 'border-radius',
    name: 'border-radius',
    description: 'Rounds the corners of an element\'s outer border edge.',
    snippet: 'border-radius: 0.5rem;',
    category: 'Box Model',
  },
  {
    id: 'margin',
    name: 'margin',
    description: 'Sets the margin area on all four sides of an element.',
    snippet: 'margin: 1rem;\n/* or */\nmargin: 1rem 0.5rem 1rem 0.5rem;',
    category: 'Box Model'
  },
  {
    id: 'padding',
    name: 'padding',
    description: 'Sets the padding area on all four sides of an element.',
    snippet: 'padding: 1rem;\n/* or */\npadding: 1rem 0.5rem 1rem 0.5rem;',
    category: 'Box Model'
  },
  {
    id: 'border',
    name: 'border',
    description: 'Sets an element\'s border with width, style, and color.',
    snippet: 'border: 1px solid #000;',
    category: 'Box Model'
  },
  {
    id: 'box-sizing',
    name: 'box-sizing',
    description: 'Defines how the width and height of an element are calculated (whether they include padding and borders or not).',
    snippet: 'box-sizing: border-box;',
    category: 'Box Model'
  },

  // Effects
  {
    id: 'box-shadow',
    name: 'box-shadow',
    description: 'Adds shadow effects around an element\'s frame.',
    snippet: 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);',
    category: 'Effects',
  },
  {
    id: 'transform',
    name: 'transform',
    description: 'Lets you rotate, scale, skew, or translate an element.',
    snippet: 'transform: rotate(45deg) scale(1.1);',
    category: 'Effects',
  },
  {
    id: 'transition',
    name: 'transition',
    description: 'Enables smooth transitions between values of CSS properties.',
    snippet: 'transition: all 0.3s ease-in-out;',
    category: 'Effects'
  },
  {
    id: 'opacity',
    name: 'opacity',
    description: 'Sets the transparency of an element.',
    snippet: 'opacity: 0.8;',
    category: 'Effects'
  },
  {
    id: 'filter',
    name: 'filter',
    description: 'Applies graphical effects like blur or color shift to an element.',
    snippet: 'filter: blur(2px) brightness(1.2);',
    category: 'Effects'
  },

  // Typography
  {
    id: 'font-family',
    name: 'font-family',
    description: 'Specifies a prioritized list of font family names or generic family names.',
    snippet: 'font-family: "Helvetica Neue", Arial, sans-serif;',
    category: 'Typography'
  },
  {
    id: 'font-size',
    name: 'font-size',
    description: 'Sets the size of the font.',
    snippet: 'font-size: 1rem; /* or */\nfont-size: 16px;',
    category: 'Typography'
  },
  {
    id: 'font-weight',
    name: 'font-weight',
    description: 'Sets the weight (or boldness) of the font.',
    snippet: 'font-weight: 700; /* or bold */',
    category: 'Typography'
  },
  {
    id: 'color',
    name: 'color',
    description: 'Sets the color of an element\'s text.',
    snippet: 'color: #333;',
    category: 'Typography'
  },
  {
    id: 'text-align',
    name: 'text-align',
    description: 'Sets the horizontal alignment of inline content.',
    snippet: 'text-align: center;',
    category: 'Typography'
  },
  {
    id: 'line-height',
    name: 'line-height',
    description: 'Sets the height of a line box, often used to set text leading.',
    snippet: 'line-height: 1.5;',
    category: 'Typography'
  },
  {
    id: 'letter-spacing',
    name: 'letter-spacing',
    description: 'Sets the spacing behavior between text characters.',
    snippet: 'letter-spacing: 0.1em;',
    category: 'Typography'
  },
  {
    id: 'text-decoration',
    name: 'text-decoration',
    description: 'Sets the appearance of decorative lines on text.',
    snippet: 'text-decoration: underline wavy red;',
    category: 'Typography'
  },
  {
    id: 'text-shadow',
    name: 'text-shadow',
    description: 'Adds shadows to text.',
    snippet: 'text-shadow: 1px 1px 2px black;',
    category: 'Typography'
  },

  // Flexbox
  {
    id: 'flex-direction',
    name: 'flex-direction',
    description: 'Specifies how flex items are placed in the flex container.',
    snippet: 'flex-direction: row; /* or column, row-reverse, column-reverse */',
    category: 'Flexbox'
  },
  {
    id: 'flex-wrap',
    name: 'flex-wrap',
    description: 'Specifies whether flex items are forced onto one line or can wrap onto multiple lines.',
    snippet: 'flex-wrap: wrap;',
    category: 'Flexbox'
  },
  {
    id: 'justify-content',
    name: 'justify-content',
    description: 'Defines how the browser distributes space between and around content items along the main axis.',
    snippet: 'justify-content: center;',
    category: 'Flexbox'
  },
  {
    id: 'align-items',
    name: 'align-items',
    description: 'Sets the align-self value on all direct children as a group in the cross-axis.',
    snippet: 'align-items: center;',
    category: 'Flexbox'
  },
  {
    id: 'align-content',
    name: 'align-content',
    description: 'Sets the distribution of space between and around content items along the cross-axis.',
    snippet: 'align-content: space-between;',
    category: 'Flexbox'
  },
  {
    id: 'gap',
    name: 'gap',
    description: 'Sets the gaps (gutters) between rows and columns in flex, grid, and multi-column layouts.',
    snippet: 'gap: 1rem;',
    category: 'Flexbox'
  },

  // Grid
  {
    id: 'grid-template-columns',
    name: 'grid-template-columns',
    description: 'Defines the line names and track sizing functions of the grid columns.',
    snippet: 'grid-template-columns: 1fr 1fr 1fr;',
    category: 'Grid'
  },
  {
    id: 'grid-template-rows',
    name: 'grid-template-rows',
    description: 'Defines the line names and track sizing functions of the grid rows.',
    snippet: 'grid-template-rows: auto 1fr auto;',
    category: 'Grid'
  },
  {
    id: 'grid-column',
    name: 'grid-column',
    description: 'Specifies a grid item\'s size and location within the grid column.',
    snippet: 'grid-column: 1 / 3;',
    category: 'Grid'
  },
  {
    id: 'grid-row',
    name: 'grid-row',
    description: 'Specifies a grid item\'s size and location within the grid row.',
    snippet: 'grid-row: 1 / span 2;',
    category: 'Grid'
  },
  {
    id: 'grid-area',
    name: 'grid-area',
    description: 'Specifies a grid item\'s size and location within the grid.',
    snippet: 'grid-area: 1 / 1 / 3 / 3;',
    category: 'Grid'
  },

  // Animation
  {
    id: 'animation',
    name: 'animation',
    description: 'Applies an animation between styles.',
    snippet: 'animation: slidein 3s ease-in 1s infinite reverse both running;',
    category: 'Animation'
  },
  {
    id: '@keyframes',
    name: '@keyframes',
    description: 'Defines the sequence of animation steps.',
    snippet: '@keyframes slidein {\n  from { transform: translateX(0%); }\n  to { transform: translateX(100%); }\n}',
    category: 'Animation'
  },
  {
    id: 'animation-delay',
    name: 'animation-delay',
    description: 'Sets when an animation starts.',
    snippet: 'animation-delay: 1s;',
    category: 'Animation'
  },
  {
    id: 'animation-fill-mode',
    name: 'animation-fill-mode',
    description: 'Specifies how a CSS animation applies styles to its target before and after execution.',
    snippet: 'animation-fill-mode: forwards;',
    category: 'Animation'
  },

  // Other
  {
    id: 'cursor',
    name: 'cursor',
    description: 'Specifies the mouse cursor to be displayed when pointing over an element.',
    snippet: 'cursor: pointer;',
    category: 'Other'
  },
  {
    id: 'overflow',
    name: 'overflow',
    description: 'Specifies what to do when an element\'s content is too big to fit in its block formatting context.',
    snippet: 'overflow: hidden; /* or auto, scroll */',
    category: 'Other'
  },
  {
    id: 'visibility',
    name: 'visibility',
    description: 'Shows or hides an element without changing the layout.',
    snippet: 'visibility: hidden;',
    category: 'Other'
  },
  {
    id: 'clip-path',
    name: 'clip-path',
    description: 'Creates a clipping region that defines what part of an element should be displayed.',
    snippet: 'clip-path: circle(50%);',
    category: 'Other'
  }
];

export const tailwindClasses: CheatSheetItem[] = [
  // Layout
  {
    id: 'container',
    name: 'container',
    description: 'Sets the max-width of an element to match the min-width of the current breakpoint.',
    snippet: '<div class="container mx-auto">...</div>',
    category: 'Layout'
  },
  {
    id: 'block',
    name: 'block',
    description: 'Sets display: block on an element.',
    snippet: '<div class="block">...</div>',
    category: 'Layout'
  },
  {
    id: 'hidden',
    name: 'hidden',
    description: 'Sets display: none on an element.',
    snippet: '<div class="hidden md:block">Responsive content</div>',
    category: 'Layout'
  },

  // Flexbox
  {
    id: 'flex',
    name: 'flex',
    description: 'A utility for creating a flex container. Equivalent to `display: flex;`',
    snippet: '<div class="flex items-center justify-center">...</div>',
    category: 'Flexbox',
  },
  {
    id: 'flex-col',
    name: 'flex-col',
    description: 'Sets flex-direction: column on a flex container.',
    snippet: '<div class="flex flex-col">...</div>',
    category: 'Flexbox'
  },
  {
    id: 'items-center',
    name: 'items-center',
    description: 'Aligns flex items along the cross axis (align-items: center).',
    snippet: '<div class="flex items-center">...</div>',
    category: 'Flexbox'
  },
  {
    id: 'justify-between',
    name: 'justify-between',
    description: 'Distributes space between flex items (justify-content: space-between).',
    snippet: '<div class="flex justify-between">...</div>',
    category: 'Flexbox'
  },
  {
    id: 'gap-4',
    name: 'gap-4',
    description: 'Sets the gap between grid or flex items (gap: 1rem).',
    snippet: '<div class="flex gap-4">...</div>',
    category: 'Flexbox'
  },

  // Grid
  {
    id: 'grid',
    name: 'grid',
    description: 'Sets display: grid on an element.',
    snippet: '<div class="grid grid-cols-3 gap-4">...</div>',
    category: 'Grid'
  },
  {
    id: 'grid-cols-3',
    name: 'grid-cols-3',
    description: 'Creates a grid with 3 columns (grid-template-columns: repeat(3, minmax(0, 1fr)).',
    snippet: '<div class="grid grid-cols-3">...</div>',
    category: 'Grid'
  },
  {
    id: 'col-span-2',
    name: 'col-span-2',
    description: 'Makes an element span 2 columns (grid-column: span 2 / span 2).',
    snippet: '<div class="col-span-2">...</div>',
    category: 'Grid'
  },

  // Spacing
  {
    id: 'p-4',
    name: 'p-4',
    description: 'A utility for applying padding. `p-4` sets `padding: 1rem;`',
    snippet: '<div class="p-4 bg-primary/10 rounded-lg">...</div>',
    category: 'Spacing',
  },
  {
    id: 'm-4',
    name: 'm-4',
    description: 'Applies margin to all sides (margin: 1rem).',
    snippet: '<div class="m-4">...</div>',
    category: 'Spacing'
  },
  {
    id: 'mx-auto',
    name: 'mx-auto',
    description: 'Centers an element horizontally by setting equal left/right margins.',
    snippet: '<div class="mx-auto w-1/2">Centered</div>',
    category: 'Spacing'
  },
  {
    id: 'space-x-4',
    name: 'space-x-4',
    description: 'Adds horizontal space between child elements (margin-left: 1rem on all but first child).',
    snippet: '<div class="flex space-x-4">...</div>',
    category: 'Spacing'
  },

  // Typography
  {
    id: 'text-primary',
    name: 'text-primary',
    description: 'A utility for setting the text color. Uses the primary color from the theme.',
    snippet: '<p class="text-primary font-bold">Important message</p>',
    category: 'Typography',
  },
  {
    id: 'text-xl',
    name: 'text-xl',
    description: 'Sets font-size to extra-large (1.25rem).',
    snippet: '<h2 class="text-xl">Heading</h2>',
    category: 'Typography'
  },
  {
    id: 'font-bold',
    name: 'font-bold',
    description: 'Sets font-weight to bold (700).',
    snippet: '<p class="font-bold">Bold text</p>',
    category: 'Typography'
  },
  {
    id: 'text-center',
    name: 'text-center',
    description: 'Aligns text to the center (text-align: center).',
    snippet: '<p class="text-center">Centered text</p>',
    category: 'Typography'
  },
  {
    id: 'leading-normal',
    name: 'leading-normal',
    description: 'Sets line-height to normal (1.5).',
    snippet: '<p class="leading-normal">Text with normal line height</p>',
    category: 'Typography'
  },

  // Backgrounds
  {
    id: 'bg-background',
    name: 'bg-background',
    description: 'A utility for setting the background color. Uses the background color from the theme.',
    snippet: '<div class="bg-background p-4">...</div>',
    category: 'Backgrounds',
  },
  {
    id: 'bg-gradient-to-r',
    name: 'bg-gradient-to-r',
    description: 'Creates a linear gradient from left to right.',
    snippet: '<div class="bg-gradient-to-r from-blue-500 to-purple-500">...</div>',
    category: 'Backgrounds'
  },
  {
    id: 'bg-opacity-50',
    name: 'bg-opacity-50',
    description: 'Sets the opacity of the background color (50%).',
    snippet: '<div class="bg-blue-500 bg-opacity-50">...</div>',
    category: 'Backgrounds'
  },

  // Borders
  {
    id: 'rounded-lg',
    name: 'rounded-lg',
    description: 'A utility for applying border-radius. `rounded-lg` applies a large border-radius.',
    snippet: '<div class="rounded-lg border p-4">...</div>',
    category: 'Borders',
  },
  {
    id: 'border',
    name: 'border',
    description: 'Adds a 1px solid border with default color.',
    snippet: '<div class="border">...</div>',
    category: 'Borders'
  },
  {
    id: 'border-b-2',
    name: 'border-b-2',
    description: 'Adds a 2px bottom border.',
    snippet: '<div class="border-b-2 border-blue-500">...</div>',
    category: 'Borders'
  },

  // Effects
  {
    id: 'shadow-md',
    name: 'shadow-md',
    description: 'Applies a medium shadow (box-shadow).',
    snippet: '<div class="shadow-md">...</div>',
    category: 'Effects'
  },
  {
    id: 'opacity-75',
    name: 'opacity-75',
    description: 'Sets the opacity to 75%.',
    snippet: '<div class="opacity-75">...</div>',
    category: 'Effects'
  },
  {
    id: 'hover:scale-105',
    name: 'hover:scale-105',
    description: 'Scales element to 105% on hover (transform: scale(1.05)).',
    snippet: '<button class="hover:scale-105 transition-transform">Hover me</button>',
    category: 'Effects'
  },

  // Transitions & Animation
  {
    id: 'transition',
    name: 'transition',
    description: 'Enables transitions for all properties.',
    snippet: '<button class="transition hover:bg-blue-600">Button</button>',
    category: 'Transitions'
  },
  {
    id: 'duration-200',
    name: 'duration-200',
    description: 'Sets transition duration to 200ms.',
    snippet: '<button class="transition duration-200">Button</button>',
    category: 'Transitions'
  },
  {
    id: 'animate-pulse',
    name: 'animate-pulse',
    description: 'Adds a pulsing animation (opacity change).',
    snippet: '<div class="animate-pulse">Loading...</div>',
    category: 'Transitions'
  },

  // Sizing
  {
    id: 'w-full',
    name: 'w-full',
    description: 'Sets width to 100%.',
    snippet: '<div class="w-full">...</div>',
    category: 'Sizing'
  },
  {
    id: 'h-screen',
    name: 'h-screen',
    description: 'Sets height to 100vh.',
    snippet: '<div class="h-screen">Full height</div>',
    category: 'Sizing'
  },
  {
    id: 'min-h-screen',
    name: 'min-h-screen',
    description: 'Sets minimum height to 100vh.',
    snippet: '<div class="min-h-screen">At least full height</div>',
    category: 'Sizing'
  },

  // Interactivity
  {
    id: 'cursor-pointer',
    name: 'cursor-pointer',
    description: 'Changes cursor to pointer on hover.',
    snippet: '<button class="cursor-pointer">Click me</button>',
    category: 'Interactivity'
  },
  {
    id: 'select-none',
    name: 'select-none',
    description: 'Prevents text selection.',
    snippet: '<div class="select-none">Cannot select this text</div>',
    category: 'Interactivity'
  },
  {
    id: 'focus:ring',
    name: 'focus:ring',
    description: 'Adds a focus ring (outline) when element is focused.',
    snippet: '<input class="focus:ring-2 focus:ring-blue-500">',
    category: 'Interactivity'
  },

  // Responsive
  {
    id: 'md:flex',
    name: 'md:flex',
    description: 'Applies flex display at medium breakpoint and up.',
    snippet: '<div class="block md:flex">...</div>',
    category: 'Responsive'
  },
  {
    id: 'lg:hidden',
    name: 'lg:hidden',
    description: 'Hides element at large breakpoint and up.',
    snippet: '<div class="lg:hidden">Mobile only</div>',
    category: 'Responsive'
  },

  // Dark Mode
  {
    id: 'dark:bg-dark',
    name: 'dark:bg-dark',
    description: 'Applies dark background color in dark mode.',
    snippet: '<div class="bg-white dark:bg-dark">...</div>',
    category: 'Dark Mode'
  },
  {
    id: 'dark:text-white',
    name: 'dark:text-white',
    description: 'Applies white text color in dark mode.',
    snippet: '<p class="text-black dark:text-white">...</p>',
    category: 'Dark Mode'
  },

  // Custom
  {
    id: 'backdrop-blur-sm',
    name: 'backdrop-blur-sm',
    description: 'Applies a small backdrop blur effect.',
    snippet: '<div class="backdrop-blur-sm">...</div>',
    category: 'Custom'
  },
  {
    id: 'ring-2',
    name: 'ring-2',
    description: 'Adds a 2px outline ring (similar to border but with offset).',
    snippet: '<button class="ring-2 ring-blue-500">Button</button>',
    category: 'Custom'
  }
];

export const jsSnippets: CheatSheetItem[] = [
  // Functions
  {
    id: 'arrow-function',
    name: 'Arrow Function',
    description: 'A compact alternative to a traditional function expression.',
    snippet: "const add = (a, b) => a + b;\n\nconsole.log('2 + 3 =', add(2, 3));",
    category: 'Functions',
  },
  {
    id: 'default-parameters',
    name: 'Default Parameters',
    description: 'Allows named parameters to be initialized with default values if no value or undefined is passed.',
    snippet: "function greet(name = 'Guest') {\n  return `Hello, ${name}!`;\n}\n\nconsole.log(greet()); // Hello, Guest!",
    category: 'Functions'
  },
  {
    id: 'rest-parameters',
    name: 'Rest Parameters',
    description: 'Allows a function to accept an indefinite number of arguments as an array.',
    snippet: "function sum(...numbers) {\n  return numbers.reduce((acc, num) => acc + num, 0);\n}\n\nconsole.log(sum(1, 2, 3)); // 6",
    category: 'Functions'
  },

  // Arrays
  {
    id: 'map-array',
    name: 'Array.map()',
    description: 'Creates a new array populated with the results of calling a provided function on every element in the calling array.',
    snippet: "const numbers = [1, 2, 3, 4];\nconst doubled = numbers.map(item => item * 2);\n\nconsole.log(doubled);",
    category: 'Arrays',
  },
  {
    id: 'filter-array',
    name: 'Array.filter()',
    description: 'Creates a new array with all elements that pass the test implemented by the provided function.',
    snippet: "const numbers = [1, 2, 3, 4, 5];\nconst evens = numbers.filter(n => n % 2 === 0);\n\nconsole.log(evens); // [2, 4]",
    category: 'Arrays'
  },
  {
    id: 'reduce-array',
    name: 'Array.reduce()',
    description: 'Executes a reducer function on each element of the array, resulting in a single output value.',
    snippet: "const numbers = [1, 2, 3, 4];\nconst sum = numbers.reduce((total, num) => total + num, 0);\n\nconsole.log(sum); // 10",
    category: 'Arrays'
  },
  {
    id: 'spread-operator',
    name: 'Spread Operator',
    description: 'Allows an iterable to be expanded in places where zero or more arguments/elements are expected.',
    snippet: "const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\nconst combined = [...arr1, ...arr2];\n\nconsole.log(combined); // [1, 2, 3, 4, 5, 6]",
    category: 'Arrays'
  },
  {
    id: 'destructuring-array',
    name: 'Array Destructuring',
    description: 'Unpacks values from arrays into distinct variables.',
    snippet: "const colors = ['red', 'green', 'blue'];\nconst [firstColor, secondColor] = colors;\n\nconsole.log(firstColor); // 'red'",
    category: 'Arrays'
  },

  // Objects
  {
    id: 'object-literal',
    name: 'Object Literal',
    description: 'Creates an object with properties and methods.',
    snippet: "const person = {\n  name: 'Alice',\n  age: 30,\n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n};\n\nconsole.log(person.greet());",
    category: 'Objects'
  },
  {
    id: 'object-destructuring',
    name: 'Object Destructuring',
    description: 'Unpacks values from objects into distinct variables.',
    snippet: "const user = { id: 1, name: 'John', age: 30 };\nconst { name, age } = user;\n\nconsole.log(name, age); // 'John' 30",
    category: 'Objects'
  },
  {
    id: 'spread-object',
    name: 'Object Spread',
    description: 'Copies properties from one object to another.',
    snippet: "const defaults = { theme: 'light', fontSize: 16 };\nconst userSettings = { fontSize: 18 };\n\nconst finalSettings = { ...defaults, ...userSettings };\nconsole.log(finalSettings); // { theme: 'light', fontSize: 18 }",
    category: 'Objects'
  },
  {
    id: 'optional-chaining',
    name: 'Optional Chaining',
    description: 'Allows reading the value of a property located deep within a chain of connected objects without validating each reference.',
    snippet: "const user = {\n  profile: {\n    name: 'Alex',\n    address: {\n      city: 'New York'\n    }\n  }\n};\n\nconsole.log(user?.profile?.address?.city); // 'New York'\nconsole.log(user?.profile?.phone?.number); // undefined",
    category: 'Objects'
  },

  // Async
  {
    id: 'fetch-api',
    name: 'Fetch API',
    description: 'Provides an interface for fetching resources (including across the network).',
    snippet: "fetch('https://api.github.com/users/google')\n  .then(response => response.json())\n  .then(data => console.log(data.name, 'has', data.public_repos, 'public repos.'))\n  .catch(error => console.error('Error:', error));",
    category: 'Async',
  },
  {
    id: 'async-await',
    name: 'Async/Await',
    description: 'A modern way to handle asynchronous operations, making async code look and behave more like synchronous code.',
    snippet: "async function getUser() {\n  try {\n    const response = await fetch('https://api.github.com/users/vercel');\n    const data = await response.json();\n    console.log(data.name);\n  } catch (error) {\n    console.error('Failed to fetch user');\n  }\n}\n\ngetUser();",
    category: 'Async',
  },
  {
    id: 'promise',
    name: 'Promise',
    description: 'Represents the eventual completion (or failure) of an asynchronous operation and its resulting value.',
    snippet: "const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));\n\nwait(1000).then(() => console.log('1 second passed'));",
    category: 'Async'
  },
  {
    id: 'promise-all',
    name: 'Promise.all()',
    description: 'Takes an iterable of promises and returns a single promise that resolves when all of the promises have resolved.',
    snippet: "const fetchUser = fetch('https://api.github.com/users/google');\nconst fetchRepos = fetch('https://api.github.com/users/google/repos');\n\nPromise.all([fetchUser, fetchRepos])\n  .then(responses => Promise.all(responses.map(res => res.json())))\n  .then(data => console.log('User:', data[0], 'Repos:', data[1]));",
    category: 'Async'
  },

  // DOM Manipulation
  {
    id: 'query-selector',
    name: 'Query Selector',
    description: 'Returns the first Element within the document that matches the specified selector.',
    snippet: "const button = document.querySelector('#myButton');\nbutton.addEventListener('click', () => {\n  console.log('Button clicked!');\n});",
    category: 'DOM'
  },
  {
    id: 'create-element',
    name: 'Create Element',
    description: 'Creates the HTML element specified by tagName.',
    snippet: "const div = document.createElement('div');\ndiv.textContent = 'Hello World';\ndiv.classList.add('my-class');\ndocument.body.appendChild(div);",
    category: 'DOM'
  },
  {
    id: 'event-listener',
    name: 'Event Listener',
    description: 'Sets up a function that will be called whenever the specified event is delivered to the target.',
    snippet: "document.querySelector('#myButton').addEventListener('click', (event) => {\n  console.log('Button clicked!', event);\n});",
    category: 'DOM'
  },

  // ES6+ Features
  {
    id: 'template-literals',
    name: 'Template Literals',
    description: 'String literals allowing embedded expressions, multi-line strings, and string interpolation.',
    snippet: "const name = 'Alice';\nconst age = 30;\nconsole.log(`Hello, ${name}. You are ${age} years old.`);",
    category: 'ES6+'
  },
  {
    id: 'nullish-coalescing',
    name: 'Nullish Coalescing',
    description: 'Returns its right-hand side operand when its left-hand side operand is null or undefined.',
    snippet: "const value = null;\nconst defaultValue = value ?? 'default';\nconsole.log(defaultValue); // 'default'",
    category: 'ES6+'
  },
  {
    id: 'dynamic-import',
    name: 'Dynamic Import',
    description: 'Allows loading modules dynamically at runtime.',
    snippet: "button.addEventListener('click', async () => {\n  const module = await import('./module.js');\n  module.doSomething();\n});",
    category: 'ES6+'
  },

  // Classes
  {
    id: 'class',
    name: 'Class',
    description: 'Template for creating objects with methods and properties.',
    snippet: "class Person {\n  constructor(name) {\n    this.name = name;\n  }\n\n  greet() {\n    return `Hello, I'm ${this.name}`;\n  }\n}\n\nconst alice = new Person('Alice');\nconsole.log(alice.greet());",
    category: 'Classes'
  },
  {
    id: 'class-inheritance',
    name: 'Class Inheritance',
    description: 'Allows a class to inherit properties and methods from another class.',
    snippet: "class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n\n  speak() {\n    console.log(`${this.name} makes a noise.`);\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log(`${this.name} barks.`);\n  }\n}\n\nconst dog = new Dog('Rex');\ndog.speak();",
    category: 'Classes'
  },

  // Error Handling
  {
    id: 'try-catch',
    name: 'Try/Catch',
    description: 'Marks a block of statements to try and specifies a response should an exception be thrown.',
    snippet: "try {\n  // Code that may throw an error\n  nonExistentFunction();\n} catch (error) {\n  console.error('An error occurred:', error.message);\n} finally {\n  console.log('This always runs');\n}",
    category: 'Error Handling'
  },

  // Dates
  {
    id: 'date-formatting',
    name: 'Date Formatting',
    description: 'Working with and formatting dates in JavaScript.',
    snippet: "const now = new Date();\nconsole.log(now.toLocaleDateString()); // Localized date string\nconsole.log(now.toISOString()); // ISO format (2023-01-01T00:00:00.000Z)",
    category: 'Dates'
  },

  // Local Storage
  {
    id: 'local-storage',
    name: 'Local Storage',
    description: 'Allows saving key/value pairs in a web browser with no expiration date.',
    snippet: "// Save data\nlocalStorage.setItem('username', 'john_doe');\n\n// Get data\nconst username = localStorage.getItem('username');\nconsole.log(username);\n\n// Remove data\nlocalStorage.removeItem('username');",
    category: 'Browser APIs'
  },

  // Timers
  {
    id: 'set-timeout',
    name: 'setTimeout',
    description: 'Calls a function or evaluates an expression after a specified number of milliseconds.',
    snippet: "console.log('Start');\nsetTimeout(() => {\n  console.log('This runs after 1 second');\n}, 1000);",
    category: 'Timers'
  },
  {
    id: 'set-interval',
    name: 'setInterval',
    description: 'Calls a function or evaluates an expression at specified intervals (in milliseconds).',
    snippet: "let counter = 0;\nconst intervalId = setInterval(() => {\n  console.log(`Count: ${++counter}`);\n  if (counter >= 5) clearInterval(intervalId);\n}, 1000);",
    category: 'Timers'
  }
];
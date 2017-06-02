# PART 1 HTML, CSS & JavaScript Code Challenge

In this challenge, I will be implementing a simple navigation menu using HTML5 and CSS3

## Create a Git Repository
* Create a new repository called 'HTML_CSS_JS_Code_Challenge'
* Clone the the repository into my Local Machine
* Work on the Local Machine;
* Use git add -A, git commit - m "commit ****" and git push to add, commit and push created files to git. 

## Create HTML file (using HTML5)
* Create a file called 'index html'
* In index.html, use HTML5 elements to mark up the structure, with an article element to contain everything.

### Groundwork Layout
I will now lay the groundwork for my markup order: Ensuring that the design will be useable with styles and images turned off. This will involve creating content page with four sections;
1. The logo and Icon Section
2. Website Title and Headline Section
3. A Section containing an article and Navlinks
4. A side Section containing More Links

### Flushing out the Layout
Here I will structure the content created in a usable way using CSS3
1. Create an asset folder and:
 * Create an image subfolder that will hold all the images produced in this exercise
 * Create a CSS subfolder and a file 'styles.css' and save it in the assets folder the css sheet will contain all the styles used to manipulate the static page
 * insert style.css as an external style sheet in the html file

2. Create the first row (with class name mainRow) containing the first block of four sections (with class name subRow) and one block for more links (with class name moreLks)
 * Use the css to divide mainRow into two blocks (with class names subRow and moreLks and float them to left)
 * Within the class subRow class, create 3 rows consisting of the logo/icon secrion, the Title/headline section, and the Article/Navlink section

 * Use the css to divide each of the subRows into four blocks and float them to left

 * Use Margin to create spaces between the rows

 We now have a simple layout that closely resembles the mockup

## More CSS

Here we implement more styling to reproduce the mockup

1. First we use border and box-sizing to create borders for our logo and icons
2. We use margins and paddings in CSS to position the boxes properly
3. We use <hr> tag to underline the titles and headers
4. We create a border line using (border-left syntx in css) to create a left side border for the More link section
5. Use list-style-type:none to remove the bullets in the Navlink Lists. Align the list text to the center.

The mockup has been reproduced.

6. Validate index.html using https://validator.w3.org 

7. Validate styles.css using hhttp://www.css-validator.org 

PART 1 BONUS
1. Keep index.html and save another file (index_grid.html) for gridding
2. In index_grid.html include <meta> viewport element: This gives the browser instructions on how to control the page's dimensions and scaling.
3. Create style_grid.css and save it in the css directory. Include the file in index_grid.html as an external style sheet.

## Gridding
I will use RWD grid view to redesign the webpage. It makes it easier to place all the elements in the page. 

## Responsive Grid View
Step 1 - All the HTML elements would have the box-sizing property set to border box
Step-2 - Create a responsive grid-view with 12 columns, to have more control over the webpage (the percentage for one column is 100%/12 columns = 8.33%), we then make a class of each of the columns, class="col-" and a number defining how many colums the section should span
Step 3:  All these columns should be floating to the left, and have a padding of 5px
Step 4: Wrap each row in a <div>. The number of columns inside a row should always add up to 12
Step 5: Add a style that clears the flow to prevent the columns inside a row to be taken out of the flow of the page, and other elements being placed as if the columns do not exist. 

A gridded responsive solution has been created.

## Adding color and visual style

* Set the body background to rgba(203, 111, 21)
* Configure to use Iphone 7 (Apple iPhone 7	Physical width: 750, Physical Height:1334, CSS-Width:375, CSS-Height:667, Pixel Ratio: 2, Physical ppi:326, CSS-ppi: 192)

# PART 2 REACT

The same part of this exercise takes the final solution in Part 1) and breaks it down into a few React components. The components used in the app are:

Parents.JSX - Takes care of the logo
Child.JSX - Takes care of an icon, Heading 1/ Navlinks and More Links
GrandChild.JSX - Takes care of an icon, LONG Heading 1/ Navlinks
GreatGrandChild.JSX - Takes care of an icon, 3rd Heading 1/ Navlinks

The thought process are explained in the code comments and a summary presented in this file

In separate files, break down the existing navigation menu into a few skeleton/Proof of concept React components

* Step 1 - Install Babel Library - Babel is a great tool for transpiling React Code (JSX). It also transpiles ES6 code

* Step 2 - Create webpack.config file
* Step 3 - Write index.html file
  * In the body of index.html
   * Create an empty div with id=app 
   * Include javascript file created using webpack.config(call it bundle.js)
   * Include the CSS files used for the vanilla html exercise
* Step 4 - Run npm (yarn) init to create package.json file
* Step 5 - Run npm (yarn) install to install all our dependencies
* Step 6 - Write app.js 
  * import React
  * import ReactDom - ReactDom is our active webpage- we will render our app to it. In React, everything in the body tag in index.html is a component
  * Create a layout class that would render the react components
  * Inside the class, use the render method to produce the output
  * Get the react element in the index.html
* Step 6 - Run webpack
* Step 7 - Install webpack-dev-server using npm install -s webpack-dev-server (this will make the files reload automatically)
* Step 8 - run webpackserver
* Step 9 - view the rendered file at localhost:8080 in the browser
* Step 10 - Create the components and save them under components in the app folder. There are four components (Parent.JSX, Child.JSX, CrandChild.JSX and GreatGrandChild.JSX  )

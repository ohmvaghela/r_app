# Creating ReactApp
    npx create-react-app app_name

## Start app
    npm start

- Component based archiceture
    - There is navigation bar on top it is a component
    - There is a side bar it is component
    - There is contact bar at bottom of page it is component
    - These all are components and can be reused

## Component and state in React js

- Components are independent and reusable bits of code
- States are used to store data of components 

## React js fragment

In App.js : in Return this is fragment all the `<div>`,`<nav>`,... is in this fragment
    <> </>

## Js element using {}

```js
let name = "ohm";

<>
<h1> Hello {name}</h1> // name is Js elemet
</>

```

> Babel compiles `JSX` to `React.createElement()`

> files in `Public` folder are available to all so do not add any sensitive content in it

# importing component 
> - Name always starts with capital letter
- Say we have .js file in component folder
- so it should be named with capital letter at starting
- Navbar.js

# HTML DOM Document
https://www.w3schools.com/jsref/dom_obj_document.asp


# Using bootstrap
> - Cautions while using bootstrap with reactjs

> - change "`class`" to "`className`"

> - close all the tags "`/>`"

> - "`for`" to "`htmlFor`"

1. First add the following to the index.html : [link](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- add this code in head
    ```html
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">

    ```
- add this code in body
    ```html
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    ```
2. Use any code you want in app.js from : [link](https://getbootstrap.com/docs/5.3/getting-started/introduction/)



# About exporting and importing 

- use `.mjs` extenstion for exporting file
- Say this is my export file `exports.mjs`
```js

const a = "ohm"
const b = "ohm1"
const c = "ohm2"

export default c;
export {a};
export {b};

```
- Say this is my import file

```js
import name,{a,b} from `export.mjs`
```

- name is c as `c` is default so anything can be named for that variable
- When `a`, `b` are imported to another file the name should be same 

> Snippet for React function based component `rfc`

# Using extrnal file components & Props and Proptype
- Proptype - used to define incoming data
- defaultProps - default data if props not passed 
- component.js
- ```js
    import React from 'react'

    export default function navbar(comp) {
    return (
        <div>
        using the input from app.js
        {comp.name} // this syntax is used for writing `js` 

        </div>
    )
    }
    // proptype is used to define data imported
    navbar.prototype = {
    name: PropTypes.string.isRequired,
    roll: ropTypes.number
    };
    // using isRequired throws error if that prop is not provided
    navbar.defaultProps = {
        name:'ohm',
        roll:{2037}
    };

    ```

- Importing `component.js` to `app.js`
- 
    ```js

    import logo from './logo.svg';
    import './App.css';
    import navbar from './navbar.js'
    function App() {
    return (
        <>
    <navbar name = "dsa" />
        </>

    );
    }

    export default App;


    ```

# States, Event Handling, 
- React Objects used to store data about components
- Declaring state
- In `onClick` we can only pass a `function` Eg. onClick={HandleEvent} --> `Correct`
- In `onClick` we can `not` pass a `function call` Eg. onClick={HandleEvent(Parameter)} --> `Incorrect`
- We can pass `function call` in `onClick` by Eg. `onClick={ ()=>HandleEvent(Parameter) }` --> `Correct` 
- These States can perform dynamic work without reloading or changing webpage
    - Eg. taking data and printing it simuntaniously like writing a gmail
```js
    import {useState} from react
    [text,textEdit] = useState("Default text");
```
- Editing state
```js
    textEdit("new text")
```
- textarea
```js

    export default function TextBar(props){
        const [text,textEdit] = useState("Default State");
        // here text stores data and textEdit is used to update data
        
        function handleChange(event){
            textEdit(event.target.value);
            // event : any event done by user like click, type, hover
            // textEdit : changes the value of text depending on the event 
        }
        
        return(
            
            <>
            <div className="container mb-5"> {/* mb-(0-5) is used for spacing*/} 
                <textarea className="form-control" value={text} onChange={handleChange}>
                {/* here the "text" is present in the box and it is changed as per keyboard  */}

                <textarea className="form-control" placeholder='enter text here' onChange={handleChange}>
                {/*here the text is visible but is removed as soon as event occurs and it is replaced by that event*/}

            </div>
            </>
        )
    }

```

# Using js in jsx

```js
    {}// We can write JS in this curly bracket 
    {`hi $(js_varialble), Hope you are doing fine`} 
    // " `` " this is used when we want to use variable with string   

```
# changing background color
- ```js
    document.body.style.backgroundColor='black'
    ```
- Using 2nd method we need to remove each and every color every time we change it
- Coz once we add an element to classList document.body will use the first added element
    - ```js
        document.body.classList.add='bg-primary'
        ```

# Changing icon and title/webiste name
- index.html
- Changing icon
    - ```html
        <link rel="icon" href="%PUBLIC_URL%/among_us.ico" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/among_us.png"/>
        ```
- Changing title
    - Default title - From index.html
    -  ```html
        <title>Among us</title>
        ```
    - From anywhere else using js
        ```js
         document.title = "title change";
        ```
# Web page routing
- A mechanism where `http` requests are routed to code which handles them
- In ReactJs
    - Say we want to change page content but dont want to change all components
    - Like navbar, content bar we want to be same 
    - This all is done without reloading page

## Using Router
- Importing 
```js
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' 
```
- add <Router> </Router> just after <></>
- Syntax
    - Include all dynamic components in <Routes></Routes>
    - Keep all the static components out of <Routes></Routes>
    - ```js

        <>
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/"/>// default path
                <Route path="/TextBax"  element={<Container />}> </Route>
                <Route path="/TextBox/:Color"element={<Color />}></Route>
                <Route path="/About"    element={<About />}>     </Route>
            </Routes>
        </Router>
        </>
        ```
    <!-- - Nested path -->

    - Changes in component files
        ```js
        // old
        <a herf="/About"></a>
        // react-router-dom
        <Link to="/About"></Link>
        ```

#
> We can run npm page just with build directory runnning in liveserver
#

# Deployment on Github
- Remove routes (They are problematic while deploying on `GitHub only`)
- Read https://github.com/gitname/react-gh-pages

# CLS( Cumulative layout shift )
- Shifting of components when there is a pop-up
- SEO perfers website with less CLS
//React is a framework and it can work in small portions of your code, can work in existing apps, doesn't require u to create a full fledged app in this code, can work in small portions, bare minimal library, can be used to build large scale applications
const heading2 = React.createElement("h2", { id: "heading" }, "This is heading2!"); //object is used to add attributes while creating elements - this creates an obj
const root2 = ReactDOM.createRoot(document.getElementById('root2'))
root2.render(heading2); // this wil convert the object into html element -- replace the html element with whatever is being passed to render
//-----------------
/* creating a pattern like
<div id="parent">
    <div id="child">
        <h1>I'm H1</h1>
    </div>
</div>
*/

const parent = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, React.createElement("h1", {}, "I'm H1")))
const root3 = ReactDOM.createRoot(document.getElementById('root3'))
root3.render(parent)

//to create an element with multiple children, pass the 3rd argument(child element) as array
/* creating a pattern like
<div id="parent">
    <div id="child">
        <h1>I'm H1</h1>
        <h2>I'm H2</h2>
    </div>
</div>
*/
const parent2 = React.createElement("div", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm H1"),React.createElement("h2", {}, "I'm H2")]))
const root4 = ReactDOM.createRoot(document.getElementById('root4'))
root4.render(parent2)
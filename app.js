
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 *      <div id="child">
 *          <h1>I am an h1 tag</h1>
 *          <h2>I am an h2 tag</h2>
 *      </div>
 * </div>
 * Below element will create nested tags
 * 
 */

const parent = React.createElement("div",
{id:"parent"},
[React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
),
React.createElement("div",
{id:"child"},
[React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
)]
);


const heading= React.createElement("h1",        //returns an object
{
    id:"heading",xyz:"abc",
},
"Hello World from React");

console.log(parent);   //Prints an object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent)

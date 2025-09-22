const element1 = React.createElement("h1",{},"hello Ajay");
const element2 = React.createElement("h2",{},"Happy Navratri");

const div1 = React.createElement('div',{},[element1,element2])
const Reactroot = ReactDOM.createRoot(document.getElementById('root'))

Reactroot.render(div1);

// const ele = React.createElement("hi",{},"Hello");


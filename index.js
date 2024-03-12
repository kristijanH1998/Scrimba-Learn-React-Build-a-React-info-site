ReactDOM.render(<h1>Hello, everyone!</h1>, document.getElementById("root"));
ReactDOM.render(<p>Hi my name is Kristijan!</p>, document.getElementById("root"));
ReactDOM.render(
    <ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>, 
    document.getElementById("root"));

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link disabled" href="#">Disabled</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    )
}

function MainContent(){
    return (
    <h1>I'm learning React!</h1>
    );
}
ReactDOM.render(
    <div>
        <Navbar />
        <MainContent />
    </div>,
    document.getElementById("root")
)

//ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root2"));
//Vanilla JS version of code from line 60:
const h1El = document.createElement("h1");
h1El.textContent = "Hello, React!";
h1El.className = "header";
document.getElementById("root2").append(h1El);
console.log(h1El);

//JSX
// const element = <h1 className="header">This is JSX</h1>;
// console.log(element);
// ReactDOM.render(element, document.getElementById("root2"));

const page = (
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
);
ReactDOM.render(
    page,
    document.getElementById("root2")
);

//challenge: create navbar using jsx:
const navbar = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);
//ReactDOM.render(navbar, document.getElementById("root3"));

const page2 = (
    <div>
        <h1>Some title</h1>
        <p>paragraph 1</p>
        <p>paragraph 2</p>
        <footer>author: Kristijan</footer>
    </div>
);
//only displays the object page2 in JSON object format, to get actual DOM elements displayed, we need to use ReactDOM.render() method
//document.getElementById("root3").append(JSON.stringify(page2));

ReactDOM.render(page2, document.getElementById("root3"));


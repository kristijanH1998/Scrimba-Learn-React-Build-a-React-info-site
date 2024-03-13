import Header from "./Header";
import Footer from "./Footer";
import MainContent from "./MainContent";

ReactDOM.render(<TemporaryName />, document.getElementById("root"));

function TemporaryName() {
    return (<div>
        <img src="./react-logo.png" width="40px" alt="React logo" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on GitHub</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>            
        </ul>
    </div>);
}

//Custom components practice example:
// function Page() {
//     return(
//         <div>
//             <header>
//                 <nav><img src="./react-logo.png" width="60px" alt="React Logo"/></nav>
//             </header>
//             <h1>I'm excited to learn React because:</h1>
//             <ol>
//                 <li>React is a desirable skill in software development industry.</li>
//                 <li>React is a declarative composable framework that makes developing web apps and websites easier.</li>
//             </ol>
//             <footer>
//                 <small>© 2024 Hornung development. All rights reserved.</small>
//             </footer>
//         </div>
//     );
// }
// ReactDOM.render(<Page />, document.getElementById("root2"));

//Page is a parent component, while Header, Footer, and MainContent are child component
function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root2"))
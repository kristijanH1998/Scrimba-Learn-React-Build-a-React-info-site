export default function Info() {
    return (
        <>
            <img src="./profile-pic.jpg" className="image"></img>
            <h1>Kristijan Hornung</h1>
            <h3 id="profession">Software Developer</h3>
            <h5>kristijanH1998.github.io</h5>
            <div className="buttons">
                <div id="email">
                    <i className="fa-solid fa-2x fa-envelope icon-button--icon"></i>
                    <span className="icon-button--text">Email</span>
                </div>
                <div id="linkedin">
                    <i className="fa fa-2x fa-linkedin" aria-hidden="true"></i>
                    <span className="icon-button--text">LinkedIn</span>
                </div>
            </div>
        </>
    )
}
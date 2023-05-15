export function Login() {
    return(
        <div className="start_img4">
            <div className="container_log">
                <div className="title_log">Log In</div>
                <form className="main">
                    <div className="input_cont">
                        <input className="input" type="text" placeholder="Username"/>
                    </div>
                    <div className="input_cont">
                        <input className="input" type="password" placeholder="Password"/>
                    </div>
                </form>
                <button className="button" type="submit">Login</button>
            </div>
        </div>
    );
}
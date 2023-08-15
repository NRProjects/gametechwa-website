import './Login.css';

function Login() {

    return (
        <div className='login-page-container'>
            <div className='login-box-container'>
                <label className='login-box-label'>
                    Username
                </label>
                <input className='login-box-input'>
                </input>
                <label className='login-box-label'>
                    Password
                </label>
                <input className='login-box-input'>
                </input>

                <button className='login-box-button'>LOGIN</button>
                <button className='login-box-button'>FORGOT PASSWORD</button>

                
            </div>
        </div>
    );
}

export default Login;
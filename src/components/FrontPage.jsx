import { Link } from 'react-router-dom';
import './FrontPage.css'

function FrontPage() {
    return (
        <>
            <div className='front-page-container'>
                <div className='navbar'>
                    <div className='navbar-items'>
                        <div className='navbar-item'>
                            <a className='front-page-title'>Gametech</a>
                        </div>
                        <a className='navbar-item' href='#'>Services</a>
                        <a className='navbar-item' href='#'>Pricing</a>
                        <a className='navbar-item' href='#'>About Us</a>
                        <a className='navbar-item' href='#'>Updates</a>
                        <a className='navbar-item' href='#'>Contact Us</a>
                        
                    </div>
                    <div className='user-buttons'>
                        {/* <a className='user-button' href='#'>Login</a> */}
                        <Link className='user-button' to='login'>Login</Link>
                        <Link className='user-button' to='get-started'>Get Started</Link>
                        
                        {/* <a className='user-button' href='#'>Get Started</a> */}
                    </div>
                </div>

                <div className='footer'>
                   
                </div>
            </div>
        </>
    );
}

export default FrontPage
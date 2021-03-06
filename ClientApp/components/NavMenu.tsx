import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav bg-dark'>
            <div className='navbar-expand-md navbar-dark bg-dark'>
                <div className='row nav-responsive'>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className='text-center heading'>
                        <Link className='navbar-brand' to={'/'}>Travis Wylie</Link>
                    </div>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse navbar' id="navbarsExampleDefault">
                    <ul className='nav navbar navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <NavLink to={'/'} className='nav-link' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/education'} className='nav-link' activeClassName='active'>
                                Education
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/experience'} className='nav-link' activeClassName='active'>
                                Experience
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/contact'} className='nav-link' activeClassName='active'>
                                Contact Me
                            </NavLink>
                        </li >
                        <hr />
                        <li className='nav-item'>
                            <a href='https://github.com/justiphi' className='nav-link'>
                                Github
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://www.linkedin.com/in/travis-wylie-9b1129154/' className='nav-link'>
                                LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

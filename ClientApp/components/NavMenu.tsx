import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav bg-dark'>
            <div className='navbar-expand-md navbar-dark bg-dark'>
                <div>
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
                                <span className='glyphicon glyphicon-home col-sm-12'></span> Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/education'} className='nav-link' activeClassName='active'>
                                <span className='glyphicon glyphicon-education col-sm-12'></span> Education
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/experience'} className='nav-link' activeClassName='active'>
                                <span className='glyphicon glyphicon-education col-sm-12'></span> Experience
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to={'/contact'} className='nav-link' activeClassName='active'>
                                <span className='glyphicon glyphicon-envelope col-sm-12'></span> Contact Me
                            </NavLink>
                        </li >
                        <hr />
                        <li className='nav-item'>
                            <a href='https://github.com/justiphi' className='nav-link'>
                                <span className='glyphicon glyphicon-user col-sm-12'></span> Github
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='https://www.linkedin.com/in/travis-wylie-9b1129154/' className='nav-link'>
                                <span className='glyphicon glyphicon-user col-sm-12'></span> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
            <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>Travis Wylie</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={ '/' } exact activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/education' } activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Education
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/experience'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Experience
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/contact' } activeClassName='active'>
                                <span className='glyphicon glyphicon-envelope'></span> Contact Me
                            </NavLink>
                        </li>
                        <hr />
                        <li>
                            <a href='https://github.com/justiphi'>
                                <span className='glyphicon glyphicon-user'></span> Github
                            </a>
                        </li>
                        <li>
                            <a href='https://www.linkedin.com/in/travis-wylie-9b1129154/'>
                                <span className='glyphicon glyphicon-user'></span> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}

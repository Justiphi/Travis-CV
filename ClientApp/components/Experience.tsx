import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Experience extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="col-md-8">
            <div>
                <h1>Experience</h1>
                <p>My Previous Projects.</p>
            </div>
            <div>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Project
                                </th>
                                <th>
                                    Type
                                </th>
                                <th>
                                    Technologies Used
                                </th>
                                <th>
                                    Github
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <a href='https://www.bioptronlight.co.nz/'>bioptronlight.co.nz</a>
                                </td>
                                <td>
                                    Website <br />(freelance)
                                </td>
                                <td>
                                    Wix
                                </td>
                                <td>
                                    not applicable
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://janicegilesart.com'>janicegilesart.com</a>
                                </td>
                                <td>
                                    Website <br />(freelance)
                                </td>
                                <td>
                                    Wix
                                </td>
                                <td>
                                    not applicable
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://oneuniqueminds.co.nz'>oneuniqueminds.co.nz</a>
                                </td>
                                <td>
                                    Website <br />(freelance)
                                </td>
                                <td>
                                    PHP (with MVC model) <br />MySQL database
                                </td>
                                <td>
                                    unavailable
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='http://cmeonline.co'>cmeonline.co</a>
                                </td>
                                <td>
                                    Website <br />(Startup weekend)
                                </td>
                                <td>
                                    ASP.net Core <br />(MVC model)
                                </td>
                                <td>
                                    To upload
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <a href='https://tatenashi.com'>tatenashi.com</a>
                                </td>
                                <td>
                                    Website
                                </td>
                                <td>
                                    PHP (with MVC model) <br />MySQL database
                                </td>
                                <td>
                                    To upload pending fix
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Kitchen hand request system <br />(discontinued)
                                </td>
                                <td>
                                    Desktop application
                                </td>
                                <td>
                                    WPF .net Framework
                                </td>
                                <td>
                                    To upload
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Database management tool for business
                                </td>
                                <td>
                                    Desktop application
                                </td>
                                <td>
                                    WPF .net Framework <br />MySQL database connected via Entity Framework
                                </td>
                                <td>
                                    To upload pending completion
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Tatenashi
                                </td>
                                <td>
                                    Discord Chatbot
                                </td>
                                <td>
                                    .net core <br /> local SQLite database connected via Entity Framework
                                </td>
                                <td>
                                    Unavailable
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <strong>Note:</strong> all MySQL databases, coded websites and the Tatenashi Discord bot on Debian 9 virtual private servers.
            </div>
        </div>
    }
}
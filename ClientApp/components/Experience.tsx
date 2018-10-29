import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Experience extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div>
                <h1>Experience</h1>
                <p>Previous work done as a freelance developer.</p>
            </div>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                Job
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
                                <a href='https://biptronlight.co.nz'>bioptronlight.co.nz</a>
                            </td>
                            <td>
                                Website
                            </td>
                            <td>
                                Wix
                            </td>
                            <td>
                                nil
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href='https://janicegilesart.com'>janicegilesart.com</a>
                            </td>
                            <td>
                                Website
                            </td>
                            <td>
                                Wix
                            </td>
                            <td>
                                nil
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href='https://oneuniqueminds.co.nz'>oneuniqueminds.co.nz</a>
                            </td>
                            <td>
                                Website
                            </td>
                            <td>
                                PHP (with MVC model) + MySQL database
                            </td>
                            <td>
                                available pending contact
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href='https://cmeonline.co'>cmeonline.co</a>
                            </td>
                            <td>
                                Website
                            </td>
                            <td>
                                ASP.net Core (MVC model with react)
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
                                PHP (with MVC model) + MySQL database
                            </td>
                            <td>
                                To upload pending fix
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Kitchen hand request system (discontinued)
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
                                WPF .net Framework + MySQL database connected via Entity Framework
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
                                .net core + local SQLite database connected via Entity Framework
                            </td>
                            <td>
                                nil
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    }
}
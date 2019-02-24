import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Education extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="col-md-8">
            <h2> Currently Studying: </h2>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Qualification
                                </th>
                                <th>
                                    Studying at
                                </th>
                                <th>
                                    Year
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    BSc Major in Applied Computing
                                </td>
                                <td>
                                    University of Waikato
                                </td>
                                <td>
                                    2019
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <h2> Qualifications: </h2>
                <div className='table-responsive'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>
                                    Qualification
                                </th>
                                <th>
                                    Awarded By
                                </th>
                                <th>
                                    Year
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    Diploma in Software Development Level 6
                                </td>
                                <td>
                                    Toi Ohomai Institute of Technology
                                </td>
                                <td>
                                    2018
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Skills for Entrepeneurs Level 7
                                </td>
                                <td>
                                    Toi Ohomai Institute of Technology
                                </td>
                                <td>
                                    2018
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Diploma in Applied Computing Level 5
                                </td>
                                <td>
                                    Toi Ohomai Institute of Technology
                                </td>
                                <td>
                                    2017
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    NCEA Level 3
                                </td>
                                <td>
                                    Otumoetai College
                                </td>
                                <td>
                                    2016
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <h2>Scholarships:</h2>
                <ul>
                    <li>Project Ignite (2017)</li>
                </ul>
            </div>
        </div>
    }
}

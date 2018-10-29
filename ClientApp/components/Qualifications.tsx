import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import TextLoop from 'react-text-loop';

export class Qualifications extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="container col-md-8">
                <h2> Qualifications: </h2>
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
                                Skills for Entrepeneurs Level 7
                            </td>
                            <td>
                                Toi Ohomai
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
                                Toi Ohomai
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
            </div>;
        </div>
    }
}

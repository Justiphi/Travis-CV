import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { render } from 'react-dom';

interface EducationState {
    education: Qualification[];
    loadingEdu: boolean;
}

export class Education extends React.Component<RouteComponentProps<{}>, EducationState> {

    constructor() {
        super();
        this.state = { education: [], loadingEdu: true };

        fetch('api/values/geteducation')
            .then(response => response.json() as Promise<Qualification[]>)
            .then(data => {
                this.setState({ education: data, loadingEdu: false });
            });
    }

    static renderCurrent(allEducation) {
        let education = allEducation.filter(x => !x.completed);
        if (education.length > 0) {
            return (
                <div>
                    <h2> Currently Studying: </h2>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>Qualification</th>
                                    <th>Studying at</th>
                                    <th>Year</th>
                                </tr>
                            </thead>
                            <tbody>
                                {education.map(item =>
                                    <tr key={item.ID} >
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.location}
                                        </td>
                                        <td>
                                            {item.studyYear}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        } else {
            return
        }
    }

    static renderComplete(allEducation) {
        let education = allEducation.filter(x => x.completed);
        return (
            <tbody>
                {education.map(item =>
                    <tr key={item.ID} >
                        <td>
                            {item.title}
                        </td>
                        <td>
                            {item.location}
                        </td>
                        <td>
                            {item.studyYear}
                        </td>
                    </tr>
                )}
            </tbody>
        );
    }

    public render() {

        let completeContents = this.state.loadingEdu
            ? <p><em>Loading...</em></p>
            : Education.renderComplete(this.state.education);

        let incompleteContents = this.state.loadingEdu
            ? <p><em>Loading...</em></p>
            : Education.renderCurrent(this.state.education);

        return <div>
            <div className="col-md-8">
                {incompleteContents}
                <br />
                <div>
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
                            {completeContents}
                        </table>
                    </div>
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

interface Qualification {
    id: number;
    title: string;
    location: string;
    studyYear: string;
    completed: boolean;
}

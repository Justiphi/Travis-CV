import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface ExperienceState{
    experience: Project[];
    notes: Note[];
    loadingExp: boolean;
    loadingNotes: boolean;
}

export class Experience extends React.Component<RouteComponentProps<{}>, ExperienceState> {

    constructor() {
        super();
        this.state = { experience: [], notes: [], loadingExp: true, loadingNotes: true };

        fetch('api/values/getexperience')
            .then(response => response.json() as Promise<Project[]>)
            .then(data => {
                this.setState({ experience: data, loadingExp: false });
            });

        fetch('api/values/getnotes')
            .then(response => response.json() as Promise<Note[]>)
            .then(data => {
                this.setState({ notes: data, loadingNotes: false });
            });
    }

    static ProjectTitle(title, link) {
        if (link != 'null') {
            return (
                <td>
                    <a href={link}>{title}</a>
                </td>
            );
        }
        else {
            return (
                <td>
                    {title}
                </td>
            );
        }
    }

    static ProjectGithub(Github) {
        if (Github.startsWith('https://')) {
            return (
                <td>
                    <a href={Github}>(Github)</a>
                </td>
            );
        }
        else {
            return (
                <td>
                    {Github}
                </td>
            );
        }
    }

    static renderTable(experience) {
        return (
            <tbody>
                {experience.map(item =>
                    <tr key={item.ID} >
                        {this.ProjectTitle(item.project, item.link)}
                        <td>
                            {item.type}
                        </td>
                        <td>
                            {item.technology}
                        </td>
                        {this.ProjectGithub(item.githubLink)}
                    </tr>
                )}
            </tbody>
        );
    }

    static renderNotes(notes) {
        return (
            <tbody>
                {notes.map(item =>
                    <p>
                        {item.note}
                    </p>
                )}
            </tbody>
        );
    }


    public render() {

        let expContents = this.state.loadingExp
            ? <p><em>Loading...</em></p>
            : Experience.renderTable(this.state.experience);

        let noteContents = this.state.loadingNotes
            ? <p><em>Loading...</em></p>
            : Experience.renderNotes(this.state.notes);

        return <div className="col-md-8">
            <div>
                <h1>Experience</h1>
                <p>My Previous Projects.</p>
            </div>
            <div>
                <div className='table-responsive'>
                    <table className='table table-striped'>
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
                        {expContents}
                    </table>
                </div>
                <strong>Notes:</strong>
                {noteContents}
            </div>
        </div>
    }
}

interface Project {
    id: number;
    project: string;
    link: string;
    type: string;
    technology: string;
    githubLink: string;
}

interface Note {
    id: number;
    note: string;
}
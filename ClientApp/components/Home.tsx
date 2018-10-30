import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <div className="col-md-10">
                <img src="" alt="Travis Wylie" />
            </div>;
        </div>
    }
}

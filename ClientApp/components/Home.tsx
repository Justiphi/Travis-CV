import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="col-md-10">
            <div className="row">
                <div className="col-md-4 col-sm-5 imgdiv">
                    <img src={require('../images/Travis.jpg')} alt="Travis Wylie" className='portrait' />
                </div>
                <div className="col-md-6 col-sm-12">
                    Hi, My name's Travis. I'm a developer based in Tauranga, New Zealand. <br />
                    I develop both software and websites and have a diverse set of skills encompassing many languages and frameworks. <br />
                    I mainly devleop in C# using dotnet core however I am open to learning new languages and frameworks.
                </div>
            </div>
        </div>
    }
}

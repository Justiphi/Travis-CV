import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Contact extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="container col-md-8">
            <h1>Contact</h1>
            If you have any questions or would like to request some code samples feel free to contact me by the following methods:
            <br />
            <div className='row justify-content-center'>
                <div className='contact col-sm-11 col-md-6 col-lg-5'>
                    <h3 className='text-center'>email:</h3>
                    <ul>
                        <li>travis@streamspike.com</li>
                        <li>traviswylie58@gmail.com</li>
                    </ul>
                </div>
                <div className='contact col-sm-11 col-md-6 col-lg-5'>
                    <h3 className='text-center'>Phone:</h3>
                    <ul>
                        <li>022 100 5064</li>
                    </ul>
                </div>
            </div>
        </div>
    }
}
import * as React from 'react';
import TextLoop from 'react-text-loop';

export class Header extends React.Component<{}, {}> {
    public render() {
        return <div className='Head col-md-10'>
            <h1><b>Travis Wylie</b></h1>
            <div>
                <h2>
                    <TextLoop>
                        <div>Software Developer</div>
                        <div>Student</div>
                        <div>Web Developer</div>
                    </TextLoop>
                </h2>
            </div>
            <hr />
        </div>
    }
}
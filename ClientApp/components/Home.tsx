import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="col-md-10">
            <div className="row">
                <div className="col-md-4 imgdiv">
                    <img src={require('../images/Travis.jpg')} alt="Travis Wylie" className='portrait' />
                </div>
                <div className="col-md-8 col-sm-12">
                    <p>Hi, My name's Travis. I'm a developer based in Tauranga, New Zealand.</p> <br />
                    <p>I develop both software and websites and have a diverse set of skills encompassing many languages and frameworks.</p> <br />
                    <p>I mainly devleop in C# using dotnet core however I am open to learning new languages and frameworks.</p> <br />
                    <p>Over my time coding, I have developed many projects which I have listed on the <a href='/experience'>experience</a> page of this portfolio.</p>
                </div>
            </div>
            <div className='col-md-12'>
                <p> I primarily enjoy coding back end and more functional code however, I am capable of coding the front end of applications too. <br />
                    My passion is to use my programming skills to bring people together by means of helping them communicate and collaborate through software such as web applications, chat bots and desktop applications.</p> <br />
                <p>I have taken on many projects with different people and worked with a variety of methodologies including Waterfall and Agile.</p>
            </div>
            <div className='col-md-12'>
                <h2>About this site:</h2>
                <p>I have made this portfolio using a mixture of TypeScript and C#.</p> <br />
                <p>The front end has been made using React while the back end is using ASP.net Core, the code for this portfolio can be found on my <a href='https://github.com/Justiphi/Travis-CV'>Github</a>.</p> <br />
                <p>The site is currently running on a virtual private server that I have set up with Debian 9 using Apache2 as the webserver for both this site and < a href = 'https://tatenashi.com' > tatenashi.com</a >.</p > <br />
                <p>As I improve my skills with ASP.net and React I will be updating this site to include such things as a contact form running through my mail server.</p >
            </div>
            <div className='col-md-12'>
                <h2>My CV:</h2>
                <p>A copy of my paper CV can be viewed and downloaded by clicking the button below.</p>
                <a className='btn btn-primary' href='https://drive.google.com/file/d/1tDHiBeaDQXg8N4GZfSC6oSyP4ae8egjP/view?usp=sharing'>
                    My CV
                </a>
            </div>
        </div>
    }
}

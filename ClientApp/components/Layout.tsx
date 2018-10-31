import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container'>
            <div className='row'>
                <div className='col-sm-2'>
                    <div className='navbg' />
                    <NavMenu />
                </div>
                <div className='col-md-10 col-sm-9 content'>
                    <Header />
                    <div className='row'>
                        {this.props.children}
                    </div>
                    <Footer />
                </div>
            </div>
        </div>;
    }
}

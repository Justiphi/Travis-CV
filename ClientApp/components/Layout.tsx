import * as React from 'react';
import { NavMenu } from './NavMenu';
import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
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

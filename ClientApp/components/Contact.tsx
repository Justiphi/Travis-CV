import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class ContactData {
    Name: string = "";
    Email: string = "";
    Subject: string = "";
    Content: string = "";
} 

interface AddContactDataState {
    conData: ContactData;
    conSent: boolean;
}
export class Contact extends React.Component<RouteComponentProps<{}>, AddContactDataState> {
    constructor(props) {
        super(props);
        this.state = { conData: new ContactData, conSent: false };
        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
    }
    public render() {
        let contents = this.state.conSent ? this.renderSentBox() : this.renderCreateForm();
        return <div className='col-md-10'>
            <h1>Contact</h1>
            If you have any questions or would like to request some code samples feel free to contact me by the following methods:
            <br />
            <div className='row justify-content-center'>
                <div className='contact col-sm-11 col-md-6 col-lg-5'>
                    <h3 className='text-center'>Email:</h3>
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
            <br />
            {contents}
        </div>;
    }
    // This will handle the submit form event.  
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.setState({conSent: true });
        // POST request for Contact. 
        fetch('api/contact/newcontact', {
            method: 'POST',
            body: data,
        });
    }

    // Returns the HTML Form to the render() method.  
    private renderCreateForm() {
        return (
            <form onSubmit={this.handleSave} >
                <h2>Contact Me</h2>
                <div className='col-md-12 row justify-content-md-center'>
                    < div className="form-group col-md-6 col-sm-12" >
                        <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                        <div className="col-md-12">
                            <input className="form-control" type="text" name="Name" defaultValue={this.state.conData.Name} required />
                        </div>
                    </div >
                    <div className="form-group col-md-6 col-sm-12">
                        <label className="control-label col-md-12" htmlFor="Email">Email</label>
                        <div className="col-md-12">
                            <input className="form-control" type="text" name="Email" defaultValue={this.state.conData.Email} required />
                        </div>
                    </div >
                </div>
                <div className="form-group col-md-12">
                    <label className="control-label col-md-12" htmlFor="Subject" >Subject</label>
                    <div className="col-md-12">
                        <input className="form-control" type="text" name="Subject" defaultValue={this.state.conData.Subject} required />
                    </div>
                </div>
                <div className="form-group col-md-12">
                    <label className="control-label col-md-12" htmlFor="Content">Content</label>
                    <div className="col-md-12">
                        <input className="form-control" type="text" name="Content" defaultValue={this.state.conData.Content} required />
                    </div>
                </div >
                <div className="form-group text-center">
                    <button type="submit" className="btn btn-primary">Send</button>
                </div >
            </form >
        )
    }

    private renderSentBox() {
        return (
            <div className='col-md-12 row justify-content-md-center'>
                <h2>Message sent. Thank you for contacting me.</h2>
            </div >
        )
    }
}
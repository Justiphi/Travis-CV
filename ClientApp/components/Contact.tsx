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
}
export class Contact extends React.Component<RouteComponentProps<{}>, AddContactDataState> {
    constructor(props) {
        super(props);
        this.state = {conData: new ContactData };
        // This binding is necessary to make "this" work in the callback  
        this.handleSave = this.handleSave.bind(this);
    }
    public render() {
        let contents = this.renderCreateForm();
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
            <h2>Contact Me</h2>
            {contents}
        </div>;
    }
    // This will handle the submit form event.  
    private handleSave(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        // POST request for Contact. 
        fetch('api/contact/newcontact', {
            method: 'POST',
            body: data,
        }).then((response) => response.json())
            .then((responseJson) => {
                alert("Message sent. Thank you for contacting me.")
                this.props.history.push("/contact");
            })
    }

    // Returns the HTML Form to the render() method.  
    private renderCreateForm() {
        return (
            <form onSubmit={this.handleSave} >
                < div className="form-group row" >
                    <label className=" control-label col-md-12" htmlFor="Name">Name</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Name" defaultValue={this.state.conData.Name} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Email">Email</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Email" defaultValue={this.state.conData.Email} required />
                    </div>
                </div >
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Subject" >Subject</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Subject" defaultValue={this.state.conData.Subject} required />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="control-label col-md-12" htmlFor="Content">Content</label>
                    <div className="col-md-4">
                        <input className="form-control" type="text" name="Content" defaultValue={this.state.conData.Content} required />
                    </div>
                </div >
                <div className="form-group">
                    <button type="submit" className="btn btn-default">Send</button>
                </div >
            </form >
        )
    }
}
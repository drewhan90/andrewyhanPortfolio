import React, { Component } from 'react';
import '../styles/Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
        myEmail: 'drewhan90@gmail.com'
    }
  }
  componentWillMount() {

  }
  componentDidMount() {

  }
  _sendEmail() { // Send email script

  }
  render() {
    return (
        <div className="App-container">
            <div className="App-content">
            <header className="Content-header">
                <h1><span className="Contact-color">CONTACT</span> now</h1>
            </header>
            <section className="Contact-box">
                <header className="Contact-header">
                    <h2>new message</h2>
                </header>
                <form method="post" action={`mailto:${this.state.myEmail}`} className="Contact-form" encType="text/plain">
                    <div className="form-item">
                        <div className="row">
                            <label htmlFor="myEmail" className="col-1 col-3-sm">to</label>
                            <input type="email" name="myEmail" id="Contact-myEmail" className="col-11 col-9-sm" value={this.state.myEmail}/>
                        </div>
                        <div className="row">
                            <label htmlFor="yourEmail" className="col-1 col-3-sm">from</label>
                            <input type="email" name="yourEmail" id="Contact-yourEmail" className="col-11 col-9-sm" placeholder="your email here" required/>
                        </div>
                    </div>
                    <div className="form-item row">
                        <input type="text" name="subject" id="Contact-subject" className="col-12-sm" placeholder="subject"/>
                    </div>
                    <div className="form-item row">
                        <textarea name="message" id="Contact-message" className="col-12" cols="30" rows="10"></textarea>
                    </div>
                    <input type="submit" name="send" id="Contact-send" value="send"/>
                </form>
            </section>
            </div>
        </div>
    );
  }
}

export default Contact;
import React, {Component} from 'react';

class Contact extends Component {
    render() {

        var name;
        var city;
        var state;
        var zip;
        var phone;
        var email;
        var message;

        if (this.props.data) {
            name = this.props.data.name;
            city = this.props.data.address.city;
            state = this.props.data.address.state;
            zip = this.props.data.address.zip;
            phone = this.props.data.phone;
            email = this.props.data.email;
            message = this.props.data.contactmessage;
        }

        return (
            <section id="contact">

                <div className="row section-head">

                    <div className="two columns header-col">

                        <h1><span>Get In Touch.</span></h1>

                    </div>

                    <div className="ten columns">
                        <p className="lead">{message} &nbsp;&nbsp;<span><a href="mailto:melfiroberto@gmail.com">{email}</a></span></p>
                    </div>

                </div>

                {/*
                <div className="row">
                    <div className="eight columns">

                        <form action="" method="post" id="contactForm" name="contactForm">
                            <fieldset>

                                <div>
                                    <label htmlFor="contactName">Name <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactName" name="contactName"
                                           onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                                    <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail"
                                           onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <label htmlFor="contactSubject">Subject</label>
                                    <input type="text" defaultValue="" size="35" id="contactSubject"
                                           name="contactSubject" onChange={this.handleChange}/>
                                </div>

                                <div>
                                    <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                                    <textarea cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                                </div>

                                <div>
                                    <button className="submit">Submit</button>
                                    <span id="image-loader">
                        <img alt="" src="images/loader.gif"/>
                     </span>
                                </div>
                            </fieldset>
                        </form>

                        <div id="message-warning"> Error boy</div>
                        <div id="message-success">
                            <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
                        </div>
                    </div>


                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">

                            <h4>Address and Phone</h4>
                            <p className="address">
                                {name}<br/>
                                {city} <br/>
                                {state}, {zip}<br/>
                                <span>{phone}</span><br/>
                                <span><a href="mailto:tbakerx@gmail.com">{email}</a></span>
                            </p>
                        </div>
                    </aside>
                </div>
                */}
            </section>
        );
    }
}

export default Contact;

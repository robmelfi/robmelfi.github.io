import React, {Component} from 'react';

class About extends Component {
    render() {

        let name;
        let profilepic;
        let bio;
        let city;
        let state;
        let zip;
        let phone;
        let email;
        // let resumeDownload;

        if (this.props.data) {
            name = this.props.data.name;
            profilepic = "images/" + this.props.data.image;
            bio = this.props.data.bio;
            city = this.props.data.address.city;
            state = this.props.data.address.state;
            zip = this.props.data.address.zip;
            phone = this.props.data.phone;
            email = this.props.data.email;
            // resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="Roberto Melfi Profile Pic"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br/>
                                    <span>{city}<br/>
                                          {state} {zip}
                                    </span><br/>
                                    <span>{phone}</span><br/>
                                    <span><a href="mailto:melfiroberto@gmail.com">{email}</a></span>
                                </p>
                            </div>
                            {/*
                            <div className="columns download">
                                <p>
                                    <a href={resumeDownload} className="button" target="_blank"
                                       rel="noopener noreferrer"><i className="fa fa-download"></i>Download Resume</a>
                                </p>
                            </div>
                            */}
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default About;

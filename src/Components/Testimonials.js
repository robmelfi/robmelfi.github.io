import React, {Component} from 'react';

class Testimonials extends Component {
    render() {

        let testimonials;
            if (this.props.data) {
                testimonials = this.props.data.testimonials.map(function (testimonials) {
                    return <li key={testimonials.user}>
                        <blockquote>
                            <p>{testimonials.text}</p>
                            <cite>
                                {testimonials.linkedin ? <a href={testimonials.linkedin}>&nbsp;&nbsp;{testimonials.user}</a> : testimonials.user}
                                {testimonials.linkedin ? <a href={testimonials.linkedin}>&nbsp;&nbsp;<i className="fa fa-linkedin" /></a> : null}
                            </cite>
                        </blockquote>
                    </li>
                })
            }

            return (
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">

                            <div className="two columns header-col">
                                <h1><span>Client Testimonials</span></h1>
                            </div>

                            <div className="ten columns flex-container">
                                <ul className="slides">
                                    {testimonials}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            );
        }
    }

    export
    default
    Testimonials;

import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './About.css'

class About extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
            {/* <div id="scroll-animate">
  <div id="scroll-animate-main">
    <div className="wrapper-parallax">
      <header>
        <h1>About Us</h1>
      </header> */}
      <div id="header">
            <div id="header__background">
                <div id="header__centered">
                    <h1>About Us</h1>
                </div>
            </div>
        </div>

      <section className="content">
        {/* <h1>Content</h1> */}
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mission-container text-center">
                        <h2> - Our Mission - </h2>
                        <p>To Bring Our Clients A Unique Combination Of Technologically Advanced And Comfort Solution</p>
                        <br />
                        <h2>About Us</h2>
                        <p>Nikhil Comforts is a multi-disciplinary engineering contracting organization.Operating in India since 1991, the organization is located in Mulund, Mumbai.Our business has been built on unwavering commitment to deliver quality projects, on time and within allotted budgets.We offer our clients the latest in technologies and methodologies, as well as flexible approach to contracting structures.</p>
                        <br />
                        <p>We have a team of highly experienced and qualified Project Managers, engineers and supervisors. We offer integrated suite of services right from the concept to execution.</p>
                    </div>
                </div>

                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mission-container text-center">
                        <h2> Our History </h2>
                        <p>Nikhil Comforts started off as HVAC contractor in 1991 (dealer for Carrier Aircon).

In 1st year, we did a business of INR 2Million.We hit the milestone of INR 10 Million annual turnover in the year 1995 and by the year 2000 the annual turnover soared to 100+ Millions.
In order to be one-stop solution provider, Nikhil Comforts started Electrical contracting projects in the year 2008. Since its inception, Nikhil Comforts has won numerous awards and recognition for its sales and services. 
Nikhil Comforts is proud of being amongst the Elite Carrier Willis Group. Currently Nikhil Comforts is operating as a multi-disciplinary contracting firm executing HVAC, Electrical, Plumbing, Fire-fighting, Interiors projects, Energy Consultation.
</p>
                    </div>
                </div>

                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="mission-container">
                        <h2 className="text-center">Quality Policy</h2>
                        <ul className="about-list">
                        <li>Quality Management is the pivot to all the activities carried out by us. We endeavor to provide our clientele with a truly professional approach to project delivery.</li>
                        <li>It is our policy to provide superior service to our clients by understanding and responding to their needs and expectations, helping them to choose the perfect solution suited best for their comfort. </li>
                        <li>Nikhil Comforts instills its core values of Commitment, Environmental Safety and Industrious Workmanship in our employees making them passionate to fulfil clients’ needs. </li>
                        <li>We systematically manage our projects to maximise value for all  stakeholders.</li>
                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* <footer>
        <h1>Footer</h1>
      </footer> */}
    {/* </div>
  </div>
</div> */}
                
            </div>
            </React.Fragment>
        );
    }
}

export default About;
import React, { Component } from 'react';
import './Career.css'
import {Link} from 'react-router-dom'
class Career extends Component {
    constructor(props)
  {
    super(props);
    this.state = {
    first_name : "",
    last_name : "",
    email : "",
    subject : "",
    contact_number : ""
  
    };
  }
   
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () => {
        fetch("/")
    };
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
          fetch('career/add',{

            method : "POST",
            headers : {
				'Authorization': 'Bearer' + this.state.token,
              "Content-Type" : "application/json; charset=utf-8"
            },
            body: JSON.stringify(this.state)
          }) .then(function(response){ 
            return response.json();})
        .then(function(json){
             if(json.success===true){
            //   console.log(json);
            alert("your data has been submitted");
            this.setState ({
              first_name : "",
              last_name : "",
              email : "",
             profile: "",
              contact_number : ""
  
            })
        }
        else{
          alert(json.msg);
          console.log(json);
      }
    })

      };
    render() {
        return (
            <React.Fragment>
            <div>
              <section className="career-header-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="upper-header text-center">
                            <h1>Careers</h1>
                            </div>
                        </div>
                    </div>
                    </div>
                    </section>

                    <div className="career-content">
                    <div className="container career-content-bg">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Developer</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Business</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Marketing</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <div id="accordion" class="accordion">
        <div class="card mb-0 custom-card">
            <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                <a class="card-title">
                   <strong>Front End Developer</strong>
                </a>
            </div>
            <div id="collapseOne" class="card-body collapse custom-card-body" data-parent="#accordion" >
            <h3>Job Description</h3>
            <p>At Equipshare we're looking for passionate, creative developers who are excited about solving new problems. As a web developer, you will work through the full project lifecycle to design, develop, test, implement and support our web applications. You will have the opportunity to work in a dynamic environment on highly impactful projects. </p>
            <h3>What we are looking for</h3>
            <ul>
                      	<li>Expertise with JavaScript and modern JS frameworks like Angular, React, Ember, Backbone .</li>
                      	<li>Experience writing semantic HTML5 markup and CSS3, preferably with preprocessors such as SASS / LESS</li>
                      	<li>Expertise developing web apps with responsive/adaptive design and progressive enhancement.</li>
                      	<li>Understanding of all major browsers and the special considerations required for various quirks. </li>
                      	<li>Experience with mobile web development. </li>
                      	<li>Experience with Node.js, package management (npm, Bower), and the OSS ecosystem. </li>
                      	<li>Experience with VCS and Git in particular</li>
                      	<li>A strong design sense and knowledge of how product design affects UI/UX </li>
                          <li> Strong Javascript foundation and clear understanding of Javascript classes, prototype-based inheritance, modules, etc </li>
                      </ul>
                      <h3>What we would love to see</h3>
                      <ul>
                      	<li>An active Stack Overflow and Github profile</li>
                      	<li>Prior experience with UI frameworks and javascript MVC </li>
                      	<li>Any open source code or example projects that you're proud of.</li>
                      	<li>Any other evidence of your passion for building great applications</li>
                      </ul>
              <button className="btn btn-info" data-toggle="modal" data-target=".bd-example-modal-lg">Apply Now</button>   
              <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                    <div className="career-custom-form">
             <form autoComplete="off">
  <div class="form-row">
  <div class="form-group col-md-12">
      <label for="inputPassword4">Profile</label>
      <select id="inputState" class="form-control" name="profile" value={this.state.profile} onChange = {e => this.change(e)}>
        <option selected>Choose...</option>
        <option value="FrontEnd Developer">FrontEnd Developer</option>
        <option value="BackEnd Developer">BackEnd Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" id="inputEmail4" name="first_name" value={this.state.first_name} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" id="inputPassword4" name="last_name" value={this.state.last_name} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="email" class="form-control" id="inputPassword4" name="email" value={this.state.email} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Contact Number</label>
      <input type="number" class="form-control" id="inputPassword4" name="contact_number" value={this.state.contact_number} onChange={e => this.change(e)}/>
    </div>
  </div>
  <button class="btn btn-info text-center center-block" onClick = {e => this.onSubmit(e)}>Send</button>
</form>

             </div>
                                    </div>
                                </div>
                                </div>
            </div>
            <div class="card-header collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
                <a class="card-title">
                <strong>Back End Developer</strong>
                </a>
            </div>
            <div id="collapseTwo" class="card-body collapse custom-card-body" data-parent="#accordion" >
            <h3>Job Description</h3>
            <p>At Equipshare we're looking for passionate, creative developers who are excited about solving new problems. As a web developer, you will work through the full project lifecycle to design, develop, test, implement and support our web applications. You will have the opportunity to work in a dynamic environment on highly impactful projects. </p>
            <h3>What we are looking for</h3>
            <ul>
                      	<li>Expertise with JavaScript and modern JS frameworks like Angular, React, Ember, Backbone .</li>
                      	<li>Experience writing semantic HTML5 markup and CSS3, preferably with preprocessors such as SASS / LESS</li>
                      	<li>Expertise developing web apps with responsive/adaptive design and progressive enhancement.</li>
                      	<li>Understanding of all major browsers and the special considerations required for various quirks. </li>
                      	<li>Experience with mobile web development. </li>
                      	<li>Experience with Node.js, package management (npm, Bower), and the OSS ecosystem. </li>
                      	<li>Experience with VCS and Git in particular</li>
                      	<li>A strong design sense and knowledge of how product design affects UI/UX </li>
                          <li> Strong Javascript foundation and clear understanding of Javascript classes, prototype-based inheritance, modules, etc </li>
                      </ul>
                      <h3>What we would love to see</h3>
                      <ul>
                      	<li>An active Stack Overflow and Github profile</li>
                      	<li>Prior experience with UI frameworks and javascript MVC </li>
                      	<li>Any open source code or example projects that you're proud of.</li>
                      	<li>Any other evidence of your passion for building great applications</li>
                      </ul>
              <button className="btn btn-info" data-toggle="modal" data-target=".bd-example-backend-modal-lg">Apply Now</button>   
              <div class="modal fade bd-example-backend-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                    <div className="career-custom-form">
             <form autoComplete="off">
  <div class="form-row">
  <div class="form-group col-md-12">
      <label for="inputPassword4">Profile</label>
      <select id="inputState" class="form-control" name="profile" value={this.state.profile} onChange = {e => this.change(e)}>
        <option selected>Choose...</option>
        <option value="FrontEnd Developer">FrontEnd Developer</option>
        <option value="BackEnd Developer">BackEnd Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
      </select>
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail4">First Name</label>
      <input type="text" class="form-control" id="inputEmail4" name="first_name" value={this.state.first_name} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Last Name</label>
      <input type="text" class="form-control" id="inputPassword4" name="last_name" value={this.state.last_name} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Email</label>
      <input type="email" class="form-control" id="inputPassword4" name="email" value={this.state.email} onChange={e => this.change(e)}/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Contact Number</label>
      <input type="number" class="form-control" id="inputPassword4" name="contact_number" value={this.state.contact_number} onChange={e => this.change(e)}/>
    </div>
  </div>
  <button class="btn btn-info text-center center-block" onClick = {e => this.onSubmit(e)}>Send</button>
</form>

             </div>
                                    </div>
                                </div>
                                </div>
            </div>
        </div>
    </div>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <div id="accordion" class="accordion">
        <div class="card mb-0 custom-card">
            <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                <a class="card-title">
                   <strong>Business Development Executive</strong>
                </a>
            </div>
            <div id="collapseOne" class="card-body collapse custom-card-body" data-parent="#accordion" >
            <h3>Job Description</h3>
                      <p>At Equipshare we're looking for passionate, creative civil-Mechanical engineers who are excited about 
                            disrupting a domain as old as civilisation. As a Business Operations, you will build and develop the on ground 
                            strategies for business development, operations as well as networking with a aim to bring it digital or online. 
                            You need to actually engage with equipment suppliers, contractors and various other stakeholders and try to 
                            work in a way to smoothen the flow, via enabling them to use the web-app in a more intuitive way. You will 
                            research, analyse, and identify the gap in the industry nudge the people for tech upgradation in tandem with 
                            marketing team - that serve thousands of users. You will also be responsible for monitoring and improving the 
                            reach and online presence of Equipshare to all the stakeholders. </p>
                      <h3>What we are looking for</h3>
                      <ul>
                            <li>An excellent operations manager who know how to design and evaluate process
                                    performance </li>
                                            <li>A great understanding of automobiles, hydraulics as well as machines. </li>
                                            <li> Proficiency in spoken and written English & local language proficiency is must</li>
                                            <li> Excellent communication and presentation skills </li>
                                            <li> Ability to negotiate with local vendors and build relationships </li>
                                            <li> Natural aptitude in sales / business development is must</li>
                                            <li>Interest in Real estate, Infrastructure as well e-commerce </li>
                                            <li> Should be mobile within the city i.e. should have their own vehicle for local transport</li>
                                            <li> Well versed with productivity tools - Microsoft Word, Powerpoint and Excel</li>
                                            <li> Self Initiator and take new projects, plan and execute locally relevant partnerships and deals
                                    for market activation</li>
                                            <li> Identify potential leads in market, through online and offline sources, and help the team</li>
                                            <li> Identify vendors that can take on additional responsibilities within the market and about
                                    sharing of equipments &amp; getting idle equipment</li>
                      </ul>
                      <h3>What we would love to see</h3>
                      <p>An active individual who is always searching opportunities for growth  
                            Currently doing a part time job or part of some startup  
                            Part of any active collegiate chapter, forum or cell 
                            Having aspiration of founder of any startup as well change you want to bring? 
                            </p>
              <button className="btn btn-info">Apply Now</button> 
            </div>
        </div>
    </div>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <div id="accordion" class="accordion">
        <div class="card mb-0 custom-card">
            <div class="card-header collapsed" data-toggle="collapse" href="#collapseOne">
                <a class="card-title">
                   <strong> Technology Marketing</strong>
                </a>
            </div>
            <div id="collapseOne" class="card-body collapse custom-card-body" data-parent="#accordion" >
            <h3>Job Description</h3>
                      <p>At Equipshare we're looking for passionate, creative civil engineers who are excited about disrupting a domain as old as civilisation. As a Marketing manager, you will build and take marketing responsibility for the Equipshare tech platform and work with a multitude of internal and external resources. You will research, analyse, create and curate content, communicate the need & advantages as well engage with mass audience via both offline and online mode - that serve thousands of users. You will also be responsible for monitoring and improving the reach and online presence of Equipshare to all the stakeholders.</p>
                      <h3>What we are looking for</h3>
                      <ul>
                      	<li>Great interest in construction management & deep fundamentals in planning, organising, scheduling as well budgeting of construction projects</li>
                      	<li>Excellent market research aptitude - W hich project, its location, developer, contractor & its various connects as well equipments needed, their comparison on various parameters, and new upcoming tech</li>
                      	<li>Global benchmarking about construction practices, technology as well as the indigenisation</li>
                      	<li>Growth Trends - T rends of infra, real estate and industrial growth and accordingly manage the supplies </li>
                      	<li>Reaching to new projects: through online, offline as well with networking & Cold Calling for converting them for the business</li>
                      	<li>Engage with the mass audience to convey the idea of Equipshare with a impact</li>
                      	<li>Work with web-app tech team to give them the specific pain or project need</li>
                      	<li>Well versed with digital marketing tool</li>
                      </ul>
                      <h3>What we would love to see</h3>
                     <p>An active blog or quora account Prior internship in construction firms, in planning dept Part of any active collegiate chapter, forum or cell Having aspiration of founder of any startup as well change you want to bring?</p>
              <button className="btn btn-info">Apply Now</button>         
            </div>
        </div>
    </div>

  </div>
</div>
                        </div>
                    </div>
                    </div>
                </div>

            <div className="custom-modal-here">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {/*modal here */}
                         
                                {/* <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button> */}

                                {/* <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                    ...
                                    </div>
                                </div>
                                </div> */}

                            {/*end modal here */}
                        </div>
                    </div>
                </div>

            </div>
             
            </div>
            </React.Fragment>
        );
    }
}

export default Career;
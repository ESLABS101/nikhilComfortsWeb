import React, { Component } from 'react';
import './Projects.css'

class Projects extends Component {
    render() {
        return (
            <div>
                <div className="project-content">
                    <div className="container">
                        <div className="row">
                        <div className="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="custom-btn-upper text-center center-block">
                        {/* <button type="button" class="btn btn-primary">Primary</button>
                        <button type="button" class="btn btn-info">Info</button> */}

<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-testimonial" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-project" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
</ul>
 </div>
                        </div>
                        </div>
                        </div>


<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-testimonial">
{/*here recursion */}
<div className="custom-below-content">
                        <div className="container-fluid">
                        <div className="custom-white-bg">
                        <div className="row">
                        
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#customer-test" role="tab" aria-controls="v-pills-home" aria-selected="true">CUSTOMER TESTIMONIALS</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#certificate" role="tab" aria-controls="v-pills-profile" aria-selected="false">CERTIFICATION</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#recognition" role="tab" aria-controls="v-pills-messages" aria-selected="false">RECOGNITION</a>
</div>
</div>
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="customer-test" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <p>"They are attending the complaints according to the requirement and they cater services for quarter promptly, sufficient resources available to render services to the needful."</p>
  <p className="text-right"><strong>....One of the leading hotel chains in India</strong></p>
  <br/><br/>
  <p>"Also observed Toshiba Inverter air conditioners are most energy efficient where we are saving ₹ 15000 on power bills monthly against previous air conditioner."</p>
  <p className="text-right"><strong>....One of the oldest chain of stores in Hyderabad</strong></p>
  <br /><br />
  <p>"The services provided by maintenance (service team) is outstanding and awesome"</p>
  <p className="text-right"><strong>....One of the largest retail chain outlets in India</strong></p>
  <p>"Also observed Toshiba SMMS air conditioners are most energy efficient."</p>
  <p className="text-right"><strong>....One of leading hospital chains for women in Hyderabad</strong></p>
  </div>
  <div class="tab-pane fade" id="certificate" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <div className="certificate-img">
    <img src = {require('../img/certificate.jpg')} className="img-fluid" />
    </div>

  </div>
  <div class="tab-pane fade" id="recognition" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div className="recognition-img">
    <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src = {require('../img/recognition1.jpg')} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src= {require('../img/recognition2.jpg')} className="img-fluid" />   
        </div> 
        </div>
    </div>

  </div>
</div>

                        </div>
                       </div>
                       </div>
                    </div>
                </div>
{/*end recursion*/}



  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-project">
    {/*here recursion */}
<div className="custom-below-content">
                        <div className="container-fluid">
                        <div className="custom-white-bg">
                        <div className="row">
                        
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">RESIDENTIAL APARTMENTS</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">COMMERCIAL</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">HOSPITALITY</a>
</div>
</div>
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <p>"They are attending the complaints according to the requirement and they cater services for quarter promptly, sufficient resources available to render services to the needful."</p>
  <p className="text-right"><strong>....One of the leading hotel chains in India</strong></p>
  <br/><br/>
  <p>"Also observed Toshiba Inverter air conditioners are most energy efficient where we are saving ₹ 15000 on power bills monthly against previous air conditioner."</p>
  <p className="text-right"><strong>....One of the oldest chain of stores in Hyderabad</strong></p>
  <br /><br />
  <p>"The services provided by maintenance (service team) is outstanding and awesome"</p>
  <p className="text-right"><strong>....One of the largest retail chain outlets in India</strong></p>
  <p>"Also observed Toshiba SMMS air conditioners are most energy efficient."</p>
  <p className="text-right"><strong>....One of leading hospital chains for women in Hyderabad</strong></p>
  </div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <div className="certificate-img">
    <img src = {require('../img/certificate.jpg')} className="img-fluid" />
    </div>

  </div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div className="recognition-img">
    <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src = {require('../img/recognition1.jpg')} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src= {require('../img/recognition2.jpg')} className="img-fluid" />   
        </div> 
        </div>
    </div>

  </div>
</div>

                        </div>
                       </div>
                       </div>
                    </div>
                </div>
{/*end recursion*/}


  </div>
</div>



                      

                           
                        {/* <div className="custom-below-content">
                        <div className="container-fluid">
                        <div className="custom-white-bg">
                        <div className="row">
                        
                        <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
  <a class="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">CUSTOMER TESTIMONIALS</a>
  <a class="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">CERTIFICATION</a>
  <a class="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">RECOGNITION</a>
</div>
</div>
<div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
<div class="tab-content" id="v-pills-tabContent">
  <div class="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
    <p>"They are attending the complaints according to the requirement and they cater services for quarter promptly, sufficient resources available to render services to the needful."</p>
  <p className="text-right"><strong>....One of the leading hotel chains in India</strong></p>
  <br/><br/>
  <p>"Also observed Toshiba Inverter air conditioners are most energy efficient where we are saving ₹ 15000 on power bills monthly against previous air conditioner."</p>
  <p className="text-right"><strong>....One of the oldest chain of stores in Hyderabad</strong></p>
  <br /><br />
  <p>"The services provided by maintenance (service team) is outstanding and awesome"</p>
  <p className="text-right"><strong>....One of the largest retail chain outlets in India</strong></p>
  <p>"Also observed Toshiba SMMS air conditioners are most energy efficient."</p>
  <p className="text-right"><strong>....One of leading hospital chains for women in Hyderabad</strong></p>
  </div>
  <div class="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
    <div className="certificate-img">
    <img src = {require('../img/certificate.jpg')} className="img-fluid" />
    </div>

  </div>
  <div class="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
    <div className="recognition-img">
    <div className="row">
    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src = {require('../img/recognition1.jpg')} className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <img src= {require('../img/recognition2.jpg')} className="img-fluid" />   
        </div> 
        </div>
    </div>

  </div>
</div>

                        </div>
                       </div>
                       </div>
                    </div>
                </div> */}
                </div>
                
            </div>
        );
    }
}

export default Projects;
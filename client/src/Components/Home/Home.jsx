import React, { Component } from 'react'
import './Home.css';
import {Link} from 'react-router-dom';
// import './slider';
export class Home extends Component {
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
        //   if (
        //     this.state.category === "" ||
        //     this.state.subcategory === "" ||
        //     this.state.company === "" ||
        //     this.state.model === "" ||
        //     this.state.manufacturing_year === ""
           
        //  ) {
        //     alert("Unable to contact because fields were left blank");
        //     }else {
        //         fetch(`/contact`,{
        //             method : "POST",
        //             headers : {
        //                 "Content-Type": "application/json; charset=utf-8"
        //             },
        //             body: JSON.stringify(this.state)
        //         }
        //         ).then(this.getWebsite);
        //       }
          this.setState ({
            first_name : "",
            last_name : "",
            email : "",
            subject : "",
            contact_number : ""

          })
          //replace /contact with server url
          fetch('partner/add',{

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
        }
        else{
          alert(json.msg);
          console.log(json);
      }
    })

      };
  render() {
    return (
      <div>
          <div>
    {/*SLIDER HERE */}
      <div className="background-img-custom" id="home">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h3>Your <span className="custom-inner-header"><strong>Comfort Partner</strong></span></h3>
            <button type="button" className="btn btn-primary btn-custom-radius">LEARN MORE</button>
            </div>
          </div>
        </div>

      </div>



    {/* END SLIDER HERE */}
    {/*upper four boxes */}
      {/* <section className="custom-upper-boxes">
        <div className="container">
          <div className = "row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>

             <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 custom-three-parent-padd">
                <div className="custom-inner-boxes">
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                      <span class="badge badge-primary custom-badge">1</span>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 custom-parent-col-padd">
                        <p><strong>Money Care</strong></p>
                        <p>Lorem Ipsum Dolor Simit</p>
                      </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section> */}
    {/*end upper four boxes */}
      
    {/* offer section */}
        <section className = "service-nikhil-content" id="service">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <h2 className="text-center">OUR SERVICES</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
            </div>

            </div>
              <div className="row">
                <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                 <Link to="/HVAC"> <div className="custom-offer-box text-center">
                  <i className="fa fa-thermometer-empty" aria-hidden="true"></i>
                      <h4>HVAC</h4>
                      <p>Airconditioning and ventillation design of commerical and residential is our core business and successfully pursuing this since last 25+ years</p>
                  </div></Link>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                 <Link to="/MEP"> <div className="custom-offer-box text-center">
                  <i class="fa fa-fire-extinguisher" aria-hidden="true"></i>
                      <h4>MEP</h4>
                      <p>Be it firefighting and basic mechanical arrangement or Electrical or plumbing Job we know it best to get it done peacefully </p>
                  </div></Link>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <Link to="Retrofiting">  <div className="custom-offer-box text-center">
                  <i className="fa fa-wrench" aria-hidden="true"></i>
                      <h4>Retroffiting </h4>
                      <p>Refurbishing the existing sites with newer set of consumables and equipments which are energy efficient and enable you to comply leeds certification </p>
                  </div></Link>
                </div>

              <div className="row custom-featured-row">
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <Link to="Interiors">  <div className="custom-offer-box text-center">
                  <i className="fa fa fa-plug" aria-hidden="true"></i>
                      <h4>Interiors</h4>
                      <p>Solutions ranging from clean air to purifiend water by using state of art installations of equipment in your premise </p>
                  </div></Link>
                </div>

                  <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <Link to="/BMS">  <div className="custom-offer-box text-center">
                  <i className="fa fa-bullhorn" aria-hidden="true"></i>
                      <h4>Building Management System</h4>
                      <p className="bms-para">A building management system (BMS) is a control system that can be used to monitor and manage the mechanical, electrical and electromechanical services in a facility. Such services can include power, heating, ventilation, air-conditioning, physical access control, pumping stations, elevators and lights.</p>
                  </div></Link>
                </div>

                 <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
               <Link to="/Energy">   <div className="custom-offer-box text-center">
                  <i className="fa fa-tint" aria-hidden="true"></i>
                      <h4>Energy Consultation </h4>
                      <p>Sustainabilty is one of the core agenda of the day and here comes our expert team who can enable you to Go green by using less energy </p>
                  </div></Link>
                </div>
              </div>



              </div>





          </div>
        </section>



    {/* end offer section */}
    {/*choose us section */}
      <section className="choose-us">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <h2 className="text-center">Why Choose Us</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
            <hr className="below-header-hr"></hr>
            </div>
          </div>
        </div>
      </section>
    {/* end choose us section*/}
    {/*choose us blocks*/}
    <section className="choose-blocks">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
          <div className="blocks">
          <i class="fa fa-tachometer" aria-hidden="true"></i>
           <h5>Fastest Service</h5>
           <p>Nikhil Comforts has the proficiency and skilled workforce to deliver value to its clients for their various needs at a lightening speed.</p>
          </div>
          </div>

           <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
          <div className="blocks">
          <i class="fa fa-user" aria-hidden="true"></i>
           <h5>Adherence to Schedule</h5>
           <p>We are committed to do our projects within the time bounded period with excellence.</p>
          </div>
          </div>

           <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
          <div className="blocks">
          <i class="fa fa-life-ring" aria-hidden="true"></i>
           <h5>Awesome Support</h5>
           <p>Due to valuable support from our clients, we have very strong financial strength and stability.</p>
          </div>
          </div>

           <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 text-center">
          <div className="blocks">
          <i class="fa fa-university" aria-hidden="true"></i>
           <h5>Pursuit To Excellence</h5>
           <p>Fulfilling our promise to provide best services with maintained quality for their money spent.</p>
          </div>
          </div>
        </div>
      </div>

    </section>
    {/*end blocks */}
    {/*custom counter */}
    {/* <section class="custom-clients text-center  ">
            <div class="container">
                <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="300" data-speed="1500"></h2>
       <p class="count-text ">Our Clients</p>
    </div>

   <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="1700" data-speed="1500"></h2>
      <p class="count-text ">Projects</p>
    </div>

   <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="11900" data-speed="1500"></h2>
      <p class="count-text ">Happy Clients</p>
    </div>

    <div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
      <h2 class="timer" data-to="157" data-speed="1500"></h2>
      <p class="count-text ">Our Domestic Projects</p>
    </div>
</div>
                    </div>
                </section> */}
    {/*end custom counter */}
     {/*software solutions */}
     <div className="software-solution" id="portfolio">
          <div className="container">
            <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <h2 className="text-center">Our Projects</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
            <hr className="below-header-hr"></hr>
            </div>

            </div>

            <div className="row custom-second-row">
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="custom-images-featured">
                <img src = {require('../img/work1.jpg')} className="img-fluid image"/>
                <div className="overlay">
                  <div className="text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
                </div>
              </div>
            </div>

               <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="custom-images-featured">
                <img src = {require('../img/work6.jpg')} className="img-fluid image"/>
                <div className="overlay">
                  <div className="text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
              </div>
            </div>
            </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="custom-images-featured">
                <img src = {require('../img/work3.jpg')} className="img-fluid image"/>
                <div className="overlay">
                  <div className="text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
              </div>
            </div>
            </div>
            
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
              <div className="custom-images-featured">
                <img src = {require('../img/work4.jpg')} className="img-fluid image"/>
                <div className="overlay">
                  <div className="text">
                  <i className="fa fa-search" aria-hidden="true"></i>
                  </div>
              </div>
            </div>
            </div>

            </div>
          </div>
          </div>
      {/*end softwae solutions */}
    {/* Pricing plan
      <div className="pricing-content" id="price">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2 className="text-center">Pricing Table</h2>
              <hr className="below-header-hr"></hr>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>basic plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>silver plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
             <div className="plan-custom-box text-center center-block">
              <h5>gold plan</h5>
              <div className="price-border">
              <h1>$19</h1>
              <h5><strong>/ month</strong></h5>
              </div>
              <p>1 GB Disk Space</p>
              <p>100 Email Account</p>
              <p>24 / 24 Support</p>
              <button type="button" className="btn btn-outline-primary">Purchase Now</button>
             </div> 
            </div>
          </div>
        </div>
      </div>
 */}

    {/*end pricing plan*/}
    {/*client slider */}
      <section className="custom-client-slider text-center">
      <div className="container-fluid">
      <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <h2 className="text-center">Our Clients</h2>
            <p>It is a long established fact that a reader will be distracted by the</p>
            <hr className="below-header-hr-contact"></hr>
      {/* <div class="customer-logos slider">
        
      <div class="slide"><img src={require('../img/logos/image1.png')} className="img-fluid"/></div>
      <div class="slide"><img src={require('../img/logos/image2.png')} className="img-fluid"/></div>
      <div class="slide"><img src={require('../img/logos/image3.png')} className="img-fluid"/></div>
      <div class="slide"><img src={require('../img/logos/image4.png')} className="img-fluid"/></div>
      <div class="slide"><img src={require('../img/logos/image5.png')} className="img-fluid"/></div>
      <div class="slide"><img src={require('../img/logos/image6.png')} className="img-fluid"/></div>
      <div class="slide"><img src={require('../img/logos/image7.png')} className="img-fluid"/></div>
      <div class="slide"><img src={require('../img/logos/image8.png')} className="img-fluid"/></div>
   </div> */}
   <div id="blogCarousel" class="carousel slide" data-ride="carousel">
                       
                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="row">                               
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require('../img/logos/image1.png')} alt="Image"/>
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image2.png")} alt="Image" />
                                          
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                      
                                            <img className="img-fluid" src={require("../img/logos/image3.png")} alt="Image"  />
                                          
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image4.png")} alt="Image"  />
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                       <img className="img-fluid" src={require("../img/logos/image2.png")} alt="Image" />
                                     
                                  
                               </div>
                               <div class="col-md-2 eckcon">
                                      
                                      <img className="img-fluid" src={require("../img/logos/image3.png")} alt="Image"  />
                                    
                                 
                              </div>
                                    
                                </div>
                               
                            </div>
                           
                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image5.png")} alt="Image"  />
                                           
                                    </div>
                                    <div class="col-md-2 eckcon">
                                    
                                            <img className="img-fluid" src={require("../img/logos/image6.png")} alt="Image" />
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                      
                                            <img className="img-fluid" src={require("../img/logos/image7.png")} alt="Image"/>
                                           
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                            <img className="img-fluid" src={require("../img/logos/image8.png")} alt="Image"/>
                                           
                                       
                                    </div>
                                    <div class="col-md-2 eckcon">
                                       
                                       <img className="img-fluid" src={require("../img/logos/image5.png")} alt="Image"  />
                                      
                               </div>
                               <div class="col-md-2 eckcon">
                                    
                                    <img className="img-fluid" src={require("../img/logos/image6.png")} alt="Image" />
                                   
                               
                            </div>
                                </div>
                               
                            </div>
                         

                        </div>
                       
                    </div>
   </div>
   </div>
   </div>
      </section>
    {/*end client silder */}
    {/*get in touch*/}
      <div className="contact-content" id="contact">
        <div className="container">
          <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <h2 className="text-center">Partner With Us</h2>
            <p>Get An Oppurtunity to Work With Us</p>
            <hr className="below-header-hr-contact"></hr>
            </div>
          </div>  

          <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 custom-headers">
             <div className="custom-form">
             <form>
  <div class="form-row">
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
    <div class="form-group col-md-12">
      <label for="inputPassword4">Subject</label>
      <textarea className="form-control" name="subject" value={this.state.subject} onChange={e => this.change(e)}></textarea>
    </div>
  </div>
  <button class="btn btn-light text-center center-block" onClick = {e => this.onSubmit(e)}>Send</button>
</form>

             </div>
              </div>


          </div>
          <div className="row custom-second-row">
            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-contact-content-upper text-center">
              <i className="fa fa-phone fa-2x" aria-hidden="true"></i>
              <h4>Phone</h4>
              <p>512-423-7896</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-contact-content-upper text-center">
              <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
              <h4>Email</h4>
              <p>johndoe@gmail.com</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
              <div className="custom-contact-content-upper text-center">
              <i className="fa fa-map-marker fa-2x" aria-hidden="true"></i>
              <h4>Address</h4>
              <p>1739 - Bubby - Drive</p>
              </div>
            </div>
          </div>




        </div>
      </div>
    {/*end get in touch */}
          
          </div>
        
      </div>
    )
  }
}
export default Home
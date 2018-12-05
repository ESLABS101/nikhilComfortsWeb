import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Blog.css'
class Blog extends Component {
    render() {
        return (
            <React.Fragment>
            <div>
              <div className="blog-header-bg">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                        <h1>Blog</h1>
                    </div>
                    </div>
                </div>
              </div>  

              <div className="blog-content">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                    <div className="blog-left-content">
                    <div className="row">
                       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog1.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog2.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                       <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog3.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                       <div class="card custom-blog-card">
  <img class="card-img-top" src={require('../img/blog2.jpg')} alt="Card image cap" />
  <div class="card-body">
    <h4>Blog Title </h4>
    <hr />
    <i className="fa fa-user-circle" aria-hidden="true"></i>&nbsp;&nbsp;<strong>Admin</strong>
    <br /><br />
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    {/* <p className="blog-hover-para">Read More&nbsp;&nbsp; <i className="fa fa-arrow-circle-right" aria-hidden="true"></i></p> */}
    <button type="button" className="btn btn-primary blog-hover-para">Read More &nbsp;<i className="fa fa-arrow-circle-right" aria-hidden="true"></i></button>
  </div>
</div> 
                       </div> 

                                            </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="blog-right-content">
                <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">LATEST</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">TOP</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">FEATURED</a>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
  <div className="side-blog-custom-content">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
      <hr />
      </div>

       <div className="side-blog-custom-content2">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
      <hr />
      </div>

       <div className="side-blog-custom-content2">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
    
      </div>
  </div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
  <div className="side-blog-custom-content">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
      <hr />
      </div>

       <div className="side-blog-custom-content2">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
      <hr />
      </div>

       <div className="side-blog-custom-content2">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
     
      </div>

  </div>
  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
  <div className="side-blog-custom-content">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
      <hr />
      </div>

       <div className="side-blog-custom-content2">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
      <hr />
      </div>

       <div className="side-blog-custom-content2">
  <div className="row">
      <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
          <img src={require('../img/post1.jpg')}/>  
      </div>
      <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <p>Praesent sapien massa, convallis a pellentesque nec.</p>
          
      </div>
      </div>
     
      </div>
  </div>
</div>
                </div>

                <div className="blog-right-slider">
                <p><strong>featured video</strong></p>
                <hr />
                <div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
                </div>

                <div className="blog-right-slider">
                <p><strong>Signup To Our Newsletter</strong></p>
                <hr />
                <form>
                <input type="text" className="form-control" placeholder="Enter Email-Id"/>
                <button type="button" className="btn btn-success custom-blog-btn form-control">SEND</button>
                </form>
                </div>
              </div>
            </div>  
            </div>
            </div>
            </div>
            </React.Fragment>
        );
    }
}

export default Blog; 
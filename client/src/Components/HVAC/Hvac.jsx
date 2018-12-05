import React, { Component } from 'react';
import './Hvac.css';
import {Link} from 'react-router-dom';

class Hvac extends Component {
    render() {
        return (
            <div>
                {/*bradcrumb */}
                    <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Hvac</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="hvac-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>HVAC Services</h3>
                                    <p>
Weather is seasonal but comfort should be constant. 
 
Our trusted heating and air-conditioning systems provide energy-saving, sustainable, quiet and consistent comfort to millions of people at home and office. 

The aim of Nikhil Comforts is to provide optimized application and integration of products and adopting fair process for timely delivery and quality.

The advantage of HVAC division over others emerges from the strength in project management, multi-disciplined design engineers and usage of latest design tools and technologies. 
</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>Air Distribution system</li>
                    <li>Chilled Water System (air cooled/water cooled)</li>
                    <li>DX splits</li>
                    <li>VRV/VRF</li>
                    <li>Heating</li>
                    <li>Ventilation</li>
                    <li>Precision Air conditioning</li>
                    <li>Insulation Work</li>
                    </ul>

                    </div>

                    <div className="custom-hvac-middle-para text-center">
                    <p>The HVAC division of the company has shown exponential growth over time. Over the years, we have developed a strong team to offer design, build and service support solutions. 

With a highly specialized and experienced team of engineers, supervisors, technicians and domain experts, we have completed various projects with specialization in different fields with safety, cost, time bound and quality adherence.  

Also we have a proven track record of implementing successful projects for a multitude of clientele operating in retail, commercial, and hospitality sectors besides complying with our esteemed clients’ budget and time bound projects. 
</p>

                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/*end content*/}
                
            </div>
        );
    }
}

export default Hvac;
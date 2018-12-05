import React, { Component } from 'react';
import './Firefighting.css';
import {Link} from 'react-router-dom';
class Energy extends Component {
    render() {
        return (
            <div>
                 {/*bradcrumb */}
                 <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Energy Consultation</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="fire-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>Energy Consultation</h3>
                                    <p>In this era, where 40% of the energy is consumed by the buildings, energy conservation becomes mandatory. Hence Nikhil Comforts ensures development of efficient and sustainable buildings.

Public Health Engineering department has contributed to a major part of Nikhil Comforts since its time of establishment.
</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                   <p className="text-center">During our period of growth, we have developed a strong relationship with our clientele due to the excellence in our approach of detailed planning, professional execution and long term support. Our solutions deliver industry-leading performance efficiently with less energy and lower environmental impact.

Understanding that proper building control and maintenance can help manage costs and maintain high standards for energy efficiency, we provide services needed for optimal performance in minimum time. 

<em>Nikhil Comforts’</em> solutions are designed to meet the requirements of a variety of building types and applications. 
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

export default Energy;
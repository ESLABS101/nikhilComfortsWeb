import React, { Component } from 'react';
import './PHE.css';
import {Link} from 'react-router-dom';

class Retrofiting extends Component {
    render() {
        return (
            <div>
                {/*bradcrumb */}
                <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">Retrofiting</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="phe-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>Retrofiting Services</h3>
                                    <p>The blueprints for sustainable buildings require the industry’s leading energy-efficient and environment-friendly products and Leadership in Energy and Environmental Design (LEED®) green building practices.

In present time, when Technology is upgrading briskly and vying for it is not an easy task, Retrofitting comes to the rescue.

Adapting the latest technologies, Optimising the resource usage are some fields that everyone looks for. And the Retrofitting offered by Nikhil Comforts is the One Stop solution to all of it.

Doing our work with perfection includes Environmental Consciousness, which is reinforced by retrofitting, giving us the drive to do it even better.

</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                {/* <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                    <ul>
                    <li>Water supply system</li>
                    <li>Drainage system (Sewage/ Storm)</li>
                    <li>Pumping System/ Hydro pneumatic system</li>
                    <li>Water Treatment Plant</li>
                    <li>Sewage Treatment Plant</li>
                    <li>Effluent Treatment Plant</li>
                    </ul>
                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                {/*end content*/}
                
                
            </div>
        );
    }
}

export default Retrofiting;
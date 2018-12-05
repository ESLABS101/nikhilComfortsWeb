import React, { Component } from 'react';
import './Electrical.css';
import {Link} from 'react-router-dom';

class MEP extends Component {
    render() {
        return (
            <div>
                 {/*bradcrumb */}
                 <div className="beradcrumb">
                    <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><Link to ="/">Home</Link></li>
                    <li class="breadcrumb-item active" aria-current="page">MEP</li>
                </ol>
                </nav>
                    </div>
                {/*end breadcrumb */}
                {/*content*/}
                <div className="electric-parallax">
                </div>
                    <div className="hvac-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                    <h3>MEP Services</h3>
                                    <p>Since its inception, Nikhil Comforts has provided wide range of solutions for mechanical, electrical and plumbing systems. 

Our Fire Fighting Division is led by a professionally qualified team in the area of life and property safety in accordance with standards and regulations. Our fire fighting services include: 
</p>
                                    <hr className="below-header-hr"></hr>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="hvac-custom-li">
                                <ul>
                    <li>Hydrants</li>
                    <li>Wet Sprinklers</li>
                    <li>Pumping/piping systems</li>
                    <li>Pre-action systems</li>
                    <li>Medium velocity system</li>
                    <li>High velocity system</li>
                    <li>Hand appliances</li>
                    <li>Industrial Piping</li>
                    </ul>
                    {/* <ul>
                    <li>HT/LT Distribution</li>
                    <li>Distribution /Power Panels</li>
                    <li>Distribution Boards / Switchgears</li>
                    <li>Light / Power point / UPS point wiring</li>
                    <li>Raceways / Cable Trays /GI Trunk etc.</li>
                    <li>Light Fixtures / Switch Sockets</li>
                    <li>Chemical/Bore Earthing etc.</li>
                    </ul> */}
                    </div>

                    <p><strong>Our Electrical Services include : </strong></p>

                    <div className="hvac-custom-li">
                    <ul>
                    <li>HT/LT Distribution</li>
                    <li>Distribution /Power Panels</li>
                    <li>Distribution Boards / Switchgears</li>
                    <li>Light / Power point / UPS point wiring</li>
                    <li>Raceways / Cable Trays /GI Trunk etc.</li>
                    <li>Light Fixtures / Switch Sockets</li>
                    <li>Chemical/Bore Earthing etc.</li>
                    </ul>

                    </div>

                    <p>Also our engineers are experts in plumbing jobs, in usage of water, disposal of water, hygiene and the conservation of environment. <strong>Our plumbing services are : </strong></p>
                    <div className="hvac-custom-li">
                    <ul>
                    <li>Water supply system</li>
                    <li>Drainage system (Sewage/ Storm)</li>
                    <li>Pumping System/ Hydro pneumatic system</li>
                    <li>Water Treatment Plant</li>
                    <li>Sewage Treatment Plant</li>
                    <li>Effluent Treatment Plant</li>
                    </ul>

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

export default MEP
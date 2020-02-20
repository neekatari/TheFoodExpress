import React from 'react';
import './admin.css';


class Admin_Master extends React.Component{
    render(){
        return(
            
             <div className="">
             <div className="jumbotron" style={{paddingtop:"30px",paddingBottom:"20px", background:"#ff0000"}}>
             
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist" style={{marginTop:"30px"}}>
                <li class="nav-item">
                    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Manage user</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Manage shop-owner</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Manage package</a>
                </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...</div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
                </div>
                </div>
            </div>
              
           
        )
    }

    
}

export default Admin_Master;
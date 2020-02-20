import React from 'react'
import './Owner_images/one.jpg'
import './Owner_images/two.jpg'
import './Owner_images/three.jpg'



class Owner_dashboard extends React.Component {
    render() {
        return (
            <div style={{marginTop:'60px'}}>
                    <div className=" row col-md-12" >
                    <div className="" style={{paddingTop:'14px', paddingLeft:'50px'}}>
                        <i class="fa fa-dashboard" style={{fontSize:'40px'}}></i>
                        </div>
                        <div className="" style={{padding:'10px'}}   >
                        <h2 className="" >Dashboard</h2>
                        </div>
                    </div>
                <div className='container-fluid jumbotron jumbo' style={{marginTop:'-30px'}}>
                    <div className='row'>
                    
                        <div className='col-md-8' style={{ padding: '0px', marginTop:'10px'  , boxShadow: 'gray 5px 8px 10px 0.2px'}}>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img class="d-block w-100" src={require("./Owner_images/one.jpg")}  alt="First slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={require("./Owner_images/two.jpg")}  alt="Second slide" />
                                    </div>
                                    <div class="carousel-item">
                                        <img class="d-block w-100" src={require("./Owner_images/three.jpg")}  alt="Third slide" />
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className='col-md-4'>
                        <div className="col-md-12 row">
                            <div className="col-md-6">
                               <div className='col-md-12 btn btn-success' style={{ padding: '30px' ,marginTop:'10px', boxShadow: 'gray 5px 5px 10px 0.2px'}} >
                                    <div className='row'>
                                        <div className="col-md-4">
                                        <i className="fa fa-file-text" style={{fontSize:'60px'}}></i>
                                        </div>
                                        <div className="col-md-7">
                                            <h4>Summary</h4>
                                            <h4>
                                                Report
                                            </h4>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div className="col-md-6">
                               <div className='col-md-12 btn btn-danger' style={{ padding: '30px' ,marginTop:'10px', boxShadow: 'gray 5px 5px 10px 0.2px'}} >
                                    <div className='row'>
                                        <div className="col-md-4">
                                        <i className="fa fa-file-text" style={{fontSize:'60px'}}></i>
                                        </div>
                                        <div className="col-md-7">
                                            <h4>Summary</h4>
                                            <h4>
                                            Report
                                            </h4>
                                        </div>
                                    </div>
                               </div>
                            </div>  
                        </div>
                        <div className="col-md-12 row" style={{marginTop:'20px'}}>
                            <div className="col-md-6">
                               <div className='col-md-12 btn btn-info' style={{ padding: '30px' ,marginTop:'10px' , boxShadow: 'gray 5px 5px 10px 0.2px'}} >
                                    <div className='row'>
                                        <div className="col-md-4">
                                        <i className="fa fa-file-text" style={{fontSize:'60px'}}></i>
                                        </div>
                                        <div className="col-md-7">
                                            <h4>Summary</h4>
                                            <h4>
                                            Report
                                            </h4>
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div className="col-md-6">
                               <div className='col-md-12 btn btn-outline-warning' style={{ padding: '30px' ,marginTop:'10px' , boxShadow: 'gray 5px 5px 10px 0.2px'}} >
                                    <div className='row'>
                                        <div className="col-md-4">
                                        <i className="fa fa-file-text" style={{fontSize:'60px'}}></i>
                                        </div>
                                        <div className="col-md-7">
                                            <h4>Summary</h4>
                                            <h4>
                                            Report
                                            </h4>
                                        </div>
                                    </div>
                               </div>
                            </div>  
                        </div>
                        </div>
                        

                    </div>

                </div>



            </div>
        )
    }
}




export default Owner_dashboard;
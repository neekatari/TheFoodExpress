import React, { Component } from 'react';

class Body extends Component{

    render() {  
        return(
            <div>
            
                <div className="banner_w3lspvt">
                    <div className="csslider infinity" id="slider1">
                        <input type="radio" name="slides" checked="checked" id="slides_1" />
                        <input type="radio" name="slides" id="slides_2" />
                        <ul className="banner_slide_bg">
                            <li className="slider-style">
                                <div className="container-fluid" style={{marginBottom: "300px"}}>
                                    <div className="w3ls_banner_txt">
                                        <p className="text-uppercase">Hungry..?</p>
                                        <h3 className="w3ls_pvt-title text-wh let mb-3">Yes : Then make your order online with us</h3>

                                        <p className="text-uppercase">We are providing best service in this campus</p>
                                        
                                    
                                    </div>
                                </div>
                            </li>
                            <li className="slider-style">
                                <div className="container-fluid" style={{marginBottom: "300px"}}>
                                    <div className="w3ls_banner_txt">
                                        <p className="text-uppercase">Hungry..?</p>
                                        <h3 className="w3ls_pvt-title text-wh let mb-3">Yes : Then make your order online with us</h3>
                                        
                                        <p className="text-uppercase">We are providing best service in this campus</p> 
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="arrows">
                            <label for="slides_1"></label>
                            <label for="slides_2"></label>
                        </div>
                    </div>
                </div>
        
	        </div>
          
        )
    }

}

export default Body;
import React,{ Component } from 'react';

class Footer extends Component{
    render() {
        return (
            <div>
                <footer>
                    <div className="w3ls-footer-grids py-4">
                        <div className="container-fluid py-lg-3">
                            <div className="d-md-flex">
                                <div className="col-md-4 w3l-footer-logo">
                                    
                                    <h2>
                                        <a className="logo-2" href="index.html">The FoodExpress</a>
                                    </h2>
                                    
                                </div>
                                <div className="col-md-8 w3l-footer text-md-right text-center mt-3">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>

                <div className="copy-bottom py-4">
                    <div className="container-fluid">
                        <div className="d-sm-flex px-md-3">
                            
                            <div className="copy_right mr-auto">
                                <p className="text-bl let">© 2019 The Food Express. All rights reserved | Design by 
                                    <a href="./" target="_blank"> Nilkanth & Shweta</a>
                                </p>
                            </div>
                            
                            <div className="social-icons-footer mt-sm-0 mt-3">
                                <ul className="list-unstyled">
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-facebook"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-twitter"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-google-plus"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="fa fa-instagram"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Footer;
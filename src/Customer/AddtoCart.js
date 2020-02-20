import React from 'react';
import './checkout.css'
import '../images/dalsamosa.jpg'
import '../images/paneerparatha.jpg'
import '../images/puribhaji.jpg'
import $ from 'jquery';
import StripeCheckout from 'react-stripe-checkout';

class AddtoCart extends React.Component{
   componentDidMount() {
       
       function hideURLbar() {
         window.scrollTo(0, 1);
       }

    $('.value-plus').on('click', function () {
      var divUpd = $(this).parent().find('.value'),
        newVal = parseInt(divUpd.text(), 10) + 1;
      divUpd.text(newVal);
    });
    
    $('.value-minus').on('click', function () {
      var divUpd = $(this).parent().find('.value'),
        newVal = parseInt(divUpd.text(), 10) - 1;
      if (newVal >= 1) divUpd.text(newVal);
    });


    $(document).ready(function (c) {
      $('.close1').on('click', function (c) {
        $('.rem1').fadeOut('slow', function (c) {
          $('.rem1').remove();
        });
      });
    });


    $(document).ready(function (c) {
      $('.close2').on('click', function (c) {
        $('.rem2').fadeOut('slow', function (c) {
          $('.rem2').remove();
        });
      });
    });


    $(document).ready(function (c) {
      $('.close3').on('click', function (c) {
        $('.rem3').fadeOut('slow', function (c) {
          $('.rem3').remove();
        });
      });
    });  


    $(document).ready(function ($) {
      $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({
          scrollTop: $(this.hash).offset().top
        }, 900);
      });
    });
    }
    render()
    {
        return(
           
                
            <div className="container jumbotron py-lg-5 py-md-4 py-sm-4 py-3" style={{marginTop:"60px"}}>
            <h2>Cart</h2>
               <div className="shop_inner_inf">
                  <div className="privacy about">
                    
                     <div className="checkout-right">
   
                        <table className="table-bordered">
                           
                              <tr>
                                 <th style={{width:"200px"}}>SL No.</th>
                                 <th>Product</th>
                                 <th>Quality</th>
                                 <th style={{width:"200px"}}>Product Name</th>
                                 <th>Price</th>
                                 <th>Remove</th>
                              </tr>
                            <tr className="rem1">
                                 <td className="invert">1</td>
                                 <td className="invert-image"><a href="UserCanteenList.js"><img src={require('../images/dalsamosa.jpg')} alt=" " className="img-responsive"/></a></td>
                                 <td className="invert">
                                    <div className="quantity">
                                       <div className="quantity-select">
                                          <div className="entry value-minus">&nbsp;</div>
                                          <div className="entry value"><span>1</span></div>
                                          <div className="entry value-plus active">&nbsp;</div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="invert">Dal Samosa</td>
                                 <td className="invert">675.00</td>
                                 <td className="invert">
                                    <div className="rem">
                                       <div className="close1"> </div>
                                    </div>
                                 </td>
                           
                              </tr>
                              <tr className="rem2">
                                 <td className="invert">2</td>
                                 <td className="invert-image"><a href="UserCanteenList.js"><img src={require('../images/paneerparatha.jpg')} alt=" " className="img-responsive"/></a></td>
                                 <td className="invert">
                                    <div className="quantity">
                                       <div className="quantity-select">
                                          <div className="entry value-minus">&nbsp;</div>
                                          <div className="entry value"><span>1</span></div>
                                          <div className="entry value-plus active">&nbsp;</div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="invert">Paneer Paratha</td>
                                 <td className="invert">325.00</td>
                                 <td className="invert">
                                    <div className="rem">
                                       <div className="close2"> </div>
                                    </div>
                                 </td>
                                
                              </tr>
                              <tr className="rem3">
                                 <td className="invert">3</td>
                                 <td className="invert-image"><a href="UserCanteenList.js"><img src={require('../images/puribhaji.jpg')} alt=" " className="img-responsive"/></a></td>
                                 <td className="invert">
                                    <div className="quantity">
                                       <div className="quantity-select">
                                          <div className="entry value-minus">-</div>
                                          <div className="entry value"><span>1</span></div>
                                          <div className="entry value-plus active"></div>
                                       </div>
                                    </div>
                                 </td>
                                 <td className="invert">Puri Bhaji</td>
                                 <td className="invert">405.00</td>
                                 <td className="invert">
                                    <div className="rem">
                                       <div className="close3"> </div>
                                    </div>
                                 </td>
                                 
                              </tr>

                              </table>
                           
                    </div>

                     </div>
                        <div className="clearfix"> </div>
                        <div className="clearfix"></div>
                     </div>
                     <center>

                     <div style={{marginTop:"50px"}}>
                     <StripeCheckout
        amount="500"
        billingAddress
        description="Awesome Product"
        image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="YourDomain.tld"
        stripeKey="pk_test_OnvUxTfBKsAUDN1omwNi1pSJ00rXCsuZeG"
        token={this.onToken}
       
        zipCode
      />
      </div>
      </center>
      
                  </div>
   
              
            
      
           
        )
    }

}

export default AddtoCart;
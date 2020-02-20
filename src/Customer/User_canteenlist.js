import React from "react";
import './canteen.css';
import '../images/butteralooparatha.jpg';
import '../images/dalsamosa.jpg'
import $ from 'jquery';
import { Link } from 'react-router-dom';


class User_canteenlist extends React.Component {

  componentDidMount(){
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
  }
  render() {

    return (

      
      <div classNameName="main">


        {/* <div classNameName="form-group has-search"> */}
          {/* <span classNameName="fa fa-search form-control-feedback"></span> */}
          {/* <input type="text" classNameName="form-control" placeholder="Search" /> */}
        {/* </div> */}

        <center>
              <div className="container jumbotron" style={{marginTop:"50px"}} >
         <div className="row col-md-8" >
         <center>
          <div className="card col-md-5"  >
            <img className="card-img-top col-md-6"  src={require('../images/dalsamosa.jpg')} alt="Card image"  />
            <div className="card-body">
              <h4 className="card-title">Aloo Paratha</h4>
              <h3 className="card-title">Price : 50Rs</h3>
              <div id="input_div col-md-5 row" >
              <div className="entry value-minus btn btn-warning active col-md-2" style={{display:"inline-block"}}>-</div>
              <div className="entry value col-md-8" style={{display:"inline-block"}}><span>1</span></div>
              <div className="entry value-plus btn btn-warning col-md-2" style={{display:"inline-block"}}>+</div>

    
              </div>
               <Link to="/Customer/cart" ><button type="submit" style={{marginTop:"30px"}} value="" className="card-title btn btn-warning" id="addcart">Add to cart</button></Link>

              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            </div>
          </div>
         
  



          {/* <div className="card  col-md-3" > */}
            {/* <img className="card-img-top"  src={require('./images/dalsamosa.jpg')} alt="Card image"  /> */}
            {/* <div className="card-body"> */}
              {/* <h4 className="card-title">Shreeji Restaurant</h4> */}
              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            {/* </div> */}
          {/* </div> */}


          

          {/* <div className="card  col-md-3" > */}
            {/* <img className="card-img-top"  src={require('./images/butteralooparatha.jpg')} alt="Card image"  /> */}
            {/* <div className="card-body"> */}
              {/* <h4 className="card-title">TGB</h4> */}
              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            {/* </div> */}
          {/* </div> */}




          {/* <div className="card  col-md-3" > */}
            {/* <img className="card-img-top"  src={require('./images/butteralooparatha.jpg')} alt="Card image"  /> */}
            {/* <div className="card-body"> */}
              {/* <h4 className="card-title">Lemon Shop</h4> */}
              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            {/* </div> */}
          {/* </div> */}




          {/* <div className="card  col-md-3" > */}
            {/* <img className="card-img-top"  src={require('./images/butteralooparatha.jpg')} alt="Card image"  /> */}
            {/* <div className="card-body"> */}
              {/* <h4 className="card-title">Shrimca Canteen</h4> */}
              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            {/* </div> */}
          {/* </div> */}



          {/* <div className="card  col-md-3" > */}
            {/* <img className="card-img-top"  src={require('./images/butteralooparatha.jpg')} alt="Card image"  /> */}
            {/* <div className="card-body"> */}
              {/* <h4 className="card-title">Maggies Shop</h4> */}
              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            {/* </div> */}
          {/* </div> */}




          {/* <div className="card  col-md-3" > */}
            {/* <img className="card-img-top"  src={require('./images/butteralooparatha.jpg')} alt="Card image"  /> */}
            {/* <div className="card-body"> */}
              {/* <h4 className="card-title">PavBhaji Restaurant</h4> */}
              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            {/* </div> */}
          {/* </div> */}


          {/* <div className="card  col-md-3" > */}
            {/* <img className="card-img-top"  src={require('./images/butteralooparatha.jpg')} alt="Card image"  /> */}
            {/* <div className="card-body"> */}
              {/* <h4 className="card-title">Morning Restaurant</h4> */}
              {/* <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p> */}
              
            {/* </div> */}
          {/* </div> */}


          </center>
          </div>



         
          







        </div>
        </center>
       
        </div>

        )
    }
}

export default User_canteenlist;
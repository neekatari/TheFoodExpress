import React, {Component} from 'react';
import './CSS_shop_owner/packages.css';
import { Link } from  'react-router-dom';
import { database_tblOwner, database_tblShop } from '../config/fire'
import { thisExpression } from '@babel/types';

class Owner_Registration extends Component{

    constructor(props) {
        super(props);
        this.state = {
            id:Math.random(),
            Sid:Math.random(),
            OwnerId:'',
            shopName: '',
            shopLocation: '',
            firstName: '',
            lastName: '',
            emailId: '',
            contactNo: '',
            createdAt: '',
            mdifiedAt: '',
            status: 'A'
        }

        this.handleChanage = this.handleChanage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChanage(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault()
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds

        const tblownerdata = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
            contactNo: this.state.contactNo,
            createdAt: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
            mdifiedAt: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
            status: 'A'
        }
        database_tblOwner.push(tblownerdata) // insert data in tblowner

        const tblShopdata = {
            Sid:this.state.Sid,
            OwnerId:this.state.id,
            shopName: this.state.shopName,
            shopLocation: this.state.shopLocation

        }
        database_tblShop.push(tblShopdata).then(res => console.log(res)); // insert data in tblshop
        this.setState({
            id:'',
            Sid:'',
            OwnerId:'',
            shopName: '',
            shopLocation: '',
            firstName: '',
            lastName: '',
            emailId: '',
            contactNo: '',
            createdAt: '',
            mdifiedAt: '',
            status: 'A'
        })
    }

    render() {
        return (

            <div className="packages-body">
            
            <div style={{marginTop:"100px"}}>
                <div className="jumbotron">
                <center>
                <div className="heading">
                <h2>Shop Owner Registration</h2>
                </div>
                <form>
                    <div className="row col-md-6"> 
                            <div className="form-group col-md-12">
                                <input
                                    type="text"
                                    name="shopName"
                                    value={this.state.shopName}
                                    placeholder="Shop Name"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    required
                                    />
                            </div> 
                            <div className="form-group col-md-12">
                                <input
                                    type="text"
                                    name="shopLocation"
                                    value={this.state.shopLocation}
                                    placeholder="Shop Location"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    required
                                    />
                            </div>   
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={this.state.firstName}
                                    placeholder="First Name"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    required
                                    />
                            </div>
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={this.state.lastName}
                                    placeholder="Last Name"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    required
                                    />
                            </div>
                            <div className="form-group col-md-12">
                                <input
                                    type="email"
                                    name="emailId"
                                    value={this.state.emailId}
                                    placeholder="Enter Email-Id"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    required
                                    />
                            </div>   
                            <div className="form-group col-md-12">
                                <input
                                    type="number"
                                    name="contactNo"
                                    value={this.state.contactNo}
                                    placeholder="Contact Number"
                                    className="form-control"
                                    onChange={this.handleChanage}   
                                    required 
                                    />
                            </div>
                            <div className="form-group col-md-12">
                            
                            {/* <button className="btn btn-secondary form-control">Apply</button>  */}
                           <li onClick={this.handleSubmit} style={{listStyleType:'none'}}> <Link to={"/Packages/AddCategory/"+this.state.Sid}  
                            className="btn btn-secondary form-control" >Apply</Link></li>
                            </div>
                    </div>
                </form>   
                </center>
                </div>
            
            </div>
            </div>

        )
    }

}

export default Owner_Registration;
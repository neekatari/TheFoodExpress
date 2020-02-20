import React from 'react'
import './images/bg.jpg'
import './customer-css/cust.css'
import { Link } from 'react-router-dom'
import fire from '../config/fire'
import _ from 'lodash'
import { database_tblShop } from '../config/fire'


class User_home extends React.Component {
    
    logout() {
        fire.auth().signOut();
    }
    constructor(props){
        super(props)
        this.state = {
            notes: {}
        }

        this.renderNotes = this.renderNotes.bind(this);
    }

    componentDidMount() {
        database_tblShop.on('value', (snapshot) => {
            this.setState({ notes: snapshot.val() });
        });
    }


    renderNotes() {
        return _.map(this.state.notes, (note,key) => {
            return (
                <Link to={"/Customer/canteen/"+note.Sid} className="col-md-3 col-sm-6">
                <div className="fancy-cards col-md-3 col-sm-6">
                        <div className="fancy-card">
                            <div className="top">
                                <div className="caption">
                                    <h3 className="title">{note.shopName}</h3> 
                                    <Link to={"/Customer/canteen/"+note.Sid} className="button" >Menu</Link>
                                </div>
                            </div>
                            <div className="middle"></div>
                            <div className="bottom"></div>
                        </div>
                    </div>
                </Link>

            );
        });
        
    
    
    }
    
    render() {
        console.log("home1")
        return (
            <div className="container-fluid custbody">
                <div className="row" style={{ height: '50px' }}></div>
                <h2 style={{paddingTop:'100px'}}>
                    CANTEEN LIST
                </h2>
               
                <div className="row col-md-12">
                    
                    {this.renderNotes()}

                </div>
                
                

            </div>
        )
    }
}

export default User_home
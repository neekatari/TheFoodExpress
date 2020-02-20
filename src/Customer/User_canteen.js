import React from 'react'
import './customer-css/cust.css'
import Img from 'react-image'
import fire from '../config/fire'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { database_tblShop ,database_tblSubCategory ,database_tblItem,database_tblCategory} from '../config/fire'

class User_canteen extends React.Component {
   
    constructor(props){
        super(props)
        this.state = {
            notes: {},
            subcat:{},
            canteen:{},
            id:props.match.params.id
        }

        this.renderNotes = this.renderNotes.bind(this);
        this.renderSubcat = this.renderSubcat.bind(this);
        this.rendercanteen = this.rendercanteen.bind(this);
        
       
    }

    componentDidMount() {
        database_tblItem.on('value', (snapshot) => {
            this.setState({ notes: snapshot.val() });
        });
        database_tblSubCategory.on('value', (snapshot) => {
            this.setState({ subcat: snapshot.val() });
        });
        database_tblShop.orderByChild('Sid').equalTo(+this.state.id).on('value', (snapshot) => {
            this.setState({ canteen: snapshot.val() });
            // console.log(snapshot.val().Name);
            
         });

        //  database_tblCategory.orderByChild("Shopid").startAt(this.state.id).on("value", function(snapshot) {
           
        //     console.log(snapshot.val().Name);
        //  });
         
         
        
        
    }

    renderNotes() {
        return _.map(this.state.notes, (note,key) => {
            return (
                <Link to={"/Customer/User_canteenlist"}>
                 <li class="list-group-item col-md-12 col-sm-4" >
                                        <div class="avatar">
                                            <img src={note.Image}
                                                alt="Item" width="100" height="100" />
                                        </div>
                                        <div style={{fontSize:"20px"}}>{note.Name}</div>
                                        <div style={{marginLeft:'30px'}}>
                                        <p>Price: {note.Price} /-</p>
                                        </div>
                                    </li>
                                    
                </Link>

            );
        });
        
    
    
    }

    renderSubcat() {
        return _.map(this.state.subcat, (note,key) => {
            return (
                <li>{note.Name}</li>

            );
        });
        
    
    
    }

    rendercanteen(){
        return _.map(this.state.canteen, (note,key) => {
            return (
                <div className="row top-restro" style={{ background: '#171a29',zIndex:'2',position:'fixed' }}>
                <div className="container" style={{ padding: '40px' }}>
                    <div className="row">
                        <img className="col-md-3 col-sm-12 img" src={require('./images/canteen.jpg')} />
                        <div className="col-md-9 col-sm-12 float-right" style={{ marginTop: '60px' }}>
                            <p style={{ color: 'white', fontSize: '30px' }}>{note.shopName}</p>
                            <div className="row col-sm-3" style={{ background: 'gray', marginLeft: '2px', padding: '3px' }}>
                                <p style={{ color: 'white', fontSize: '12px' }}>{note.shopLocation}</p>
                            </div>
                            <div className="col-md-6 row" style={{ marginTop: '30px' }}>
                                <input type="Text" className="form-control" placeholder="search Item" />
                                
                            </div>
                        </div>

                    </div>
                </div>


            </div>
               

            );
        });
      
           
          
    }


    render() {
        console.log("canteen")
        return (
            <div className="container-fluid" >
                {this.rendercanteen()}


                
                <div className="container" >
                    <div className="row col-md-12" >
                        <div className='col-md-3 col-sm-4 float-right' style={{position:'fixed' , marginTop:'400px',marginLeft:'-200px'}}>
                            <ul className="float-right link navbr-nav" style={{listStyleType:'none'}}>
                                <div className="" style={{textAlign:'right', justifyContent:'right'}}>
                                <li style={{ fontSize: '18px', color: 'orangered' }}>Main Items</li>
                               
                               {this.renderSubcat()}
                                
                                </div>
                            </ul>
                        </div>
                       
                        <div className="col-md-7" style={{marginLeft:'250px'}}>
                            <div class="container" style={{margin:'20px'}}>
                                
                                <ul class="list-group row">
                                   <div class="jumbotron col-sm-4" style={{marginTop:'370px',position:"fixed",padding:"10px"}}>Item List :</div>
                                   <div class="" style={{marginTop:'440px'}}></div>
                                   {this.renderNotes()}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User_canteen;
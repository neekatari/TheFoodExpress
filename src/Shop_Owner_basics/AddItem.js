import React from 'react';
import { Link } from  'react-router-dom'; 
import FileUploder from 'react-firebase-file-uploader';
import { fire , database_tblItem ,database_tblSubCategory } from '../config/fire';
import _ from 'lodash';
class AddItem extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            id: '',
            Name: '',
            Price:'',
            SCategoryId:this.props.match.params.idd,
            Image: '',
            imageUrl:'',
            Created: '',
            Modified: '',
            notes: {},
            drop:{}
        }

        this.handleChanage = this.handleChanage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderNotes = this.renderNotes.bind(this);
        this.renderdropdown = this.renderdropdown.bind(this);
        this.handleremove =this.handleremove.bind(this);
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

        const tblItemdata = {
            id: Math.random(),
            Name: this.state.Name,
            Price: this.state.Price,
            SCategoryId: this.state.SCategoryId,
            Image: this.state.imageUrl, 
            Created: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
            Modified: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
        }
        database_tblItem.push(tblItemdata) // insert data in tblPackages
            .then(res => console.log(res)); // insert data in tblshop
        this.setState({
            id: '',
            Name: '',
            Price: '',
            SCategoryId: '',
            Image: '',
            imageUrl: '',
            Created: '',
            Modified: '',
            dropitemid:''
            
        })
    }

    handleremove = (e,id) => {
        e.preventDefault();    
        console.log(id);
        fire.database().ref('/tblItem/'+id).remove();
    }

    componentDidMount() {
        database_tblItem.orderByChild('SCategoryId').equalTo(this.state.SCategoryId).on('value', (snapshot) => {
            this.setState({ notes: snapshot.val() });
            
         });

        database_tblSubCategory.on('value', (snapshot) => {
            this.setState({ drop: snapshot.val() });
        });


    }
    renderNotes() {
        return _.map(this.state.notes, (note,key) => {
            return (
                <Link>
                <div className="card" id={key}  >
                    <div className="card" >
                        <div className="card-body" style={{ padding: "10px" }}>
                        <a onClick={(e) => {this.handleremove(e,key)}} style={{float:"right"}}><i  className="fa fa-close" ></i></a>
                            <h5 class="card-title">Item name: {note.Name}</h5> 
                        </div>
                    </div>
                </div></Link>
            );
        });
    }

    renderdropdown(){
        return _.map(this.state.drop, (note,key) => {
            return (
                
                <option value={note.id}>{note.Name}</option>

            );
        });
    }

    handleUploadStart = () => {

    }

    handleUploadSuccess = (filename) => {
        this.setState({
            Image: filename
        })

        fire.storage().ref('item').child(filename).getDownloadURL()
        .then(url => this.setState({
            imageUrl: url
        }))
    }

    render()
    {
     return(
            
<div className="jumbotron">
                <center>
                <div className="heading">
                <h2>Add Item</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-md-6"> 
                            
                            <div className="form-group col-md-6">
                                <input
                                    type="text"
                                    name="Name"
                                    value={this.state.Name}
                                    placeholder="Item Name"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    />
                            </div>
                            
                            <div className="form-group col-md-6">
                                <input
                                    type="number"
                                    name="Price"
                                    value={this.state.Price}
                                    placeholder="Price"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    />
                            </div>   
                            <div className="form-group col-md-12">
                               <FileUploder
                                    accept="image/*"
                                    name='image'
                                    storageRef={fire.storage().ref("item")}
                                    onUploadStart={this.handleUploadStart}
                                    onUploadSuccess={this.handleUploadSuccess}
                                    className="form-control"
                               />
                            </div>   
                            {/* <div className="form-group col-md-12">
                                <input
                                    type="number"
                                    name="contactNo"
                                   
                                    placeholder="Contact Number"
                                    className="form-control"
                                    onChange={this.handleChanage}    
                                    />
                            </div> */}
                            <div className="form-group col-md-12">
                            <select className="form-control"
                                    onChange={this.handleChanage} 
                                    name="SCategoryId">
                                    <option disabled selected hidden value="Select Sub-Category">Select Sub-Category</option>
                                {this.renderdropdown()}
                                
                            </select>
                            </div>
                            <div className="form-group col-md-12">
                            <button className="btn btn-secondary form-control" >Add</button>
                            </div>
                            <div className="col-md-12" style={{marginTop:"50px"}}>
                            <h4 className="btn form-control">List of Categories</h4>
                            {this.renderNotes()}
                            </div>

                    </div>
                </form>   
                </center>
                </div> 
        );
    }
}

export default AddItem;
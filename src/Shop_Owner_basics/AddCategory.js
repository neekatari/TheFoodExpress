import React from 'react'; 
import Tbl from './Tbl';
import { Link } from 'react-router-dom';
import { database_tblCategory , fire } from '../config/fire';
import _ from 'lodash';


class AddCategory extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            Name: '',
            Shopid: props.match.params.oid,
            Image: 'dsfsdf',
            Created: '',
            Modified: '',
            notes: {},
        }

        this.handleChanage = this.handleChanage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.renderNotes = this.renderNotes.bind(this);
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

        const tblCategoryData = {
            id: Math.random(),
            Name: this.state.Name,
            Shopid: this.props.match.params.oid,
            Image: this.state.Image,
            Created: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
            Modified: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
        }
        database_tblCategory.push(tblCategoryData) // insert data in tblPackages
            .then(res => console.log(res)); // insert data in tblshop
        this.setState({
            id: '',
            Name: '',
            Shopid: '',
            Image: '',
            Created: '',
            Modified: '',
            
        })

    }

    handleremove = (e,id) => {
        e.preventDefault();
        
        console.log(id);
        fire.database().ref('/tblCategory/'+id).remove();
    }

    componentDidMount() {
        
         database_tblCategory.orderByChild('Shopid').equalTo(this.state.Shopid).on('value', (snapshot) => {
            this.setState({ notes: snapshot.val() });
         })
    }
        renderNotes() {
            return _.map(this.state.notes, (note,key) => {
                return (
                    <Link to={"/Packages/AddSubCategory/"+note.id}>
                    <div class="card" id={key}  >
                        <div class="card" >
                            <div class="card-body" style={{ padding: "10px" }}>
                            <a onClick={(e) => {this.handleremove(e,key)}} style={{float:"right"}}><i  className="fa fa-close" ></i></a>
                                <h5 class="card-title">Category: {note.Name}</h5>
                                
                            </div>
                        </div>
                    </div></Link>

                );
            });
            
        
        
        }




















    render()
    {
        return(
            
<div className="jumbotron" >
                <center>
                <div className="heading" style={{marginTop:"80px"}}>
                <h2>Add Category</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-md-6"  > 
                            
                            <div className="form-group col-md-8">
                                <input
                                    type="text"
                                    name="Name"
                                    value={this.state.Name}
                                    placeholder="Category Name"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    />
                            </div>
                            
                            <div className="form-group col-md-4">
                            <button onClick={this.handleSubmit} className="btn btn-secondary form-control">
                                Add 
                            </button>   
                            </div>
                            <div className="col-md-12" style={{marginTop:"50px"}}>
                            <h4 className="btn form-control">List of Categories</h4>
                            {this.renderNotes()}
                            </div>
                    </div>
                </form>   
                </center>
                {/* <Tbl data={this.dataSet}  /> */}
               
                </div> 
        );
    }
    //dataSet = this.renderNotes();
  
}

export default AddCategory;
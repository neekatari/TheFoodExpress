import React from 'react'
import { database_tblPackages,fire } from '../config/fire'
import _ from 'lodash';

class ManagePackages extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            Name: '',
            Duration: '',
            Rate: '',
            Status: 'A',
            notes: {}
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


        const tblPackagesdata = {
            id: Math.random(),
            Name: this.state.Name,
            Duration: this.state.Duration,
            Rate: this.state.Rate,
            Status: 'A',
        }
        database_tblPackages.push(tblPackagesdata) // insert data in tblPackages
            .then(res => console.log(res)); // insert data in tblshop
        this.setState({
            id: '',
            Name: '',
            Duration: '',
            Rate: '',
            Status: ''
        })

    }

    handleremove = (e,id) => {
        e.preventDefault();
        
        console.log(id);
        fire.database().ref('/tblPackages/'+id).remove();
    }

    componentDidMount() {
        database_tblPackages.on('value', (snapshot) => {
            this.setState({ notes: snapshot.val() });
        });
    }
    renderNotes() {
        return _.map(this.state.notes, (note,key) => {
            return (

                <div class="col-sm-12" id={key}  >
                    <div class="card" >
                        <div class="card-body" style={{ padding: "10px" }}>
                        <a onClick={(e) => {this.handleremove(e,key)}}><i  className="fa fa-close" style={{float:"right "}} ></i></a>
                            <h5 class="card-title">Package: {note.Name}</h5>
                            <p>Duration: {note.Duration}, Rate:{note.Rate}, Status:{note.Status}</p>
                             
                        </div>
                    </div>
                </div>

            );
        });
    }


    render() {
        return (
            <div className="jumbotron row" style={{ marginTop: "60px" }}>
                <div className="col-md-8">
                    <center>
                        <h2>Add Packages</h2>
                    </center>
                    <form  onSubmit={this.handleSubmit} >
                        <div className="form-group">
                            <label for="exampleInputEmail1">Package Name</label>
                            <input type="text" className="form-control" id=""
                                name="Name"
                                value={this.state.Name}
                                onChange={this.handleChanage}
                                aria-describedby="emailHelp" placeholder="Package Name" />

                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Package Duration</label>
                            <input type="text" className="form-control" id=""
                                name="Duration"
                                value={this.state.Duration}
                                onChange={this.handleChanage}
                                aria-describedby="emailHelp" placeholder="Package Duration" />

                        </div>
                        <div className="form-group">
                            <label for="exampleInputEmail1">Package Rate</label>
                            <input type="text" className="form-control" id=""
                                name="Rate"
                                value={this.state.Rate}
                                onChange={this.handleChanage}
                                aria-describedby="emailHelp" placeholder="Package Rate" />

                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-1">

                </div>
                <div className="jumbotron col-md-3" style={{ padding: "0px" }}>
                    <div class="row">
                        <div class="col-sm-12" style={{ marginBottom: "20px" }}>
                            <div class="btn-primary">
                                <div class="card-body" style={{ padding: "10px" }}>
                                    <h5 class="card-title">Package List</h5>
                                </div>
                            </div>
                        </div>
                        {this.renderNotes()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ManagePackages;
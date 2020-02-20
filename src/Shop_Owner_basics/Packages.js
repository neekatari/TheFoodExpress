import React from 'react';
import './CSS_shop_owner/packages.css';
import { database_tblPackages } from '../config/fire'
import { Link } from  'react-router-dom';
import _ from 'lodash';

class Packages extends React.Component{
    constructor(props){
      super(props);
      this.state={
        // Name: '',
        // Duration: '',
        // Rate:'',
        notes: {}
      };

      this.renderNotes = this.renderNotes.bind(this);
    }

    componentDidMount(){
      database_tblPackages.on('value' , (snapshot) => {
          this.setState({notes: snapshot.val()});
      });
    }
    renderNotes(){
      return _.map(this.state.notes, (note,key) => {
        return(
          <div>
         
            
                <div className="pricetab" id={key}>
                  <h1>{note.Name}</h1>
                  <div className="price"> 
                    <h2>{note.Rate}</h2> 
                  </div>
                  <div className="infos">
                   <h3>
                      <br/>
                      Duration : {note.Duration} <br/>
                      
                   </h3>
                  </div>
                  <div className="pricefooter">
                    <div className="button">
                    <Link to="/Packages/Register_Owner" className="" >Register</Link>
                    </div>
                  </div>
                </div>
                {/* <div className="pricetab">
                  <h1> STARTER </h1>
                  <div className="price"> 
                    <h2> 10$ </h2> 
                  </div>
                  <div className="infos">
                  <h3>
                       One Month <br/>
                       for <br/>
                       20$ /-
                   </h3>
                  </div>
                  <div className="pricefooter">
                    <div className="button">
                      <a href="#"> Get started </a>
                    </div>
                  </div>
                </div>
                <div className="pricetabmid">
                  <h1> BASIC </h1>
                  <div className="pricemid"> 
                    <h2> 30$ </h2> 
                  </div>
                  <div className="infos">
                  <h3>
                      One year <br/>
                       for <br/>
                       200$ /-
                   </h3>
                  </div>
                  <div className="pricefootermid">
                    <div className="buttonmid">
                    <Link to="/Packages/Register_Owner" className="" >Get started</Link>
                    </div>
                  </div>
                </div>
                <div className="pricetab">
                  <h1> PREMIUM </h1>
                  <div className="price"> 
                    <h2> 50$ </h2> 
                  </div>
                  <div className="infos">
                  <h3>
                       One Month <br/>
                       for <br/>
                       20$ /-
                   </h3>
                  </div>
                  <div className="pricefooter">
                    <div className="button">
                      <a href="#"> Get started </a>
                    </div>
                  </div>
                </div>
                <div className="pricetab">
                  <h1> VIP </h1>
                  <div className="price"> 
                    <h2> 100$ </h2> 
                  </div>
                  <div className="infos">
                  <h3>
                       One Month <br/>
                       for <br/>
                       20$ /-
                   </h3>
                  </div>
                  <div className="pricefooter">
                    <div className="button">
                      <a href="#"> Get started </a>
                    </div>
                  </div>
                </div> */}
              </div>
             
            
        );
      });
    }

    render(){
        
        return(
            <div>
            <div className="packages-body">
              <div id="container">
              {this.renderNotes()}
              </div>
              </div>
            </div>
            

        )
    }
}


export default Packages;
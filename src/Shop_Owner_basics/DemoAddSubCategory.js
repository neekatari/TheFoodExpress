import React from 'react'; 
import Tbl from './Tbl';
import { Link } from 'react-router-dom';
import { database_tblSubCategory , fire } from '../config/fire';
import _ from 'lodash';
import { browserHistory } from 'react-router-dom';


class AddSubCategory extends React.Component{


    constructor(props) {
        super(props);
        this.state = {
            id: '',
            Name: '',
            CategoryId:props.match.params.idd,
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

        const tblSubCategoryData = {
            id: Math.random(),
            Name: this.state.Name,
            CategoryId:  this.props.match.params.idd,
            Image: this.state.Image,
            Created: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
            Modified: date+"/"+month+"/"+year+" "+hours+":"+min+":"+sec,
        }
        database_tblSubCategory.push(tblSubCategoryData) // insert data in tblPackages
            .then(res => console.log(res)); // insert data in tblshop
        this.setState({
            id: '',
            Name: '',
            CategoryId: '',
            Image: '',
            Created: '',
            Modified: '',
            
        })

    }

    handleremove = (e,id) => {
        e.preventDefault();
        
        console.log(id);
        fire.database().ref('/tblSubCategory/'+id).remove();
    }

    componentDidMount() {
        // console.log("param :"+this.props.match.params.idd);
        database_tblSubCategory.orderByChild('CategoryId').equalTo(this.state.CategoryId).on('value', (snapshot) => {
            this.setState({ notes: snapshot.val() });
         })
        }
    
    renderNotes() {
        return _.map(this.state.notes, (note,key) => {
            return (
                <Link to={"/Packages/AddItem/"+note.id}>
                <div class="card" id={key}  >
                    <div class="card" >
                        <div class="card-body" style={{ padding: "10px" }}>
                        <a onClick={(e) => {this.handleremove(e,key)}} style={{float:"right"}}><i  className="fa fa-close" ></i></a>
                            <h5 class="card-title">SubCategory: {note.Name}</h5>
                            
                            
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
                <h2>Add Sub-Category</h2>
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

export default AddSubCategory;





























// import React from 'react';
// import { fire, database_tblSubCategory } from '../config/fire'
// import { Link } from 'react-router-dom';
// import _ from 'lodash';

// class Products extends React.Component {

//   constructor(props) {
//     super(props);

//     //  this.state.products = [];
//     this.state = {
//       id: '',
//       Name: '',
//       CategoryId: '',
//       Image: '',
//       Created: '',
//       Modified: '',
//       notes: {},

//     };

//     this.handleChanage = this.handleChanage.bind(this)
//     this.handleSubmit = this.handleSubmit.bind(this)
//     this.renderNotes = this.renderNotes.bind(this);
//     this.handleremove = this.handleremove.bind(this);

//     this.state.filterText = "";
//     this.state.products = [
//       {
//         id: 1,
//         category: 'Sporting Goods',
//         price: '49.99',
//         qty: 12,
//         name: 'football'
//       }, {
//         id: 2,
//         category: 'Sporting Goods',
//         price: '9.99',
//         qty: 15,
//         name: 'baseball'
//       }, {
//         id: 3,
//         category: 'Sporting Goods',
//         price: '29.99',
//         qty: 14,
//         name: 'basketball'
//       }, {
//         id: 4,
//         category: 'Electronics',
//         price: '99.99',
//         qty: 34,
//         name: 'iPod Touch'
//       }, {
//         id: 5,
//         category: 'Electronics',
//         price: '399.99',
//         qty: 12,
//         name: 'iPhone 5'
//       }, {
//         id: 6,
//         category: 'Electronics',
//         price: '199.99',
//         qty: 23,
//         name: 'nexus 7'
//       }
//     ];

//   }

//   handleChanage(e) {
//     this.setState({
//       [e.target.name]: e.target.value
//     })
//   }

//   handleSubmit(e) {
//     e.preventDefault()
//     var date = new Date().getDate(); //Current Date
//     var month = new Date().getMonth() + 1; //Current Month
//     var year = new Date().getFullYear(); //Current Year
//     var hours = new Date().getHours(); //Current Hours
//     var min = new Date().getMinutes(); //Current Minutes
//     var sec = new Date().getSeconds(); //Current Seconds

//     const tblSubCategoryData = {
//       id: Math.random(),
//       Name: this.state.Name,
//       Shopid: this.state.Shopid,
//       Image: this.state.Image,
//       Created: date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec,
//       Modified: date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec,
//     }
//     database_tblSubCategory.push(tblSubCategoryData) // insert data in tblPackages
//       .then(res => console.log(res)); // insert data in tblshop
//     this.setState({
//       id: '',
//       Name: '',
//       Shopid: '',
//       Image: '',
//       Created: '',
//       Modified: '',

//     })

//   }

//   handleremove = (e, id) => {
//     e.preventDefault();

//     console.log(id);
//     fire.database().ref('/tblSubCategory/' + id).remove();
//   }

//   componentDidMount() {
//     database_tblSubCategory.on('value', (snapshot) => {
//       this.setState({ notes: snapshot.val() });
//     });
//   }
//   renderNotes() {
//     return _.map(this.state.notes, (note, key) => {
//       return (
//         <Link to={"/Packages/AddSubCategory/" + note.id}>
//           <div class="card" id={key}  >
//             <div class="card" >
//               <div class="card-body" style={{ padding: "10px" }}>
//                 <a onClick={(e) => { this.handleremove(e, key) }} style={{ float: "right" }}><i className="fa fa-close" ></i></a>
//                 <h5 class="card-title">Category: {note.Name}</h5>
//                 <p>Duration: {note.Created}, Rate:{note.Rate}, Status:{note.Status}</p>

//               </div>
//             </div>
//           </div></Link>

//       );
//     });



//   }


//   handleUserInput(filterText) {
//     this.setState({ filterText: filterText });
//   };
//   handleRowDel(product) {
//     var index = this.state.products.indexOf(product);
//     this.state.products.splice(index, 1);
//     this.setState(this.state.products);
//   };

//   handleAddEvent(evt) {
//     var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
//     var product = {
//       id: id,
//       name: "",
//       price: "",
//       category: "",
//       qty: 0
//     }
//     this.state.products.push(product);
//     this.setState(this.state.products);

//   }

//   handleProductTable(evt) {
//     var item = {
//       id: evt.target.id,
//       name: evt.target.name,
//       value: evt.target.value
//     };
//     var products = this.state.products.slice();
//     var newProducts = products.map(function (product) {

//       for (var key in product) {
//         if (key == item.name && product.id == item.id) {
//           product[key] = item.value;

//         }
//       }
//       return product;
//     });
//     this.setState({ products: newProducts });
//     //  console.log(this.state.products);
//   };
//   render() {

//     return (
//       <div style={{ background: 'lightgray',marginTop:"80px" }} className="jumbotron">
//         <input
//           type="text"
//           name="Name"
//           value={this.state.Name}
//           placeholder="Category Name"
//           className="form-control col-md-8"
//           onChange={this.handleChanage}
//         />
//         <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText} />
//         <center>
//           <input type="button" value="next >> " className="col-md-2 form-control btn btn-secondary" />
//         </center>
//       </div>
//     );

//   }

// }
// class SearchBar extends React.Component {
//   handleChange() {
//     this.props.onUserInput(this.refs.filterTextInput.value);
//   }
//   render() {
//     return (
//       <div className="" style={{ paddingTop: '100px' }} >
//         <center>
//           <h2> Add Sub category </h2>
//           <input style={{ marginBottom: '30px' }} type="text" className="form-control col-md-5" placeholder="Search..." value={this.props.filterText} ref="filterTextInput" onChange={this.handleChange.bind(this)} />
//         </center>
//       </div>

//     );
//   }

// }

// class ProductTable extends React.Component {

//   render() {
//     var onProductTableUpdate = this.props.onProductTableUpdate;
//     var rowDel = this.props.onRowDel;
//     var filterText = this.props.filterText;
//     var product = this.props.products.map(function (product) {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id} />)
//     });
//     return (
//       <div >

//         <center>
//           <button style={{ marginBottom: '50px' }} type="button" onClick={this.props.onRowAdd} className="btn btn-secondary form-control col-md-2">Add</button>
//         </center>
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>price</th>

//               <th>category</th>
//             </tr>
//           </thead>

//           <tbody>
//             {product}

//           </tbody>

//         </table>
//       </div>
//     );

//   }

// }

// class ProductRow extends React.Component {
//   onDelEvent() {
//     this.props.onDelEvent(this.props.product);

//   }
//   render() {

//     return (
//       <tr className="eachRow">
//         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//           "type": "name",
//           value: this.props.product.name,
//           id: this.props.product.id
//         }} />
//         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//           type: "price",
//           value: this.props.product.price,
//           id: this.props.product.id
//         }} />
//         {/* <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//             type: "qty",
//             value: this.props.product.qty,
//             id: this.props.product.id
//           }}/> */}
//         <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
//           type: "category",
//           value: this.props.product.category,
//           id: this.props.product.id
//         }} />
//         <td className="del-cell">
//           <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="btn btn-danger" />
//           <Link to="/Packages/AddItem" ><i class='fa fa-plus-square' style={{ marginLeft: '20px' }} aria-hidden='true'></i></Link>
//         </td>
//       </tr>

//     );

//   }

// }
// class EditableCell extends React.Component {

//   render() {
//     return (
//       <td>
//         <input type='text' className="form-control text" name={this.props.cellData.type} id={this.props.cellData.id} value={this.props.cellData.value} onChange={this.props.onProductTableUpdate} />
//       </td>
//     );

//   }

// }

// export default Products;
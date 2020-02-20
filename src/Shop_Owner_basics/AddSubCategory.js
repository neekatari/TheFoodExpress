import React from 'react'; 


class AddSubCategory extends React.Component{
    render()
    {
        return(
            
<div className="jumbotron">
                <center>
                <div className="heading">
                <h2>Add Subcategory</h2>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row col-md-6"> 
                           
                            <div className="form-group col-md-12">
                                <input
                                    type="text"
                                    name="subcatName"
                                    
                                    placeholder="SubCategory Name"
                                    className="form-control"
                                    onChange={this.handleChanage}
                                    />
                            </div>
                            
                           
                            
                            <div className="form-group col-md-12">
                            <select className="form-control"
                                    onChange={this.handleChanage} name="SubCategory">
                                <option value="Fast Food">Fast Food</option>
                                <option value="Chinese">Chinese</option>
                                <option value="Italian">Italian</option>
                                
                            </select>
                            </div>
                            <div className="form-group col-md-12">
                            <button className="btn btn-secondary form-control">
                                Add
                            </button>   
                            </div>
                    </div>
                </form>   
                </center>
                </div> 
        );
    }
}

export default AddSubCategory;
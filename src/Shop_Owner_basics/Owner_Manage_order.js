import React from 'react'

class Owner_Manage_order extends React.Component {
    render() {
        return (
            
            <div style={{ marginTop: '100px' }} className='container'>
                <h2 style={{color:'black'},{fontSize:'25px'}}>
                    Manage Order
                </h2>
                <div id="accordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h5 class="mb-0">
                                <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    1 . Gurukrupa : Ordered by nilkanth (Click Here For More Details)
        </button>
                            </h5>
                        </div>

                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                            <div class="card-body">
                                <table>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                </table>

                                <div style={{float:'right'}}>
                                <button className="btn btn-primary"> Allow</button>
                                <button className="btn btn-danger" style={{marginLeft:'20px'}}> Cancel</button>
                            </div>
      </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2 . Ballubhai : Ordered by nilkanth (Click Here For More Details)
        </button>
                            </h5>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                            <div class="card-body">
                            <table>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                </table>
                            <div style={{float:'right'}}>
                                <button className="btn btn-primary"> Allow</button>
                                <button className="btn btn-danger" style={{marginLeft:'20px'}}> Cancel</button>
                            </div>
      </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h5 class="mb-0">
                                <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3 . Srimca : Ordered by nilkanth (Click Here For More Details)
        </button>
                            </h5>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                            <div class="card-body">
                            <table>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            Order Details
                                        </th>
                                        <td>
                                        Order Details 
                                        </td>
                                    </tr>
                                </table>
                            <div style={{float:'right'}}>
                                <button className="btn btn-primary"> Allow</button>
                                <button className="btn btn-danger" style={{marginLeft:'20px'}}> Cancel</button>
                            </div>
      </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Owner_Manage_order;

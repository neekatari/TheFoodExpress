import React from 'react';
import './DataTables-1.10.18/css/jquery.dataTables.css';

const $ = require('jquery')
$.DataTable = require('datatables.net')

class Tbl extends React.Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
            columns: [
                {title: "Category Name"},
                {title: "Created At"},
                {title: "Updated At"},
                {title: "Options"},
                {title: "jaba"},
                {title: "jaba"},
                {title:"jaba"}

            ]
            }
        )
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div>
                <table id="example" className="display" width="100%" ref={el => this.el = el}>

                </table>
            </div>
        )
    }
}





export default Tbl;
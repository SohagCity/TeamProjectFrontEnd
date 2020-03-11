import React from "react";
import MaterialTable from "material-table";

class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Ticket Id", field: "blankId" },
        { title: "Sold To", field: "customer" },
        {
          title: "Price ($)",
          field: "price"
        },
        { title: "Payment Method", field: "method" },
        { title: "Date of Sale", field: "date", type: "date" }
      ],
      data: [
        {
          blankId: "444000000",
          customer: "Luigi",
          price: "100",
          method: "card",
          date: new Date()
        },
        {
          blankId: "444111111",
          customer: "Mario",
          price: "100",
          method: "cash",
          date: new Date()
        },
        {
          blankId: "222222222",
          customer: "Wario",
          price: "100",
          method: "pay later",
          date: new Date()
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <MaterialTable
          title="Tickets"
          columns={this.state.columns}
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Tickets;

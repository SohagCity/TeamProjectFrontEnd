import React from "react";
import MaterialTable from "material-table";

class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Customer Name", field: "customer" },
        {
          title: "Relationship",
          field: "relationship",
          lookup: { 1: "Regular", 2: "Valued" }
        },
        {
          title: "Contact Number",
          field: "contact"
        },
        {
          title: "Discount",
          field: "discount",
          lookup: { 1: "5% off", 2: "over 100, 5% off" }
        } //lookup: {data from database}
        /*{
          title: "Discount Type",
          field: "type",
          lookup: { 1: "Flexible", 2: "Fixed", 3: "None" }
        },
        { title: "Discount Amount (%)", field: "amount", type: "numeric" },
        { title: "Required Amount ($)", field: "required", type: "numeric" }*/
      ],
      data: [
        {
          customer: "Thomas Shelby",
          relationship: 2,
          discount: 1,
          contact: "02123456789"
        },
        {
          customer: "Walter White",
          relationship: 2,
          discount: 2,
          contact: "02123456789"
        },
        {
          customer: "Pietro Proietti",
          relationship: 2,
          discount: 1,
          contact: "02123456789"
        }
      ]
    };
  }
  toRegular = customer => {
    if (customer.relationship === "1") {
      let data = this.state.data;
      let e = data.find(element => element === customer);
      e.type = 3;
      e.amount = "";
      e.required = "";
      this.setState({ data });
    }
    console.log(customer);
  };
  render() {
    return (
      <div>
        <MaterialTable
          title="Customers"
          columns={this.state.columns}
          data={this.state.data}
          editable={{
            onRowAdd: newData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data.push(newData);
                    return { ...prevState, data };
                  });
                  this.toRegular(newData);
                }, 600);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  if (oldData) {
                    this.setState(prevState => {
                      const data = [...prevState.data];
                      data[data.indexOf(oldData)] = newData;
                      return { ...prevState, data };
                    });
                    this.toRegular(newData);
                  }
                }, 600);
              }),
            onRowDelete: oldData =>
              new Promise(resolve => {
                setTimeout(() => {
                  resolve();
                  this.setState(prevState => {
                    const data = [...prevState.data];
                    data.splice(data.indexOf(oldData), 1);
                    return { ...prevState, data };
                  });
                }, 600);
              })
          }}
        />
      </div>
    );
  }
}

export default Customers;

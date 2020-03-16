import React from "react";
import MaterialTable from "material-table";

class Discounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Name", field: "name" },
        { title: "Type", field: "type", lookup: { 1: "Flexible", 2: "Fixed" } },
        { title: "Amount (%)", field: "amount", type: "numeric" },
        { title: "Required Amount ($)", field: "required", type: "numeric" }
      ],
      data: [
        {
          name: "5% off",
          type: 2,
          amount: 5,
          required: ""
        },
        {
          name: "over $10, 5% off",
          type: 1,
          amount: 5,
          required: 100
        }
      ]
    };
  }
  toFixed = customer => {
    if (customer.type === "2") {
      let data = this.state.data;
      data.find(element => element === customer).required = "";
      this.setState({ data });
    }
  };
  render() {
    return (
      <div>
        <MaterialTable
          title="Discounts"
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
                  this.toFixed(newData);
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
                    this.toFixed(newData);
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

export default Discounts;

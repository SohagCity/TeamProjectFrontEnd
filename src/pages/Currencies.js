import React from "react";
import MaterialTable from "material-table";

class Currencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Currency", field: "currency" },
        {
          title: "Exchange rate(to USD)",
          field: "rate",
          type: "numeric"
        }
      ],
      data: [
        { currency: "EUR", rate: 1.12 },
        { currency: "GBP", rate: 1.22 },
        { currency: "INR", rate: 0.01 },
        { currency: "AUD", rate: 0.62 }
      ]
    };
  }
  render() {
    return (
      <div>
        <MaterialTable
          title="Currencies"
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

export default Currencies;

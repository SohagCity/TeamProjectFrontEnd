import React from "react";
import MaterialTable from "material-table";

class Currencies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Blank type", field: "type", editable: "never" },
        {
          title: "Commission rate (%)",
          field: "rate",
          type: "numeric"
        }
      ],
      data: [
        { type: "444", rate: 1.12 },
        { type: "440", rate: 1.22 },
        { type: "420", rate: 0.01 },
        { type: "201", rate: 0.62 }
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
              })
          }}
        />
      </div>
    );
  }
}

export default Currencies;

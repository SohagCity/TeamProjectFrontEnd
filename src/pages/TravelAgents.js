import React from "react";
import MaterialTable from "material-table";

class TravelAgents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Name", field: "name" },
        {
          title: "Address",
          field: "address"
        },
        { title: "Contact Number", field: "number" },
        { title: "Email", field: "email" }
      ],
      data: [
        {
          name: "Travel Agent 1",
          address: "123 Street Name",
          email: "agent@gmail.com",
          number: "02123456789"
        },
        {
          name: "Travel Agent 3",
          address: "123 Street Name",
          email: "agent@gmail.com",
          number: "02123456789"
        },
        {
          name: "Travel Agent 2",
          address: "123 Street Name",
          email: "agent@gmail.com",
          number: "02123456789"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <MaterialTable
          title="Travel Agents"
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

export default TravelAgents;

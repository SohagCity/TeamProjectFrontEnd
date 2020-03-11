import React from "react";
import MaterialTable from "material-table";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ErrorIcon from "@material-ui/icons/Error";

class Blanks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "Blank Id", field: "blankId" },
        { title: "Blank Type", field: "blankType" },
        { title: "Assigned To", field: "assigned" },
        { title: "Status", field: "status" }
      ],
      data: [
        {
          blankId: "444000000",
          assigned: "Luigi",
          status: "sold",
          blankType: "lol"
        },
        {
          blankId: "444111111",
          assigned: "Mario",
          status: "valid",
          blankType: ""
        },
        {
          blankId: "222222222",
          assigned: "Wario",
          status: "void",
          blankType: ""
        }
      ]
    };
  }

  componentWillMount() {
    let data = this.state.data;
    data.forEach(blank => {
      const id = blank.blankId.substring(0, 3);
      let type = "";
      if (id === "444") type = "interline";
      else if (id === "440") type = "interline manual";
      else if (id === "420") type = "interline (2 coupons)";
      else if (id === "201") type = "domestic (2 coupons)";
      else if (id === "101") type = "domestic (1 coupons)";
      data.find(element => element === blank).blankType = type;
      this.setState({
        data: data
      });
      console.log(this.state.data);
    });
  }

  returnBlank = (event, rowData) => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          data.find(element => element === rowData).status = "stolen/lost";
          return { ...prevState, data };
        });
      }, 600);
    });
  };

  lostStolenBlank = (event, rowData) => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          data.find(element => element === rowData).status = "returned";
          return { ...prevState, data };
        });
      }, 600);
    });
  };

  onRowAdd = newData => {
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
        this.setState(prevState => {
          const data = [...prevState.data];
          data.push(newData);
          return { ...prevState, data };
        });
      }, 600);
    });
  };
  render() {
    return (
      <div>
        <MaterialTable
          title="Blanks"
          columns={this.state.columns}
          data={this.state.data}
          actions={[
            {
              icon: ErrorIcon,
              tooltip: "stolen/lost",
              onClick: (event, rowData) => this.returnBlank(event, rowData)
            },
            {
              icon: ArrowBackIcon,
              tooltip: "return",
              onClick: (event, rowData) => this.lostStolenBlank(event, rowData)
            }
          ]}
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

export default Blanks;

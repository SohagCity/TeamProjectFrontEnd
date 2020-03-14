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
        { title: "Blank Type", field: "blankType", editable: "never" },
        { title: "Coupons", field: "coupons", editable: "never" },
        { title: "Assigned To", field: "assigned" },
        { title: "Status", field: "status" }
      ],
      data: [
        {
          blankId: "444000000",
          assigned: "Luigi",
          status: "sold",
          blankType: "",
          coupons: ""
        },
        {
          blankId: "444111111",
          assigned: "Mario",
          status: "valid",
          blankType: "",
          coupons: ""
        },
        {
          blankId: "222222222",
          assigned: "Wario",
          status: "void",
          blankType: "",
          coupons: ""
        }
      ]
    };
  }

  componentWillMount() {
    let data = this.state.data;
    data.forEach(blank => {
      const id = blank.blankId.substring(0, 3);
      let type = "";
      let coupons = "";
      if (id === "444") {
        type = "interline";
        coupons = "4";
      } else if (id === "440") {
        type = "interline manual";
        coupons = "4";
      } else if (id === "420") {
        type = "interline";
        coupons = "2";
      } else if (id === "201") {
        type = "domestic";
        coupons = "2";
      } else if (id === "101") {
        type = "domestic";
        coupons = "1";
      } else if (id === "451") {
        type = "MCO";
      } else if (id === "452") {
        type = "MCO";
      }
      let e = data.find(element => element === blank);
      e.blankType = type;
      e.coupons = coupons;
      this.setState({
        data
      });
    });
  }
  BlankTypeCoupons = (name, id) => {
    let type = "";
    let coupons = "";
    if (id === "444") {
      type = "interline";
      coupons = "4";
    } else if (id === "440") {
      type = "interline manual";
      coupons = "4";
    } else if (id === "420") {
      type = "interline";
      coupons = "2";
    } else if (id === "201") {
      type = "domestic";
      coupons = "2";
    } else if (id === "101") {
      type = "domestic";
      coupons = "1";
    } else if (id === "451") {
      type = "MCO";
    } else if (id === "452") {
      type = "MCO";
    }
    return name === "coupons" ? coupons : type;
  };
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
                  this.componentWillMount();
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
                    this.componentWillMount();
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

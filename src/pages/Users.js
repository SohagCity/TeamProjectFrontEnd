import React from "react";
import MaterialTable from "material-table";

/*
npm uninstall react-modal
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ChangePassword from "../components/ChangePassword";
import ReactModal from "react-modal";
import { TextField } from "@material-ui/core";
*/

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "User Name", field: "userName" },
        { title: "Name", field: "name" },
        {
          title: "Role",
          field: "role",
          lookup: { 1: "Advisor", 2: "Office Manager", 3: "Admin" }
        }
      ],
      data: [
        { userName: "PussyDestroyer69", name: "Sam Sung", role: 1 },
        { userName: "kiss-my-axe", name: "Saad Maan", role: 1 },
        { userName: "hugs_for_drugs", name: "Moe Lester", role: 2 }
      ]
    };
  }
  /*const handleCloseModal = () => {
    setState({ showModal: false });
  };*/
  render() {
    return (
      <div>
        <MaterialTable
          title="Users"
          columns={this.state.columns}
          data={this.state.data}
          /*actions={[
          {
            icon: ArrowBackIcon,
            tooltip: "return",
            onClick: (event, rowData) => {
               new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.find(element => element === rowData).status = "returned";
                  return { ...prevState, data };
                });
              }, 600);
            });
              setState({ showModal: true });
            }
          }
        ]}*/
          actions={[
            {
              icon: "add",
              tooltip: "Add User",
              isFreeAction: true,
              onClick: event => (window.location = "/createUser")
            },
            {
              icon: "edit",
              tooltip: "Edit",
              onClick: (event, rowData) =>
                (window.location = "/editUser/" + rowData.userName)
            }
          ]}
          editable={{
            /*onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    const data = this.state.data;
                    const index = data.indexOf(oldData);
                    data[index] = newData;
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              }),*/
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  {
                    let data = this.state.data;
                    const index = data.indexOf(oldData);
                    data.splice(index, 1);
                    this.setState({ data }, () => resolve());
                  }
                  resolve();
                }, 1000);
              })
          }}
        />

        {/*<ReactModal isOpen={state.showModal} contentLabel="Minimal Modal Example">
        <TextField></TextField>
        <button onClick={handleCloseModal}>Close Modal</button>
    </ReactModal>*/}
      </div>
    );
  }
}

export default Users;

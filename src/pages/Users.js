import React from "react";
import MaterialTable from "material-table";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: "User Name", field: "userName" },
        { title: "Name", field: "name" },
        { title: "Travel Agent", field: "agent" },
        {
          title: "Role",
          field: "role",
          lookup: { 1: "Advisor", 2: "Office Manager", 3: "Admin" }
        }
      ],
      data: [
        {
          userName: "PussyDestroyer69",
          name: "Sam Sung",
          agent: "Travel Agent 1",
          role: 1
        },
        {
          userName: "kiss-my-axe",
          name: "Saad Maan",
          agent: "Travel Agent 1",
          role: 1
        },
        {
          userName: "hugs_for_drugs",
          name: "Moe Lester",
          agent: "Travel Agent 1",
          role: 2
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <MaterialTable
          title="Users"
          columns={this.state.columns}
          data={this.state.data}
          actions={[
            {
              icon: "add",
              tooltip: "Add User",
              isFreeAction: true,
              onClick: event => (window.location = "/users/add")
            },
            {
              icon: "edit",
              tooltip: "Edit",
              onClick: (event, rowData) =>
                (window.location = "/users/edit/" + rowData.userName)
            }
          ]}
          editable={{
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
      </div>
    );
  }
}

export default Users;

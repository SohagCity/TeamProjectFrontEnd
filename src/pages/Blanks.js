import React from "react";
import MaterialTable from "material-table";

export default function Blanks() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Blank Id", field: "blankId", type: "numeric" },
      { title: "Assigned To", field: "assigned" },
      { title: "Status", field: "status" }
    ],
    data: [
      { blankId: "444000000", assigned: "Luigi", status: "sold" },
      { blankId: "444111111", assigned: "Mario", status: "valid" },
      { blankId: "222222222", assigned: "Wario", status: "void" }
    ]
  });
  return (
    <div className="content" style={{ border: "1px solid" }}>
      <MaterialTable
        title="Blanks"
        columns={state.columns}
        data={state.data}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                resolve();
                setState(prevState => {
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
                  setState(prevState => {
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
                setState(prevState => {
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

import React from "react";
import MaterialTable from "material-table";

export default function Customers() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Customer Name", field: "customer" },
      {
        title: "Discount Type",
        field: "type",
        lookup: { 1: "Flexible", 2: "Fixed" }
      },
      { title: "Discount Amount (%)", field: "amount", type: "numeric" },
      { title: "Required Amount ($)", field: "required", type: "numeric" }
    ],
    data: [
      { customer: "Thomas Shelby", type: 1, amount: 10 },
      { customer: "Walter White", type: 2, amount: 20, required: 200 },
      { customer: "Pietro Proietti", type: 2, amount: 20, required: 100 }
    ]
  });
  return (
    <MaterialTable
      title="Customers"
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
  );
}

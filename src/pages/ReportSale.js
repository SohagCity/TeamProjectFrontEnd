import React, { Component } from "react";
import "../App.scss";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Box, TextField } from "@material-ui/core";

const useStyles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    }
  },
  label: {
    margin: theme.spacing(2),
    position: "relative",
    top: 30
  },
  formControl: {
    margin: theme.spacing(1)
  },
  advisor: {
    margin: theme.spacing(1),
    width: 390
  },
  button: {
    margin: theme.spacing(2),
    width: 390
  }
});

class ReportSale extends Component {
  state = {
    avalibeBlanks: ["44400000000", "4441111111"], //TODO: get from database
    blank: "44400000000",
    currencies: ["USD", "EUR", "GBP"], //TODO: get from database
    currency: "USD",
    price: "",
    paymentMethods: ["card", "cash"],
    paymentMethod: "card",
    customers: [
      { name: "", discountType: "", discountAmount: "0" },
      { name: "Customer1", discountType: "flexible", discountAmount: "100,20" }, //100 being the requiered amount need to apply the disocunt and 20 the %
      { name: "Customer2", discountType: "fixed", discountAmount: "10" },
      { name: "Customer3", discountType: "fixed", discountAmount: "20" }
    ],
    customer: { name: "", discountType: "", discountAmount: "0" }, //ASSUMING THAT SYSTEM WILL CALCULATE DISCOUNT AUTOMATICALLY
    total: ""
  };

  onChangeCurrency = e => {
    this.setState({
      currency: e.target.value
    });
  };

  onChangePrice = e => {
    this.setState({
      price: e.target.value
    });
  };

  onChangePaymentMethod = e => {
    this.setState({
      paymentMethod: e.target.value
    });
  };

  onChangeCustomer = e => {
    this.setState({
      customer: e.target.value
    });
  };

  onChangeBlank = e => {
    this.setState({
      blank: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    let price = parseFloat(this.state.price);
    if (this.state.customer.discountType === "fixed") {
      price =
        price - (price / 100) * parseFloat(this.state.customer.discountAmount);
    } else if (this.state.customer.discountType === "flexible") {
      let required = this.state.customer.discountAmount.split(",");
      if (price >= parseFloat(required[0])) {
        price = price - (price / 100) * parseFloat(required[1]);
      }
    }
    const sale = {
      blank: this.state.blank,
      price,
      currency: this.state.currency,
      paymentMethod: this.state.paymentMethod,
      customer: this.state.customer
    };
    console.log(sale);
    //window.location = "/";
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={1}>
          <br />
          <h2>Report Sale</h2>
          <form
            noValidate
            autoComplete="off"
            className="InputForm"
            onSubmit={this.onSubmit}
          >
            <div>
              <label className={classes.label}>Blank:</label>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="BlankSelect"
                  value={this.state.blank}
                  onChange={this.onChangeBlank}
                >
                  {this.state.avalibeBlanks.map(function(blank) {
                    return (
                      <MenuItem key={blank} value={blank}>
                        {blank}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>

            <div>
              <label className={classes.label}>Price:</label>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="Price"
                  value={this.state.currency}
                  onChange={this.onChangeCurrency}
                >
                  {this.state.currencies.map(function(currency) {
                    return (
                      <MenuItem key={currency} value={currency}>
                        {currency}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <TextField
                required
                onInput={e => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                inputProps={{
                  minLength: 11,
                  maxLength: 11
                }} //TODO: currency input
                id="outlined"
                defaultValue=""
                variant="outlined"
                onChange={this.onChangePrice}
              />
            </div>

            <div>
              <label className={classes.label}>Payment Method:</label>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="AdvisorSelect"
                  value={this.state.paymentMethod}
                  onChange={this.onChangePaymentMethod}
                >
                  {this.state.paymentMethods.map(function(paymentMethod) {
                    return (
                      <MenuItem key={paymentMethod} value={paymentMethod}>
                        {paymentMethod}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>

            <div>
              <label className={classes.label}>Customer:</label>
              <FormControl variant="outlined" className={classes.formControl}>
                <Select
                  id="AdvisorSelect"
                  value={this.state.customer}
                  onChange={this.onChangeCustomer}
                >
                  {this.state.customers.map(function(customer) {
                    return (
                      <MenuItem key={customer.name} value={customer}>
                        {
                          //Warning cuz value =",0" can be ignored
                        }
                        {customer.name + " - " + customer.discountType}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <Box m={1}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className="btn btn-primary"
              >
                Report
              </Button>
            </Box>
            <br />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(ReportSale);

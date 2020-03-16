import React, { Component } from "react";
import "../App.scss";
import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import { withStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import { Box, TextField, InputLabel } from "@material-ui/core";
import PaymentForm from "../components/PaymentForm";

const useStyles = theme => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 185
    }
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300
  },
  currency: {
    margin: theme.spacing(1),
    minWidth: 100
  }
});

class RecordSale extends Component {
  state = {
    avalibeBlanks: ["44400000000", "4441111111"],
    blank: "44400000000",
    currencies: ["USD", "EUR", "GBP"],
    currency: "",
    price: "",
    paymentMethods: ["card", "cash", "pay later"],
    paymentMethod: "cash",
    customers: [
      { name: "", discountType: "", discountAmount: "0" },
      { name: "Customer1", discountType: "flexible", discountAmount: "100,20" }, //100 being the requiered amount need to apply the disocunt and 20 the %
      { name: "Customer2", discountType: "fixed", discountAmount: "10" },
      { name: "Customer3", discountType: "fixed", discountAmount: "20" }
    ],
    customer: "" /*{ name: "", discountType: "", discountAmount: "0" }*/, //ASSUMING THAT SYSTEM WILL CALCULATE DISCOUNT AUTOMATICALLY
    total: "",
    date: "",
    errors: {
      price: "",
      currency: "",
      date: ""
    }
  };
  validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
  };

  onChangeCurrency = e => {
    this.setState({
      currency: e.target.value
    });
  };

  onChangePrice = e => {
    let errors = this.state.errors;
    errors.price = e.target.value < 1 ? "Please insert a value" : "";

    this.setState({
      errors
    });
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
    let errors = this.state.errors;
    errors.currency =
      this.state.currency === "" ? "Please insert a currency " : "";
    errors.date = this.state.date === "" ? "Please insert a date " : "";
    this.setState({
      errors
    });

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
    if (this.validateForm(this.state.errors)) {
      const sale = {
        blank: this.state.blank,
        price,
        currency: this.state.currency,
        paymentMethod: this.state.paymentMethod,
        customer: this.state.customer,
        date: this.state.date
      };
      console.log(sale);
    }
    //window.location = "/recordSale";
  };

  render() {
    const { errors } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper elevation={1}>
          <br />
          <h2>Record Sale</h2>
          <form
            noValidate
            autoComplete="off"
            className="InputForm"
            onSubmit={this.onSubmit}
          >
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Blank</InputLabel>
                <Select
                  id="BlankSelect"
                  label="Blank"
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
              <FormControl variant="outlined" className={classes.currency}>
                <InputLabel>Currency</InputLabel>
                <Select
                  id="Currency"
                  label="Currency"
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
                className={classes.amount}
                label="Amount"
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
            {errors.currency.length > 0 && (
              <span className="error">{errors.currency}</span>
            )}
            {errors.price.length > 0 && (
              <span className="error">{errors.price}</span>
            )}
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Customer</InputLabel>
                <Select
                  id="AdvisorSelect"
                  label="Customer"
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
            <div>
              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Payment Method</InputLabel>
                <Select
                  id="AdvisorSelect"
                  label="Payment Method"
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
              {this.state.paymentMethod === "card" && (
                <PaymentForm></PaymentForm>
              )}
            </div>
            <TextField
              required
              type="date"
              className={classes.formControl}
              id="date"
              defaultValue={this.state.date}
              variant="outlined"
            ></TextField>
            <div>
              {errors.date.length > 0 && (
                <span className="error">{errors.date}</span>
              )}
            </div>
            <Box m={1}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className="btn btn-primary"
              >
                Record
              </Button>
            </Box>

            <br />
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(useStyles, { withTheme: true })(RecordSale);

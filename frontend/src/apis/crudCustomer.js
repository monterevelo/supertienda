import axios from "axios";
const baseUrl = "http://localhost:5000";

export function searchCustomers(city, callback) {
  axios.get(baseUrl + "/customers/search/" + city)
    .then((res) => {
      callback(res.data);
    });
};

export function addCustomer(customer, callback) {
  console.log(customer);
  console.log(customer.id);
  axios.post(baseUrl + "/customers/" + customer.id, customer)
    .then((res) => {
      callback(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};


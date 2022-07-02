import axios from "axios";
const baseUrl = "http://localhost:5000";

export function searchClientes(city, callback) {
  axios.get(baseUrl + "/clientes/search/" + city)
    .then((res) => {
      callback(res.data);
    });
};

export function addCliente(cliente, callback) {
  axios.post(baseUrl + "/clientes/" + cliente.id, cliente)
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};
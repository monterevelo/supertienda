import axios from "axios";
const URL1 = "http://localhost:5000";

export function searchClientes(city, callback) {
    axios.get(URL1+"/clientes/search/"+city)
        .then((res) => {
            callback(res);
        })
        .catch((err) => {
            callback(err);
    })
}




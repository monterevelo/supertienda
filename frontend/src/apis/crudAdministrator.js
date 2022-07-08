import axios from "axios";
const baseUrl = "http://localhost:5000";

export function searchAdministrators(city, callback) {
  axios.get(baseUrl + "/administrators/search/" + city)
    .then((res) => {
      callback(res.data);
    });
};

export function addAdministrator(administrator, callback) {
  console.log("administrator: ",administrator);
  console.log("administrator.id: ",administrator.id);

  axios.post(baseUrl + "/administrators/" + administrator.id, administrator)
    .then((res) => {
      callback(res.data);
      console.log(res.data);
    })
    .catch((err) => {
      callback(err);
    });
};

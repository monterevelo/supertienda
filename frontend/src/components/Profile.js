import React from "react";
import { Stack, Image } from "react-bootstrap";

const Profile = (props) => {
  const  { clienteData }  = props;
  
  return (
    <Stack gap={2} className="align-items-center">
      <Image
        src={clienteData.photoUrl}
        roundedCircle
        width="80px"
        height="80px"
      />
      <h4>{clienteData.nombre}</h4>
      <div className="justify-content-center">
        <Stack gap={2} direction="horizontal">
          <div>{clienteData.ciudad}</div>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <div>{clienteData.email}</div>
        </Stack>
        <p>
          {clienteData.observaciones}
        </p>
      </div>
    </Stack>
  );
};
export default Profile;

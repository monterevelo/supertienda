import React from "react";
import { Stack, Image } from "react-bootstrap";

const Profile = (props) => {
  const  { customerData }  = props;
  
  return (
    <Stack gap={2} className="align-items-center">
      <Image
        src={customerData.photoUrl}
        roundedCircle
        width="80px"
        height="80px"
      />
      <h4>{customerData.name}</h4>
      <div className="justify-content-center">
        <Stack gap={2} direction="horizontal">
          <div>{customerData.city}</div>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <div>{customerData.email}</div>
        </Stack>
        <p>
          {customerData.observations}
        </p>
      </div>
    </Stack>
  );
};
export default Profile;

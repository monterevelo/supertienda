import React from "react";
import { Stack, Image } from "react-bootstrap";

const Profile = () => {
  return (
    <Stack gap={2} className="align-items-center">
      <Image
        src="https://i.pinimg.com/550x/61/19/d1/6119d15a31c055db571287736da50339.jpg"
        roundedCircle
        width="80px"
        height="80px"
      />
      <h4>German Alirio Montenegro Revelo</h4>
      <div className="justify-content-center">
        <Stack gap={2} direction="horizontal">
          <div>Pasto</div>
        </Stack>
        <Stack gap={2} direction="horizontal">
          <div>Clases de Programación</div>
        </Stack>
        <p>
          Hola me encanta la tecnología y tengo bastante experiencia enseñando programación.
        </p>
      </div>
    </Stack>
  );
};
export default Profile;

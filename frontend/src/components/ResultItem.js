import React from 'react';
import { Stack, Image } from 'react-bootstrap';

const ResultItem =(props) => {
    return (
      <Stack gap={4} direction="horizontal">
        <Image
            src={props.data.photoUrl}
            roundedCircle
            width = "60px"
            height = "60px"
        />

        <div>
            <h5>{props.data.nombre}</h5>

            <Stack gap={2} direction="horizontal">
                <div>{props.data.ciudad}</div>
            </Stack>
            
            <Stack gap={2} direction="horizontal">
                <div>{props.data.email}</div>
            </Stack>
        </div>
      </Stack>
    );
  };  
  export default ResultItem;

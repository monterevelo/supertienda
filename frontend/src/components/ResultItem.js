import React from 'react';
import { Stack, Image } from 'react-bootstrap';

const ResultItem =(props) => {
    const { clienteData } = props;
    return (
      <Stack gap={4} direction="horizontal">
        <Image
            src={clienteData.photoUrl}
            roundedCircle
            width = "60px"
            height = "60px"
        />

        <div>
            <h5>{clienteData.nombre}</h5>

            <Stack gap={2} direction="horizontal">
                <div>{clienteData.ciudad}</div>
            </Stack>
            
            <Stack gap={2} direction="horizontal">
                <div>{clienteData.email}</div>
            </Stack>
        </div>
      </Stack>
    );
  };  
  export default ResultItem;

import React from 'react';
import { Stack, Image } from 'react-bootstrap';

const ResultItem =() => {
    return (
      <Stack gap={4} direction="horizontal">
        <Image
            src="https://i.pinimg.com/550x/61/19/d1/6119d15a31c055db571287736da50339.jpg"
            roundedCircle
            width = "60px"
            height = "60px"
        />

        <div>
            <h5>German Montenegro Revelo</h5>

            <Stack gap={2} direction="horizontal">
                <div>Pasto</div>
            </Stack>
            
            <Stack gap={2} direction="horizontal">
                <div>Clases de Programación</div>
            </Stack>
        
        </div>
      </Stack>
    );
  };  
  export default ResultItem;

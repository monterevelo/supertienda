import React from 'react';
import { Stack, Image } from 'react-bootstrap';
import customerLogo from '../assets/img/customerLogo.png';

const ResultItem =(props) => {
    const { customerData } = props;
    if(customerData.photoUrl == null){
      customerData.photoUrl = customerLogo;
    }
    return (
      <Stack gap={4} direction="horizontal">
        <Image
            src={customerData.photoUrl}
            roundedCircle
            width = "60px"
            height = "60px"
        />

        <div>
            <h5>{customerData.name}</h5>

            <Stack gap={2} direction="horizontal">
                <div>{customerData.city}</div>
            </Stack>
            
            <Stack gap={2} direction="horizontal">
                <div>{customerData.email}</div>
            </Stack>
        </div>
      </Stack>
    );
  };  
  export default ResultItem;

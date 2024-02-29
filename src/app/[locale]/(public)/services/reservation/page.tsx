import React from 'react';
import { Container } from 'reactstrap';
import { Reservation } from '@components';
const Page = () => {
  return (
    <Container className="reservation">
      <Reservation />
    </Container>
  );
};

export default Page;

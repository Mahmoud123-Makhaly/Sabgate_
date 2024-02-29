import React from 'react'
import { Container } from 'reactstrap';

const layout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <Container>
            {children}
        </Container>
    )
}

export default layout
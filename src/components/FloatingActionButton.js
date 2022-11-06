import React from 'react'
import { Container, Button, Link } from 'react-floating-action-button'

const FloatingButton = () => {
    return (
        <Container>
            <Button
                icon="fas fa-plus"
                rotate={true}
                onClick={() => alert('Button Clicks')} />
        </Container>
    )
}

export default FloatingButton;
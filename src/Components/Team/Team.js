import React from 'react'
import { Image, Cards, Card, Container, Row, CardDeck } from 'react-bootstrap'

export const About = () => (
    <>
        <Container className="col-10">
            <h1 class="display-1 text-center text-muted p-3">Who we Are</h1>

            <Container fluid className="mt-5 mb-5">
                <CardDeck>
                    <Card className="bg-dark text-white">
                        <Card.Img variant="top" src="./Images/Madeline.jpg" />
                        
                        <Card.Body>
                            <Card.Title>Madeline Schiefelbein</Card.Title>
                            Madeline Schiefelbein is a sophomore at Whitworth University. Her major is Business Administration with a concentration in Accounting, and she is minoring in Information Technology.
                        </Card.Body>
                    </Card>

                    <Card className="bg-dark text-white">
                        <Card.Img variant="top" src="./Images/George.jpg" />
                        <Card.Body>
                            <Card.Title>George Bjork</Card.Title>
                            George Bjork is a sophomore at Whitworth University. His major is  Computer Science and he is pursinging a minor in Business.
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        </Container>
    </>
)
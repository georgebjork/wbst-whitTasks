import React from 'react'
import { Image, Cards, Card } from 'react-bootstrap'

export const About = () => (
    <>
        <div class="container col-10">
            <h1 class="display-1 text-center text-muted p-3">Who we Are</h1>

            <div class="row mt-5 mb-5">
                <Card className="col-6 bg-dark text-white">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Title>Madeline Schiefelbein</Card.Title>
                    <Card.Body>Madeline Schiefelbein is a sophomore at Whitworth University. Her major is Business Administration with a concentration in Accounting, and she is minoring in Information Technology.</Card.Body>
                </Card>

                <Card className="col-6 bg-dark text-white">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Title>George Bjork</Card.Title>
                    <Card.Body>George Bjork is a sophomore at Whitworth University. His major is  Computer Science and he is pursinging a minor in Business.</Card.Body>
                </Card>

            </div>
        </div>
    </>
)
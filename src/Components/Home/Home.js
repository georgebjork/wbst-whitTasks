import React from 'react'
import { Button, Col, Container, Row, Card } from 'react-bootstrap'


export const Home = () => (
    <>
        <Container className="col-10">
            <Row>
                <Col className="p-5">
                    <h1 class="display-1 text-muted text-center mt-5 p-2">A new way for Pirates to see their day</h1>
                </Col>

                <Col className="p-5">

                </Col>

            </Row>

            <Container fluid className="bg-dark p-5">
                <p class="text-white lead text-center">Q: What features intrigue you most about WhitTasks? </p>
                <h1 class="text-center fst-italic display-6 text-white">
                    "I like the idea of consolidating all my school related activities into one platform."
                </h1>

                <h4 class="mb-3 fst-italic display-5 text-white text-end"> - Whitworth Student</h4>
                <Button href="/why" className="float-end" variant="outline-danger">See what others have to say</Button>
            </Container>




            <h3 class="text-center display-3 text-muted p-5"> What can it do?</h3>

            <Container fluid className="mb-5">
                <Row>
                    <Container className="col-4">
                        <Card className="bg-light text-dark">
                            <Card.Header>#1</Card.Header>
                            <Card.Body>
                                <Card.Title>Organization</Card.Title>
                                <Card.Body>WhitTasks provides clear and easy organization of a students day through the "My Day" page. This page shows students
                                assingments due that day.</Card.Body>
                            </Card.Body>
                        </Card>
                    </Container>

                    <Container className="col-4">
                        <Card className="bg-light text-dark">
                            <Card.Header>#2</Card.Header>
                            <Card.Body>
                                <Card.Title>Blackboard</Card.Title>
                                <Card.Body>WhitTasks provides studients connectivity to their Blackboard account. This allows WhitTasks to pull in new assignments.
                                and show due dates.</Card.Body>
                            </Card.Body>
                        </Card>
                    </Container>

                    <Container className="col-4">
                        <Card className="bg-light text-dark">
                            <Card.Header>#3</Card.Header>
                            <Card.Body>
                                <Card.Title>Whitworth Activites</Card.Title>
                                <Card.Body>WhitTasks shows students sporting events, actives and speakers on their "My Day" page. Any upcoming
                                events can be found in the "Campus Life" page.</Card.Body>
                            </Card.Body>
                        </Card>
                    </Container>

                </Row>

                <Row className="mt-5">
                    <Container className="col-4">
                        <Card className="bg-light text-dark">
                            <Card.Header>#4</Card.Header>
                            <Card.Body>
                                <Card.Title>Reminders</Card.Title>
                                <Card.Body>WhitTaks provides students with clear and on time reminders of assingments and campus actives.</Card.Body>
                            </Card.Body>
                        </Card>
                    </Container>

                    <Container className="col-4">
                        <Card className="bg-light text-dark">
                            <Card.Header>#5</Card.Header>
                            <Card.Body>
                                <Card.Title>UI</Card.Title>
                                <Card.Body>WhitTasks gives students a clean, modern, and intuitive user interface that is easy to navigate and understand.</Card.Body>
                            </Card.Body>
                        </Card>
                    </Container>

                    <Container className="col-4">
                        <Card className="bg-light text-dark">
                            <Card.Header>#6</Card.Header>
                            <Card.Body>
                                <Card.Title>Campus Alerts</Card.Title>
                                <Card.Body>WhitTasks helps students be aware of current campus anouncments and updates.</Card.Body>
                            </Card.Body>
                        </Card>
                    </Container>
                </Row>
            </Container>


            <p></p>
            <p></p>
            <p></p>

        </Container>
    </>

)
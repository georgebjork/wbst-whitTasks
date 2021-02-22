import React from 'react'
import { Container } from 'react-bootstrap'

export const Why = () => (
    <>
        <Container className="col-10">
            <Container fluid className="text-muted p-3">
                <h1 class="display-1 text-muted text-center mt-5 mb-5">Why Are We Making This App?</h1>
                <p class="text-muted h-6 lead">
                    WhitTasks is an app that George Bjork and Madeline Schiefelbein are developing to provide students a schedule that fits their needs. Without WhitTasks, students don't
                    have a way to play their personal schedules. The current system, an optional Blackboard app, has a variety of challenges, such as  lag when assignments are posted. The Blackboard
                    app is limited to only assignment postings as well. Our app provides students with the ability to add in their own school schedule, as well as activities around campus that they
                    are interested in attending, or meetings that they have to attend. Another feature would include the ability to add in assignments and group projects that the student has. Students
                    can add these into a checklist feature of the app that would allow them to check off each of these “tasks” as they are completed. To add to this feature, professors would also be
                    able to access the assignments portion of the app and add in tasks for the student to complete. Professors would also be able to send out notifications to students, such as the
                    cancelation of class.
                </p>
            </Container>

            <Container fluid className="text-white bg-dark mb-5">
            
                <h1 class="display-1 text-center p-5">We Heard Your Voices</h1>

                <Container fluid className="p-5">

                    <p class="lead">Q: What features intrigue you most about WhitTasks? </p>
                    <p class="display-6 fst-italic">"I like the idea of consolidating all of my school related schedule things into one platform."</p>
                    <p class="lead">- Everest Pinneo (Business Management) </p>

                    <p class="mt-5 lead">Q: Why would you use this app?</p>
                    <p class="display-6 fst-italic">"I would use it because Whitworth doesn’t have an easy way for students to find information. It’s so scattered, you have to hunt for everything."</p>
                    <p class="lead">- Kyra Furuta (Secondary Education and Math)</p>

                    <p class="mt-5 lead">Q: Would this app be useful in your current field of study? </p>
                    <p class="display-6 fst-italic"> Yes! A lot of my teachers uses different sites and ideally, I should only have to check one place." </p>
                    <p class="lead">- Logan Ritterbush (Civil Engineering)</p>

                    <p class="mt-5 lead"> Q: What critiques of the Blackboard app do you have, if any? </p>
                    <p class="display-6 fst-italic"> "The UI. It's difficult to use on the phone opposed to the website." </p>
                    <p class="lead">- Grant Greenhall (Pre-Med)</p>

                    <p class="mt-5 lead"> Q: Do you use the Blackboard app? If so, do you like the app?    </p>
                    <p class="display-6 fst-italic"> "Yes. I don’t love it but I don’t hate it, I mainly use it out of necessity." </p>
                    <p class="lead">- Savannah Hayward (Communications) </p>

                </Container>
            </Container>

        </Container>
    </>
)
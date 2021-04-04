import React, { Component } from 'react'
import { Container, } from 'react-bootstrap'
import { withRouter } from 'react-router-dom';
import { addTask } from '../../Utils/API';



class AddTask extends Component {

    constructor(props) {
        super(props);
        this.task = React.createRef();
        this.id = React.createRef();
        this.addTaskClick = this.addTaskClick.bind(this);  
    }

    addTaskClick = () => {
        
        if(this.task.current.value !== "" && this.task.current.value !== "")
        {

            console.log("The task being added is: " + this.task.current.value);
            this.id = Number(this.id.current.value);
            addTask(this.id, this.task.current.value );

            //This would take me to a new page 
            console.log("hello world");
            this.props.history.push("/AddTask");
        }
    }


    render() {

        return (
            <>
                <Container className="Col-10">
                    <form class="m-auto col-6 text-center">
                        <h3 class="font-weight-normal">Add Task</h3>

                        <div class="col-9 mx-auto mt-4">
                            <label for="fName" class="sr-only">Task:</label>
                            <input id="fName" type="text" class="form-control" placeholder="Task" ref={this.task} required />
                        </div>

                        <div class="col-9 mx-auto mt-4">
                            <label for="lName" class="sr-only">Id:</label>
                            <input id="lName" type="text" class="form-control" placeholder="User ID" ref={this.id} required />
                        </div>

                        <div class="col-9 mx-auto mt-4">
                            <button class="btn btn-primary float-right" onClick={this.addTaskClick}>
                                Submit
                            </button>
                        </div>

                    </form>
                </Container>
            </>

        )
    }
};



export default withRouter(AddTask)
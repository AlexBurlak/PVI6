import { useState } from 'react';
import { Modal, Form, Button, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import './UserForm.css';

function UserForm() {
    const [validated, setValidated] = useState(false);
    const [state, setState] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        categories: [],
        biography: '',
        rank: 'GM'
    })
    const [image, setImage] = useState(null);
    const [cardDisplay, setCardDisplay] = useState('none');

    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (state.password !== state.confirmPassword) {
            Swal.fire({
                title: 'Validation error!',
                text: "Passwords are not the same",
                icon: "error",
                timer: "1500",
                showConfirmButton: false
            });
            return;
        }
        setValidated(true);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        };
        const playerPost = fetch('https://localhost:7232/api/Player', requestOptions)
            .then(async response => {
                const isJson = response.headers.get('content-type')?.includes('application/json');
            const data = isJson && await response.json();

            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }

            alert("Id: " + data.id + "\nName: " + data.name + "\nPassword: " + data.password);
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
    }

    const handleChange = (event) => {
        let value = event.target.value;
        if(event.target.name === 'categories') {
            let categories = state[event.target.name];
            if (event.target.checked) {
                categories.push(event.target.value);
            } else {
                const index = categories.indexOf(event.target.value);
                if (index > -1) {
                    categories.splice(index, 1);
                }
            }
            value = categories;
        }
        setState({
            ...state,
            [event.target.name]: value,
        })
    }

    // const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json' }
    // };
    // fetch('https://localhost:7232/api/Player', requestOptions)
    //         .then(response => response.json)
    //         .then(data => console.log(data))
    //         .catch(error => console.error(error));

    return (
        <div>
            <Card style={{'display': cardDisplay}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{state.username}</Card.Title>
                </Card.Body>
            </Card>
            <Modal.Dialog className="user-dialog">
                <Modal.Header>
                    <Modal.Title>
                        User info
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form validated={validated} onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>
                                Email
                            </Form.Label>
                            <Form.Control 
                                type="email" 
                                name="email"
                                placeholder="Enter email..." 
                                onChange={handleChange}
                                required
                                pattern='^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Username
                            </Form.Label>
                            <Form.Control type="text" 
                                placeholder="Enter username..." 
                                onChange={handleChange}
                                name="username"
                                required
                                minLength="6"
                                maxLength="32" />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Password
                            </Form.Label>
                            <Form.Control onChange={handleChange} name="password" type="password" placeholder="Enter password..." required />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Confirm password
                            </Form.Label>
                            <Form.Control onChange={handleChange} name="confirmPassword" type="password" placeholder="Confirm password..." required />
                        </Form.Group>
                        {/* <Form.Group>
                            <Form.Label>
                                Chess play categories
                            </Form.Label>
                            <Form.Check onChange={handleChange} name="categories" type="checkbox" label="Blitz" value="Blitz"/>
                            <Form.Check onChange={handleChange} name="categories" type="checkbox" label="Hour"  value="Hour"/>
                        </Form.Group> */}
                        <Form.Group>
                            <Form.Label>Biography</Form.Label> 
                            <Form.Control
                                onChange={handleChange}
                                name="biography"
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Rang</Form.Label>
                            <Form.Select name="rank" onChange={handleChange}>
                                <option value="GM">Grandmaster</option>
                                <option value="IM">International master</option>
                                <option value="FM">FIDE master</option>
                                <option value="CM">Candidate master</option>
                            </Form.Select>
                        </Form.Group>
                        <Button type="submit" className="form-control mt-2">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
};

export default UserForm;

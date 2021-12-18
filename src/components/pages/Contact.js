/*Need to be added functionality in Redux to send data or PHP for the message to be send*/
import React from 'react'
import Hero from '../Hero'
import Content from '../Content'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: true,
            emailSent: null
        }
    }

    handleChange = (event) => {
        console.log(event)

        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        // doesn't allow to send an infinite number of emails
        this.setState({
            disabled: true,
            emailSent: false
        });
    }

    render() {
    return(
        <div>
            <Hero title={this.props.title}/>

            <Content>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group>
                        <Form.Label htmlFor="full-name">Full Name</Form.Label>
                        <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="message">Message</Form.Label>
                        <Form.Control id="message" name="message" as="textarea" cols="50" rows="10" value={this.state.message} onChange={this.handleChange} />
                    </Form.Group>

                    <Button className='d-inline-bock' variant='primary' type='submit' disabled={this.state.disabled}>
                        Send messsage
                    </Button>

                    {this.state.emailSent === true && <p className="d-inline success-msg">Email Succesfully Sent</p>}
                    {this.state.emailSent === false && <p className="d-inline err-msg">Email Not Sent</p>}
                </Form>
            </Content>
        </div>
    );
    }
}

export default Contact

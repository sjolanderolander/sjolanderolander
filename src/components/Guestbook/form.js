import React from 'react';
import Message from './message';

export default class Form extends React.Component {
  constructor(props) {
  	super(props);
    	this.state = { feedback: '', name: '', email: 'email@example.com', message: false };
    	this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
  	return (
    	<form className="guestbookForm">
        	<input
          	id="test-mailing"
          	name="feedback"
          	onChange={this.handleChange}
          	placeholder="Ditt meddelande"
          	required
          	value={this.state.feedback}
        	/>
          <input
          	id="test-mailing"
          	name="name"
          	onChange={this.handleChange}
          	placeholder="Namn"
          	required
          	value={this.state.name}
        	/>
      	<button value="Skicka" className="guestbookFormButton" onClick={this.handleSubmit}>Skicka</button>
        {this.state.message && <Message />}
    	</form>
  	 )
  }

  handleChange(event) {
    let value = event.target.value;
    this.setState({
      ...this.state,
      [event.target.name]: value,
    })
  }

  handleSubmit (event) {
	   const templateId = 'template_Lr5P5DgQ';
	    this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email});
      this.setState({
        message: true
      })
  }

  sendFeedback (templateId, variables) {
  	window.emailjs.send(
    	'gmail', templateId,
    	variables
    	).then(res => {
      	console.log('Vad kul! Meddelandet är skickat.')
    	})
    	// Handle errors here however you like, or use a React error boundary
    	.catch(err => console.error('Åh nej, något gick fel.', err))
  }
}

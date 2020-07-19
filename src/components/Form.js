import React, { Component } from 'react'
import Audio from './Audio'
class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			answer: '',
		}
	}

	handleAnswerChange = event => {
		this.setState({
			answer: event.target.value
        })
        console.log(this.state.answer)
	}
     
    handleSubmit = (event) =>{
         alert(`${this.state.answer}`)
         event.preventDefault()
    }
	 

	render() {
		 
		return (

			<div className = "form-group" >
			<form  onSubmit = {this.handleSubmit}>
				<div>
					 
					<textarea
						type="text"
						value={this.state.username}
						onChange={this.handleAnswerChange}
						placeholder = "Answer"
					/>
                     <Audio/>
                    <button type = "submit" >Submit</button>
				</div>
			</form>
			</div>
		)
	}
}

export default Form
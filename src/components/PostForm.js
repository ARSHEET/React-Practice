import React, { Component } from 'react'
import axios from 'axios'


class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId: '',
             title: '',
             body: ''
        }
    }
    ChangeInput=(e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    SubmitButton=(e)=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response =>{
            alert(response)
        })
        .catch(error =>{
            alert(error)
        })
    }
    
    render() {
        const{userId, title, body} = this.state
        return (
            <div>
                <form onSubmit={this.SubmitButton}>
                    <div><input type="text" name="userId" value={userId} onChange={this.ChangeInput}/></div>
                    <div><input type="text" name="title" value={title} onChange={this.ChangeInput}/></div>
                    <div><input type="text" name="body" value={body} onChange={this.ChangeInput}/></div>
                    <button type="submit">SUBMIT</button>
                </form>
                
            </div>
        )
    }
}

export default PostForm

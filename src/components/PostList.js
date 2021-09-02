import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts: [],
             errorMsg: ''
        }
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error retreiving data'})
        })
    }

    render() {
        const {posts, errorMsg} = this.state
        return (
            <div>
                Lists of Posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}><b>{post.id}</b> {post.title}</div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList

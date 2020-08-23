import React, {Component} from "react"
import axios from "axios"

class Post extends Component {
    constructor(){
        super();
        this.state ={
            Posts:[]
        }
    }  
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res=>{
            console.log(res.data)
            this.setState({Posts: res.data})
        })
        .catch(err=> console.log(err))
    }
        
    

    render(){
        const Post = this.state.Posts.map(Post=>{
            return(
                  <div key={Post.id} className="card my-4">
                      <h3 className="text-secondary text-center">
                          {Post.tittle}</h3>
                      <p className="card-body">{Post.body}</p>
                  </div>
            )
    
        })
            return (
                <div>
                    <hi className="text-center">Post</hi>
                  {Post}
                </div>
            )
          
    }

}
export default Post


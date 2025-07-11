import classes from './Post.module.css'

function Post(props){
    
    return(
        <div className={classes.post}>
            <p>My Name is {props.name}</p>
            <p>I am 38 years old</p>
        </div>
    );
}

export default Post;
const name = ['Nazmul','Hossain'];

function Post(){
    const selectName = Math.random() > 0.5 ? name[0]:name[1];
    return(
        <div>
            <p>My Name is {selectName}</p>
            <p>I am 38 years old</p>
        </div>
    );
}

export default Post;
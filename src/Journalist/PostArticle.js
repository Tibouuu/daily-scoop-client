import axios from "axios";
import "./PostArticle.css"

function PostArticle(){

    const handlePost = (e) =>{
        e.preventDefault();
        const { title, content , thumbnailURL,mediaType,mediaURL,leadStory } = e.target;
        const article = {
            title: title.value,
            content: content.value,
            thumbnailURL: thumbnailURL.value,
            mediaType: mediaType.value,
            mediaURL: mediaURL.value,
            leadStory: leadStory.value

        }

        //change user to json 
        const jsonArticle = JSON.stringify(article);
        console.log(jsonArticle)
        axios.post("http://127.0.0.1:8000/api/postarticle", jsonArticle, { headers: { 'Content-Type': 'application/json' } } )
        .then(res => {
            console.log(res)
         
        }

        )

    }

    return(
        <div className="postArticle">
            <form onSubmit={handlePost}>
                <h1>Write your scoop!</h1>
                <input type="text" name="title" placeholder="Title"></input>
                <textarea type="text" name="content" placeholder="Content"></textarea>
                <input type="text" name="thumbnailURL" placeholder="Thumbnail Link"></input>
                <div>
                    <p>Image</p>
                    <input type="radio" name="mediaType" value="image"></input>
                    <p>Audio</p>
                    <input type="radio" name="mediaType" value="audio"></input>
                    <p>Video</p>
                    <input type="radio" name="mediaType" value="video"></input>
                </div>
                <input type="text" name="mediaURL" placeholder="Media Link"></input>
                <input type="text" name="leadStory" placeholder="Lead Story"></input>
                <input type="submit"  value="Post"></input>
            </form>
        </div>
    )
}


export default PostArticle;

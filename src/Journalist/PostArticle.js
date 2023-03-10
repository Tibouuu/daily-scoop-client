import axios from "axios";

function PostArticle(){

    const handlePost = (e) =>{
        e.preventDefault();
        const { title, content , thumbnailURL,mediaType,mediaURL } = e.target;
        const article = {
            title: title.value,
            content: content.value,
            thumbnailURL: thumbnailURL.value,
            mediaType: mediaType.value,
            mediaURL: mediaURL.value,
            leadStory:false

        }

        //change user to json 

        if(localStorage.getItem("token") != null){
        const jsonArticle = JSON.stringify(article);
        console.log(jsonArticle)
        axios.post("http://127.0.0.1:8000/api/postarticle", jsonArticle, { headers: { 'Content-Type': 'application/json' } } )
        .then(res => {
            console.log(res)
        })
         
        }

        

    }

    return(
        <div className="postArticle">
            <form onSubmit={handlePost}>
                <input type="text" name="title" placeholder="Title"></input>
                <input type="text" name="content" placeholder="Content"></input>
                <input type="text" name="thumbnailURL" placeholder="Thumbnail Link"></input>
                
                <label htmlFor="mediaType">Media Type :</label>
                    Image
                    <input type="radio" name="mediaType" value="image"></input>
                    Audio
                    <input type="radio" name="mediaType" value="audio"></input>
                    Video
                    <input type="radio" name="mediaType" value="video"></input>
              
                <input type="text" name="mediaURL" placeholder="Media Link"></input>
                
                <input type="submit"  value="Post"></input>
            </form>
        </div>
    )
}


export default PostArticle;

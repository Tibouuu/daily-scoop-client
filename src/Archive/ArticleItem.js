import "./Archive.css"

export default function ArticleItem(props){
    return(
        <div className="article-item">
            <p><strong>{props.title}</strong></p>
        </div>
    )
}
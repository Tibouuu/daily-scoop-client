import "./Archive.css"

export default function ArticleItem(props) {
    return (
        <div className="article-item">
            <div>
                <img src="/icons/TDS_LOGO+ICONS-11.png" alt="icon" />
                <p><strong>{props.title}</strong></p>
            </div>
            <p>{props.content.slice(0, 30) + " ..."}</p>
        </div>
    )
}
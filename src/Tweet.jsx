export function Tweet({id, name, content, like, onDelete}){

    const onLike = () => {
        console.log("LIKE");
    }
    return(
        <div className="tweet">
            <button className="delete" onClick={() => onDelete(id)}>❌</button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={() => onLike()}>{like} ❤️</button>
        </div>
    )
}
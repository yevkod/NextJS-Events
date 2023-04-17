import s from './comment-list.module.css'

 const CommentList = (props) => {
    const {items} = props;
    return (
        <ul className={s.comments}>
            {items?.map((item) => (
                <li key={item._id}>
                    <p>{item.text}</p>
                    <div>
                        By <address>{item.name}</address>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentList;




const Post = ({ post }) => {
    const { id, title, body } = post;
    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
};

export default Post;
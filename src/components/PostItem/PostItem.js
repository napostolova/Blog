const { Link } = require("react-router-dom");

function PostItem({
  post
})
 {   
    return (

        <section className="catalog-page">
            <h1>{post.title}</h1>
            <article className="container-image">
              <img src={post.imageUrl} alt="" />
            </article>
         <Link to={`/details/${post._id}`}>Read more</Link>
        </section>

    )
}

export default PostItem;
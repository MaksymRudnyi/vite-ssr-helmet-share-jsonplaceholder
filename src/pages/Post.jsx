import {useParams} from "react-router-dom";

export const Post = ({posts}) => {
  const params = useParams();
  const usersPosts = posts.filter(post => post.userId === parseInt(params.id));

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {usersPosts?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
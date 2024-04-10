import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";

export const User = ({users}) => {
  const params = useParams();
  const user = users.find(user => user.id === parseInt(params.id));

  return (
    <>
      <Helmet>
        <title>user {user.username}</title>
        <meta name="description" content={`User Page for ${user.username}`}/>
      </Helmet>
    <div className={'character-page'}>
      <h1>{user.name}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
      </>
  )

}
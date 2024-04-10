import {useParams} from "react-router-dom";

export const Album = ({albums}) => {
  const params = useParams()
  const usersAlbums = albums.filter(album => album.userId === parseInt(params.id))

  return (
    <div>
      <h1>Albums</h1>
      <ul>
        {usersAlbums?.map((album) => (
          <li key={album.id}>
            <h2>{album.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  )
}
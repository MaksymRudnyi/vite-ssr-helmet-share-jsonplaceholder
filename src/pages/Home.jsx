import {Link, useSearchParams} from "react-router-dom";
import { Helmet} from "react-helmet-async";
import { useState, useMemo, useEffect } from "react";

export const Home = ({ users}) => {
  const [searchParams, setSearchParams]= useSearchParams();

  const [filterString, setFilterString] = useState(searchParams.get('filter') || '');
  const [sortOrder, setSortOrder] = useState(searchParams.get('sort') || 'ASC'); // ['ASC', 'DESC']

  console.log('rendering Home');
  useEffect(() => {
    setSearchParams({filter: filterString, sort: sortOrder});
  }, [filterString, sortOrder, setSearchParams]);

  const filteredUsers = useMemo(() => {
    return users.filter(user => {
      return user.name.toLowerCase().includes(filterString.toLowerCase());
    });
  }, [filterString, users]);

  const sortedUsers = useMemo(() => {
    return filteredUsers.sort((a, b) => {
      if (sortOrder === 'ASC') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }, [sortOrder, filteredUsers]);

  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home Page"/>
      </Helmet>
    <div className={'container'}>
      <div>
        <input type="text" value={filterString} onChange={(e) => setFilterString(e.target.value)} placeholder="Search users" />
        <button onClick={() => setSortOrder('ASC')}>ASC</button>
        <button onClick={() => setSortOrder('DESC')}>DESC</button>
      </div>
      <br/>
      <ul>
        {sortedUsers.map((user) => (
          <li key={user.id}>
            <div>
            <h2>
              <Link to={`/user/${user.id}`}>
                {user.name}
              </Link>
            </h2>
              <p>Username: {user.username}</p>
              <p>Email: {user.email}</p>
            </div>
            <div>
              <Link to={`/post/${user.id}`}>Posts</Link>
              {' '}
              <Link to={`/album/${user.id}`}>Albums</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </>
  )
}
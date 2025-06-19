// DeletedUsers.jsx
import { useEffect, useState } from "react";
import axios from "axios";

export default function DeletedUsers() {
  const [deletedUsers, setDeletedUsers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_BASE_URL}/users/deleted/list`)
      .then(res => setDeletedUsers(res.data));
  }, []);

  return (
    <div>
      <h3>Delete<div style={{ maxWidth: "600px", margin: "auto" }}>
  <h3>Deleted Users</h3>
  <ul style={{ paddingLeft: "0", listStyle: "none" }}>
    {deletedUsers.map(user => (
      <li key={user._id} style={{ padding: "8px 0", borderBottom: "1px solid #ccc" }}>
        <strong>{user.name}</strong><br />
        <small>{user.email}</small>
      </li>
    ))}
  </ul>
</div>
d Users</h3>
      <ul>
        {deletedUsers.map(user => (
          <li key={user._id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
}

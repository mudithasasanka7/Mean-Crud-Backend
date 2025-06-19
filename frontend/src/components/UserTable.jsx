<tbody>
  {users.map(user => (
    <tr key={user._id}>
      <td data-label="Name">{user.name}</td>
      <td data-label="Email">{user.email}</td>
      <td data-label="Actions">
        <button onClick={() => {
          const newName = prompt("Update name", user.name);
          const newEmail = prompt("Update email", user.email);
          if (newName && newEmail) {
            onUpdate(user._id, newName, newEmail);
          }
        }}>Edit</button>
        <button onClick={() => {
          if (confirm(`Are you sure to delete ${user.name}?`)) {
            onDelete(user._id);
          }
        }}>Delete</button>
      </td>
    </tr>
  ))}
</tbody>

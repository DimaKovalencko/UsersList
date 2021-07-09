import React from 'react';

export default ({ user, deleteUser }) => {
  return (
    <tr>
      <th>{user.id}</th>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.desc}</td>
      <td>
        <button type="button" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Удалить</button>
      </td>
    </tr>
  );
};

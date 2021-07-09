import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import User from './User';
import { fetchUsers } from '../redux/actions';
import Pagination  from './Pagination'

export default () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.fetchedUsers);
  const usersNumber = users.length
  const [update, setUpdate] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage] = useState(5)

  const deleteUser = id => {
    fetch('http://77.120.241.80:8811/api/user/'+ id, {
      method:'DELETE',
      header: {'Accept':'application/json',
      'Content-Type': 'application/json'
      }
    })
    setUpdate((update) => !update)
  }

  useEffect(() => {
    const getUsersList = async () => dispatch(fetchUsers())
    getUsersList()
  }, [update])


  const lastUserIndex = currentPage * userPerPage
  const firstUserIndex = lastUserIndex - userPerPage
  const currentUser = users.slice(firstUserIndex, lastUserIndex)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber) 
  }

  if (users.length === 0) {
    return (
      <div>
        Пока что пользователей нет
      </div>
      
    );
  }
  return (
    <>
      <tbody>
        {currentUser.map((user) => <User deleteUser={deleteUser} user={user} key={user.id} />)}
      </tbody>
      <Pagination
        userPerPage = {userPerPage}
        usersNumber = {usersNumber}
        paginate = {paginate}
      />
    </>
  )   
};

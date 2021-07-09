import React from 'react';
import FetchedUsers from './FetchedUsers';

export default () => {

  return(
    <div className="container pt-5">
        <div className="row">
          <div className="col">
            <h1 className="text-center title ">Список</h1>
            <table className="table" id="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Имя</th>
                  <th scope="col">Фамилия</th>
                  <th scope="col">Описание</th>
                  <th scope="col">Удалить</th>
                </tr>
              </thead>
              <FetchedUsers />
            </table>
          </div>
        </div>
      </div>
  )
};

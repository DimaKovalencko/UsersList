import React from 'react';

const Pagination = ({userPerPage, usersNumber, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(usersNumber / userPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <div>
            <ul className="pagination">
                {
                    pageNumbers.map((number) => (
                        <li className="page-item" key={number}>
                            <a href="/#" className="page-link" onClick={() => paginate(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;

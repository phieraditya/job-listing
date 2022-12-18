import React from 'react'
import { Link } from 'react-router-dom'

const Job = ({ listing }) => {
  const { title, company, type, location, id } = listing

  return (
    <Link
      to={`/api/recruitment/positions/${id}`}
      className="text-decoration-none"
    >
      <div className="row">
        <div className="col lh-1">
          <p className="fs-5 fw-bold text-primary">{title}</p>
          <p className="text-secondary">
            {company} - <span className="fw-bold text-success">{type}</span>
          </p>
        </div>
        <div className="col-auto text-end lh-1">
          <p className="">{location}</p>
          <p className="text-secondary">1 day ago</p>
        </div>
      </div>
    </Link>
  )
}

export default Job

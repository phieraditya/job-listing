import React from 'react'

const Job = ({ listing }) => {
  const { title, company, type, location, created_at } = listing

  return (
    <div className="row">
      <div className="col lh-1">
        <p className="fs-5 fw-bold text-primary">{title}</p>
        <p className="text-secondary">
          {company} - <span className="fw-bold text-success">{type}</span>
        </p>
      </div>
      <div className="col-md-auto text-end lh-1">
        <p className="">{location}</p>
        <p className="text-secondary">1 day ago</p>
      </div>
    </div>
  )
}

export default Job

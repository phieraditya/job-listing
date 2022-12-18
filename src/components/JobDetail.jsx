import React from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'

const JobDetail = ({ listings }) => {
  const { id } = useParams()
  let navigate = useNavigate()

  const listing = listings.filter((listing) => listing.id === id)[0]

  const {
    type,
    location,
    title,
    description,
    company,
    company_logo,
    company_url,
    how_to_apply,
  } = listing

  function handleBack() {
    navigate(-1)
  }

  return (
    <Container>
      <Link onClick={handleBack} className="text-decoration-none">
        <p className="mb-1 fw-bold text-muted">
          &larr; <span className=" text-primary">Back</span>
        </p>
      </Link>

      <div className="card">
        <div className="card-body">
          <h6 className="card-subtitle text-muted">
            {type} / {location}
          </h6>
          <h3 className="card-title">{title}</h3>
          <hr></hr>

          <div className="row">
            <div className="col-8">
              <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            <div className="col-4">
              <div className="card p-2 mb-3 bg-light">
                <div className="card-title mb-0 fs-6 fw-bold">
                  <div className="row">
                    <div className="col lh-1">
                      <p>{company}</p>
                    </div>
                    <div className="col-auto text-end lh-1">
                      <Link className="text-primary text-decoration-none">
                        1 other job
                      </Link>
                    </div>
                  </div>
                </div>
                <hr></hr>
                <img
                  src={company_logo}
                  className="card-img-top"
                  alt="Company Logo"
                ></img>
                <a
                  href={company_url}
                  target="_blank"
                  rel="noreferrer"
                  className="card-link"
                >
                  {company_url}
                </a>
              </div>
              <div className="card p-2 bg-warning bg-opacity-10">
                <h6 className="card-title mb-0 fw-bold">How to apply</h6>
                <hr></hr>
                <div dangerouslySetInnerHTML={{ __html: how_to_apply }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default JobDetail

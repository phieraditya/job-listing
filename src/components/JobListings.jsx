import React from 'react'
import Container from 'react-bootstrap/Container'
import Job from './Job'

const JobListings = ({ listings, isLoading }) => {
  return (
    <Container>
      <h3 className="card-title mt-3 mb-2">
        {listings.length === 0 ? 'Job Not Found' : 'Job List'}
      </h3>
      <div className="card">
        <ul className="list-group list-group-flush">
          {isLoading ? (
            <li className="list-group-item">
              <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </p>
              <p className="placeholder-glow">
                <span className="placeholder col-12"></span>
              </p>
            </li>
          ) : (
            <div>
              {listings.map((listing) => (
                <>
                  <li className="list-group-item" key={listing.id}>
                    <Job listing={listing} />
                  </li>
                </>
              ))}
            </div>
          )}
        </ul>
      </div>
    </Container>
  )
}

export default JobListings

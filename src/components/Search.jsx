import React from 'react'
import Container from 'react-bootstrap/Container'

const Search = () => {
  return (
    <div>
      <Container>
        <form className="d-flex justify-content-between my-3" role="search">
          <div className="flex-fill me-3">
            <label htmlFor="jobdesc" className="fw-bold">
              Job Description
            </label>
            <input
              id="jobdesc"
              className="form-control me-2"
              type="search"
              placeholder="Filter by title, benefits, companies, expertise"
              aria-label="Search"
            />
          </div>
          <div className="flex-fill me-3">
            <label htmlFor="location" className="fw-bold">
              Location
            </label>
            <input
              id="location"
              className="form-control me-2"
              type="search"
              placeholder="Filter by city, state, zip code or country"
              aria-label="Search"
            />
          </div>
          <div className="form-check mt-4 me-3">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="fulltime"
            />
            <label className="form-check-label fw-bold" htmlFor="fulltime">
              Full Time Only
            </label>
          </div>
          <button
            className="btn btn-secondary fw-bold align-self-end"
            type="submit"
          >
            Search
          </button>
        </form>
      </Container>
    </div>
  )
}

export default Search

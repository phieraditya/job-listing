import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container'
import NavBar from './components/NavBar'
import Search from './components/Search'

import Job from './components/Job'

function App() {
  const [listings, setListings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [term, setTerm] = useState({
    description: '',
    location: '',
    isFulltime: true,
  })

  useEffect(() => {
    const { description, location, isFulltime } = term

    fetch(
      `http://dev3.dansmultipro.co.id/api/recruitment/positions.json?description=${description}&location=${location}&full_time=${isFulltime}`
    )
      .then((res) => res.json())
      .then((data) => {
        setListings(data)
        setIsLoading(false)
      })
  }, [term])

  return (
    <div>
      <NavBar />
      <Search searchText={(text) => setTerm(text)} />

      <Container>
        <h3 className="card-title mt-3 mb-2">Job List</h3>
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
                  <li className="list-group-item" key={listing.id}>
                    <Job listing={listing} />
                  </li>
                ))}
              </div>
            )}
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default App

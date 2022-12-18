import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Search from './components/Search'
import JobListings from './components/JobListings'
import JobDetail from './components/JobDetail'

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
    <div className="bg-light">
      <NavBar />

      <Routes>
        <Route
          path="/api/recruitment/positions"
          element={
            <>
              <Search
                searchText={(text, isChecked) =>
                  setTerm({ ...text, isFulltime: isChecked })
                }
              />
              <JobListings listings={listings} isLoading={isLoading} />
            </>
          }
        />
        <Route
          path="/api/recruitment/positions/:id"
          element={
            <>
              <JobDetail listings={listings} />
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import MyNav from './components/MyNav'
import HeadingNavbar from './components/HeadingNavbar'
import MyCarousel from './components/MyCarousel'
import MyFooter from './components/MyFooter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TvShows from './components/TvShows'
import MovieDetails from './components/MovieDetails'
import { useState } from 'react'

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <BrowserRouter>
      <div className="dark-netflix">
        <MyNav setSearchValue={setSearchValue} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeadingNavbar />
                <MyCarousel
                  searchValue={searchValue}
                  heading="Harry Potter"
                  movie="Harry Potter"
                />
                <MyCarousel heading="James Bond" movie="James Bond" />
                <MyCarousel
                  heading="The Lord of the Rings"
                  movie="The Lord of The Rings"
                />
              </>
            }
          />
          <Route path="/tv-shows" element={<TvShows />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  )
}

export default App

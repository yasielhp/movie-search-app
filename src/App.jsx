import { useState } from 'react'
import { Header, Lists } from './components'

function App() {
	const [movies, setMovies] = useState([])
	const [query, setQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const searchMovie = async e => {
		e.preventDefault()
		const API_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${
			import.meta.env.VITE_API_KEY
		}&s=${query}`

		try {
			if (query === '') {
				setError('Please enter a movie or series name')
				return
			} else {
				setError(null)
				setLoading(true)
				const response = await fetch(API_URL)
				const data = await response.json()
				if (data.Response === 'True') {
					setMovies(data.Search)
				} else {
					setError(data.Error)
				}
				setLoading(false)
			}
		} catch (error) {
			setError(error)
			setLoading(false)
		}
	}

	return (
		<>
			<Header
				searchMovie={searchMovie}
				query={query}
				setQuery={setQuery}
				movies={movies}
			/>
			<Lists movies={movies} loading={loading} error={error} />
		</>
	)
}

export default App

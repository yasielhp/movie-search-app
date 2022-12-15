import { Card } from './'
export const Lists = ({ loading, error, movies }) => {
	return (
		<section className="flex flex-wrap justify-center  p-4 items-center w-full gap-5 max-w-6xl mx-auto">
			{loading ? (
				<svg
					className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24">
					<circle
						className="opacity-25"
						cx="12"
						cy="12"
						r="10"
						stroke="#000"
						strokeWidth="4"></circle>
					<path
						className="opacity-75"
						fill="#000"
						d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
				</svg>
			) : error ? (
				<p className="text-sm text-slate-500">{error}</p>
			) : (
				movies.map(movie => <Card key={movie.imdbID} movie={movie} />)
			)}
		</section>
	)
}

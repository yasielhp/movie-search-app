import { IconSearch } from './IconSearch'

export const Header = ({ searchMovie, query, setQuery }) => {
	return (
		<header className="w-full bg-slate-800">
			<div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
				<h1 className="font-black text-white text-lg select-none cursor-pointer">
					MOVIE<span className="font-normal ml-1">Search</span>
				</h1>
				<form onSubmit={searchMovie}>
					<div className="placeholder:text-sm px-2 py-1	rounded-md bg-slate-50 flex items-center w-52">
						<button type="submit">
							<IconSearch />
						</button>
						<input
							className="ml-2	bg-transparent outline-none text-sm text-slate-500 placeholder:text-sm	placeholder-slate-300 w-52"
							type="text"
							placeholder="Search a movie or series"
							value={query}
							onChange={e => setQuery(e.target.value)}
							autoFocus
						/>
					</div>
				</form>
			</div>
		</header>
	)
}

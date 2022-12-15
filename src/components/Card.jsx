export const Card = ({ movie }) => {
	const { Title, Year, Poster, Type } = movie
	return (
		<div className="relative bg-slate-50 border-2 border-slate-50 drop-shadow-lg rounded-lg w-full md:w-auto">
			<p className="absolute right-2 top-2 text-xs opacity-90 bg-white text-slate-400 px-2 py-1 rounded-md">
				{Year}
			</p>
			<p
				className={`absolute left-2 top-2 text-xs bg-white text-slate-400  px-2 py-1 rounded-md ${
					Type === 'movie'
						? 'bg-blue-600 text-white'
						: 'bg-green-600 text-white'
				}`}>
				{Type}
			</p>
			<img
				className="bg-slate-300 object-contain	object-center rounded-t-lg"
				src={Poster}
				alt={Title}
				width="100%"
				height="100%"
			/>
			<div className="p-2  flex items-center">
				<h2 className="uppercase font-semibold py-1 text-slate-600 text-sm">
					{Title}
				</h2>
			</div>
		</div>
	)
}

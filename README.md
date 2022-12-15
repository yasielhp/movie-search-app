# React Movie Search
This is a small project made with React.js that allows users to search for movies and TV shows. The app uses the [OMDb API](https://www.omdbapi.com/) to get information about movies and TV shows.

## Usage
To use the app, simply enter the name of a movie or TV show in the search box at the top of the page and click "Search". The app will display a list of movies and TV shows that match your search.

## Components
The app is built with three main components: `Header`, `Lists` and `Card`.

### Header
The `Header` component is the header of the page and contains the search box. It also handles the state of the search box and performs the search for movies and TV shows when the "Search" button is clicked.

### Lists
The `Lists` component is responsible for displaying the results of the movie and TV show search. It displays a list of movies and TV shows that match the user's search, as well as an error message if the search returned no results or if an error occurred while performing the search. It also displays a loading indicator while the search is being performed.

### Card
The `Card` component is used to display individual movies and TV shows in the search results. It shows the title, year, and a poster image for each movie or TV show. The Card component is used by the Lists component to display the search results.

## Styling
The app uses Tailwind CSS for styling. This allows the app to look good on devices of different sizes and provides a consistent and easy-to-use user interface.

## Compilation
The app is compiled with vite.js. Vite is a JavaScript build tool that focuses on fast development and compilation. It allows for fast hot module replacement and has a small footprint, making it ideal for small projects like this one.

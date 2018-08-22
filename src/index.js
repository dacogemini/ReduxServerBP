import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';


//* Sign up for Youtube API key
const API_KEY = 'AIzaSyCn0i9Pa1Q6Irb9rwCMCGD0mRyR457SZz4';

// Create a new component that produces HTML

const App = () => {
    return (
    <div><SearchBar /></div>
    );
}



// App is a CLASS | We need an instance of the class -- <App /> = Instance of CLASS App
//? Where do we put the instance? | .container
ReactDOM.render(<App />, document.querySelector('.container'));
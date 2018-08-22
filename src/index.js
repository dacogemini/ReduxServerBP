import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/searchbar';

//* Sign up for Youtube API key
const API_KEY = 'AIzaSyCn0i9Pa1Q6Irb9rwCMCGD0mRyR457SZz4';

//* Class based component
class App extends Component {
    //? Use a constructor to initialize the internal component state to be used later
    //? * The constructor is called only once, when the component initializes.
    constructor(props) {
        super(props);
        //! Bind the state to the App class with this.state = {...}
        this.state = { videos: [] };
        YTSearch({key: API_KEY, term: 'Hapkido'},
        (videos) => {
            this.setState({ videos });
        });
        {
        }
    }
    render() {
        return ( <div><SearchBar /></div>
        )
    }
}
// App is a CLASS | We need an instance of the class -- <App /> = Instance of CLASS App
//? Where do we put the instance? | .container
ReactDOM.render( < App / > , document.querySelector('.container'));
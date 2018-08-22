import React, {
    Component
} from 'react';

//* Internal component state (local state)
//* allows you to save, modify and delete properties
//* that are stored in your component. The ES6 class
//* component can use a constructor to initialize internal component state later on. The constructor is called only once when the component initializes. 

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '' // << Records 'search term' here
        };
    }
    /*
       _   _   _   _   _
      / \ / \ / \ / \ / \
     ( c | l | a | s | s )
      \_/ \_/ \_/ \_/ \_/
    */
    // Declare a method on a class
    //! Every class must have a render function
    //! which returns JSX
    //========================================
    render() {
        return ( 
        <div >
            <input 
            //* Set the state value (input search term)
            value = { this.state.term }
            onChange = {
                (event) =>
                this.setState // << Update state here
                ({ term: event.target.value })}/>
            Value of input: { this.state.term }
            </div>
        )
    }
    //========================================
    // Event handler
    // Event gives access to the input value
    onInputChange(event) {
        console.log(event.target.value);
    }
}
// FUNCTIONAL Component
// const SearchBar = () => {
//        return <input />;
// };
export default SearchBar;
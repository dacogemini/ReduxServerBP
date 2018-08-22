import React, {
    Component
} from 'react';

//* CLASS Component
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
            <input onChange = {
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
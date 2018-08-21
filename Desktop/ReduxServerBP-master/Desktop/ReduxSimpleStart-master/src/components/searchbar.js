import React, { Component } from 'react';

//* CLASS Component
class SearchBar extends Component {
    // Declare a method on a class
    //! Every class must have a render function
    //! which returns JSX
    render() {
        return <input onChange = {(event) => 
        console.log(event.target.value)} />;
    }
    //* Event handler
    //* Event gives access to the input value
    // onInputChange(event) {
    //     console.log(event.target.value);
    // }
}
// FUNCTIONAL Component
// const SearchBar = () => {
//        return <input />;
// };
export default SearchBar;
import { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <input 
            onChange={this.props.onChangeHandler} 
            className={this.props.className} 
            type='search' 
            placeholder={this.props.placeholder} 
            />            
        )
    }
}

export default SearchBox;
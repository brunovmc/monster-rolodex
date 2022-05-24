import './search-box.styles.css';

const SearchBox = ({onChangeHandler, className, placeholder}) => {
        <input 
        onChange={onChangeHandler} 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder} 
        />     
}

export default SearchBox;
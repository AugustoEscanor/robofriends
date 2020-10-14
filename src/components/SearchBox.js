import React from 'react';


const SearchBox = ({onInput}) => {

    return (
        <>
            <input 
            ype='search' 
            placeholder='Search robots'
            onInput={onInput}
            className='pa2 ba b--green bg-lightest-blue'/>
        </>
    )

}

export default SearchBox;
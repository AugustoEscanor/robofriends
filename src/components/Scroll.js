import React from 'react';
// import '../css/Scroll.css';

const Scroll = (props) =>{
    return (
        <div id='scroll-container' 
        style={{overflowY:"scroll",height:'500px',border:'2px solid black'}}>
            {props.children}
        </div>
    );
}

export default Scroll;
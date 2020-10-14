import React from 'react';
//import '../css/Hello.css';

const Card = ({details}) => {
    const {id,name,username,email} = details
  
    const robots_url = `https://robohash.org/${id}?size=200x200`
    return (

        <div id={id} className='bg-light-blue dib br4 pa3 ma2 bw3 grow shadow-5'>
            <img src={robots_url} alt={username} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>


    )

}

export default Card;
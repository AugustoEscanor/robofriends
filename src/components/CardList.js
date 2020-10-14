import React from 'react';
import Card from './Card';
//import '../css/Hello.css';
const RenderList = (list) => {
    return list.map((robot) => <Card key={robot.id}  details={robot} />)
};
const CardList = ({ robo_list }) => {
    
    return (
        RenderList(robo_list)
    )

}

export default CardList;
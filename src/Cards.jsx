import React from 'react';

function Cards(props){
    return(
        <>
            <div className="card">
                <img src={props.imagSrc} alt="myImage" />
                <span className="details">
                <span>{props.tag}</span>
                <h3>{props.title}</h3>
                    <a href={props.link}>Watch now</a>
                </span>
            </div>
        </>
    )
}

export default Cards;;
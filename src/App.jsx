import React from 'react';
import Cards from './Cards';
import index from './index.css'



import DataArray from './Data';
const newArray = DataArray.map((props)=>{
    return (
        <div className="cards">
            <Cards 
                    imagSrc={props.imagSrc}
                    tag={props.tag}
                    title={props.title}
                    link={props.link}
                />
        </div>
        );
});


const heading={textAlign: 'center',marginTop: '20px', color:'red'}

function App(props){
    return (
    <>    
    <h1 style={heading}>Netflix <span style={{color:'#000'}}>Series</span></h1>
    <div className="cards">
        {newArray}
    </div>
    </>
    );
}

export default App;
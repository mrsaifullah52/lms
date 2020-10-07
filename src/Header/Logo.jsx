import React from 'react';

function Logo(props){
    return (
        <>
            <header>
                <div className="container p-3">
                    <h1 className="navbar-brand">{props.logo}</h1>
                </div>
            </header>
        </>
    )
}

export default Logo;
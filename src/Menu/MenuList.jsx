import React from 'react';
import {menuDa} from '../Data';

// console.log(menu)
const myList = menuDa.map(function(cVal){
    return(
        <li className="nav-item" key={cVal.id}>
            <a href="#" className="nav-link">{cVal.val}</a>
        </li>
    )
});

console.log(myList);


function MenuList(){
    return(
        <> 
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <ul className="navbar-nav mr-auto">
                        {myList}
                    </ul> 
                </nav>
            </div>
        </>
    );
}

export default MenuList;
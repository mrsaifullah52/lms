import React from 'react';
import Header from './Header/Header';
import Menu from './Menu/Menu';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';
import Style from './Style/index.css';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App(){
    return(
        <>  
            <Header/>
            <Menu/>
            <Main/>
            <footer className="bg-dark">
                <div className="container">
                    <h1 className="text-white text-center p-3">footer</h1>
                </div>
            </footer>
        </> 
    );
}

export default App;
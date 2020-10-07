import React from 'react';
import Courses from './Courses';
import Sidebar from '../Sidebar/Sidebar';


function Main(){
    return(
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-8">
                        <Courses/>
                    </div>
                    <div className="col-md-4">
                        <Sidebar/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;
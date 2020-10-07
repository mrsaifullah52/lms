import React from 'react';
import {cousesDa} from '../Data';
import {cs101} from '../Data';


const CourseDa = cs101.map((coValue)=>{
    // const linkData = coValue.dat;
    return(
        <a href="#" className="btn btn-small btn-primary m-1" style={{fontSize: '12px'}} key={coValue.id}>{
            coValue.dat
        }</a>
    );
});

const courseHead = cousesDa.map((cValue)=>{
    return(
        <div className="card m-1">
        <div className="card-header">
            <h5 key={cValue.id}>Subject: {cValue.name}</h5>
        </div>
        <div className="card-body">
            {CourseDa}
        </div>
    </div>
    );
});
// console.log(courseHead)
function Courses(){
    return(
        <>
           {courseHead}
        </>
    );
}

export default Courses;
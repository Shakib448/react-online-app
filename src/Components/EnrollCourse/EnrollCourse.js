import React from 'react';



const EnrollCourse = (props) => {
    return (
        <>
            <div className="col-md-4 col-10">
                <h1></h1>
                <div className="card">
                    <img  src={props.img} className="card-img-top" alt="{props.imgsrc}"/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content : {props.total} </p>
                        <h1>Total buy Course : {props.buyCount} </h1>
                    </div>
                </div>

                <hr/>
                <br/>

            </div>
        </>
    )
}

export default EnrollCourse;

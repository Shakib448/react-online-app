import React from 'react';



const EnrollCourse = (props) => {
    return (
        <>
            <div className="col-md-4 col-10">
                <div className="card">
                    <img  src={props.img} className="card-img-top" alt="{props.imgsrc}"/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{props.title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p className="btn-outline-primary"> {props.price} </p>
                    </div>
                </div>

                <hr/>
                <br/>

            </div>
        </>
    )
}

export default EnrollCourse;

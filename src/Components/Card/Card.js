import React from "react";

const Card = (props) => {
    const handelEnroll = props.handelEnroll

    const {imgsrc, title, price} = props.enroll

    return (
        <>
            <div className="col-md-4 col-10">
                <div className="card">
                    <img  src={imgsrc} className="card-img-top" alt="{props.imgsrc}"/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button  className="btn btn-primary" onClick={() => handelEnroll(props.enroll)} >Enroll</button>
                        <button  className="btn btn-outline-primary ml-2">{price}</button>
                    </div>
                </div>

                <hr/>
                <br/>

            </div>
        </>
    );
};
export default Card;
import React, {useState ,useRef} from "react";


const Card = (props) => {

    const {imgsrc, title, price} = props.enroll;


    
    const [btnText, setBtnText] = useState('Enroll Now');
    const changeText = (text) => setBtnText(text);

    const btnRef = useRef();
    const onBtnClick = () => btnRef.current.setAttribute('disabled', 'disabled');

    return (
        <>
            <div className="col-md-4 col-10">
                <div className="card">
                    <img  src={imgsrc} className="card-img-top" alt="{props.imgsrc}"/>
                    <div className="card-body">
                        <h5 className="card-title font-weight-bold">{title}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <button  ref={btnRef} onClick={() => {
                            props.handelEnroll(props.enroll);
                            changeText('Purchased');
                            onBtnClick();
                        }} type="button" className="btn btn-primary">
                            {btnText}
                        </button>

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
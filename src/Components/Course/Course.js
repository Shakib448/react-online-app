import React from "react";
import Card from "../Card/Card";
import FakeData from "../FakeData/FakeData";
import { useState } from "react";
import EnrollCourse from "../EnrollCourse/EnrollCourse";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const icon = <FontAwesomeIcon icon={faArrowDown} />

const Course = () => {

    const [BookCourse, setBookCourse] = useState(FakeData);
    
    const [enrollCourse, setEnrollCourse] = useState([]);


    const handelEnroll = (enroll) => {
        const newEnroll = [...enrollCourse, enroll];
        setEnrollCourse(newEnroll);


    }

    const total = enrollCourse.reduce((total, add)=> total + parseInt(add.price.replace(/,/g, '')) , 0)

    return (
        <>
            <div className="my-5 text-center">
                <h1 className="btn btn-outline-primary mr-2">Total Courses {BookCourse.length} </h1>
                <h1 className="btn btn-outline-primary">Total Enrolled {enrollCourse.length} </h1> <br/>
                <h1 className="btn btn-outline-primary">Total Enrolled Cost {total} </h1> <br/>
                <h1 className= "upDown"> {icon} </h1> 
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <div className="row gy-4">
                            {
                                BookCourse.map((enroll, id) =>{
                                    return <Card
                                        key = {id}
                                        enroll = {enroll}
                                        handelEnroll= {handelEnroll}
                                    />
                                })
                            }
                            <div className="col-md-12 text-center">
                                <h1>Enrolled Details</h1>
                                <hr/>
                            </div>
                            {/* For Buy Course  */}

                            {
                                enrollCourse.map((buyCourse, index) =>{
                                return <EnrollCourse
                                img={buyCourse.imgsrc} 
                                title={buyCourse.title}
                                buyCount={enrollCourse.length}
                                price={buyCourse.price}
                                key={index}/>
                                })

                            }


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Course;
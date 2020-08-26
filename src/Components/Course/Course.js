import React from "react";
import Card from "../Card/Card";
import FakeData from "../FakeData/FakeData";
import { useState } from "react";

const Course = () => {

    const [BookCourse, setBookCourse] = useState(FakeData);
    
    const [enrollCourse, setEnrollCourse] = useState([]);
    
    const handelEnroll = (enroll) => {
        const newEnroll = [...enrollCourse, enroll];
        console.log(newEnroll)
        setEnrollCourse(newEnroll);
    }
    return (
        <>
            <div className="my-5 text-center">
                <h1 className="btn btn-outline-primary">Our Courses {enrollCourse.length} </h1>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Course;
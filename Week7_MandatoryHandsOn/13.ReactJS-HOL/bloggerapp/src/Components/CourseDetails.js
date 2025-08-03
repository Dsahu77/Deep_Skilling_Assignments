import React from 'react';

// Sample data for courses
const courses = [
    { id: 1, name: 'Angular', date: '4/5/2021' },
    { id: 2, name: 'React', date: '6/3/2021' }
];

const CourseDetails = () => {
    return (
        <div>
            <h1>Course Details</h1>
            {courses.map(course => (
                <div key={course.id} className="item-details">
                    <h2>{course.name}</h2>
                    <p>{course.date}</p>
                </div>
            ))}
        </div>
    );
};

export default CourseDetails;

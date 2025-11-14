import React from 'react'
import courses from './data'
import { Link } from 'react-router-dom'

const Catalog = () => {
  return (
    <div>
        <h2>Course Catalog</h2>
        <ul>
            {courses.map((course)=>(
                <li key={course.courseId}>
                    <Link to={`/course/${course.courseId}`}>{course.title}</Link>{" "}-{course.department}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Catalog
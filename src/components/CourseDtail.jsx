import React from 'react'
import courses from './data'
import { useParams } from 'react-router-dom'

const CourseDtail = () => {
    const {courseId}=useParams();
    const course=courses.find((c)=>c.courseId===courseId);

    if(!course){
        return <h2>404 - Course Not Found</h2>
    }
  return (
    <div>
        <h2>{course.title}</h2>
        <p><b>Course ID: </b>{course.courseId}</p>
        <p><b>Department: </b>{course.department}</p>
        <p style={{marginTop:"1rem"}}>
            <em>
          We use <code>useParams()</code> to get the <code>courseId</code> from the URL.  
          Then we find the matching course in <code>data.js</code> like this:  
          <code>courses.find(c =&gt; c.courseId === courseId)</code>.  
          This gives us the correct course details to display.
        </em>
        </p>
    </div>
  )
}

export default CourseDtail
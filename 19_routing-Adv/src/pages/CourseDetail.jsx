import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams()
    

  return (
    <div>
      <h1>{params.courseid} - Course Detail Page</h1>
    </div>
  )
}

export default CourseDetail

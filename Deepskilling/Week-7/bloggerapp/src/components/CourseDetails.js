function CourseDetails(props) {
  return (
    <div>
      <h2>🎓 Course Details</h2>
      <ul>
        {props.courses.map((course) => (
          <div key={course.id}>
            <h3>{course.name}</h3>
            <h4>{course.date}</h4>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
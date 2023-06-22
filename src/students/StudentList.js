import StudentItem from "./StudentItem";
import classes from "./StudentList.module.css";

function StudentList(props) {
  return (
    <ul className={classes.list}>
      {props.students.map((student) => (
        <StudentItem
          id={student._id}
          name={student.name}
          age={student.age}
          gender={student.gender}
          address={student.address}
          contactNo={student.contactNo}
          school={student.school}
        />
      ))}
    </ul>
  );
}

export default StudentList;

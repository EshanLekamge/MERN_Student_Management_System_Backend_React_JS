import classes from "./StudentItem.module.css";
import Card from "../ui/Card";
import axios from "axios";
import { Link } from "react-router-dom";

function StudentItem(props) {
  function Deletehandler(id) {
    axios
      .delete(`http://localhost:8070/student/deleteStudent/${id}`)
      .then(() => {
        alert("Student Deleted Successfully");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.content}>
          <h4>{props.name}</h4>
          <h4>{props.age}</h4>
          <h4>{props.gender}</h4>
          <h4>{props.address}</h4>
          <h4>{props.contactNo}</h4>
          <h4>{props.school}</h4>
        </div>
        <div className={classes.updatebtn}>
          <button>
            <Link to={"/updateStudent/" + props.id} className={classes.Link}>
              Update
            </Link>
          </button>
        </div>
        <div className={classes.deletebtn}>
          <button onClick={() => Deletehandler(props.id)}>Delete</button>
        </div>
      </li>
    </Card>
  );
}

export default StudentItem;

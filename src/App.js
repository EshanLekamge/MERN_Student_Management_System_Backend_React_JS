import NavigationBar from "./components/navbar";
import AddStudent from "./components/AddStudent";
import AllStudents from "./components/AllStudents";
import UpdateStudent from "./components/UpdateStudent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" exact Component={AllStudents} />
          <Route path="/addStudent" exact Component={AddStudent} />
          <Route path="/updateStudent/:id" exact Component={UpdateStudent} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

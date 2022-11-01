import './index.css';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {

  const studentList =[
    {srno: "1", name: 'Kingshuk Ghosh', rollno : "20ucs098"},
    {srno: "2", name: 'Niharika Mahajan', rollno : "20uecXXX"}
  ];

  return (
    <div>
      <Header></Header>
      <Table StudentList = {studentList}></Table>
    </div>
  );
}

export default App;
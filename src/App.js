import './index.css';
import Header from './Components/Header';
import Table from './Components/Table';

function App() {

  /* Template Line to copy
      {srno: "<number>", name: '<your_name>', rollno : "<your_rollNo>"},
   */
  const studentList =[
    {srno: "1", name: 'Kingshuk Ghosh', rollno : "20ucs098"},
    {srno: "2", name: 'Niharika Mahajan', rollno : "20uecXXX"},
    {srno: "3", name: 'Shubh Garg', rollno : "20ucc099"},
  ];

  return (
    <div>
      <Header></Header>
      <Table StudentList = {studentList}></Table>
    </div>
  );
}

export default App;
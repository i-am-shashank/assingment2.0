import "./App.css";
import { FaUserCircle } from "react-icons/fa";
import Chart from "./components/Chart"
import LineGraph from "./components/LineGraph"
import Cal from "./components/Cal"
function App() {

  return (
    <div className="App">
      <div className="NavBar">
        <img
          className="Logo"
          alt="logo"
          src="https://storage.moqups.com/repo/0z7RMzeQkH/_clipboard/sD30rwrTR0.png"
        />
        <div className="iconContainer">
          {/* <img src="/assets/bell.svg"  alt="notifications" className="bell"/> */}
          <FaUserCircle color="#d81c1b" size="2.8rem" />
          <div>
            <p className="text">Hospital</p>
            <p className="text">Hospital</p>
          </div>
        </div>
      </div>
      <div className="Section1">
        <label>
          Hospital
          <select className="select">
            <option>Select</option>
          </select>
        </label>
        <label>
          Modality
          <select className="select">
            <option>Select</option>
          </select>
        </label>
        <label>
          Radiologist
          <select className="select">
            <option>Select</option>
          </select>
        </label>
        <div className="dateSection">
          <label>
            Date Range
            <Cal className="dateButton" />
          </label>
          <label>
            &nbsp;
            <Cal className="dateButton" />
          </label>
          <button className="filter">Filter</button>
        </div>{" "}
      </div>
      <div className="Section2">
        <p className="reportText"><strong>Report Summary</strong></p>
        <div className="rBoxCont">
        <p className="rBox rBox1">CR <strong> 4364 </strong>  2020-09-09</p>
        <p className="rBox rBox2">CT <strong> 2282 </strong>  2020-09-09</p>
        <p className="rBox rBox3">MRI  <strong> 1962 </strong>  2020-09-09</p>
        </div>
      </div>
      <div className="Section3">
        <div className="squareBox" >
    <p className="tat">TAT Report</p>
    <Chart />
    <div></div>
        </div>
        <div className="squareBox" >
       <p className="tat">Modality Report</p>
       <LineGraph />
        </div>
      </div>
    </div>
  );
}


export default App;

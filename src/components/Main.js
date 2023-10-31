import { Button, Input, Col, Row, Container } from "reactstrap";
import { useState } from "react";
import NameList from "./NameList";
import SantaList from "./SantaList";
import "../styles.css";

const Main = () => {
  const [nameList, setNameList] = useState([]);
  const [assignedList, setAssignedList] = useState(new Map());
  const [nameToAdd, setNameToAdd] = useState("");

  const handleInputChange = (e) => {
    setNameToAdd(e.target.value);
  };

  const handleAddName = () => {
    if (nameToAdd) {
      setNameList((prevNameList) => [...prevNameList, nameToAdd]);

      setNameToAdd("");
      console.log(nameList);
    }
  };

  const handleReset = () => {
    setNameList([]);
    setNameToAdd("");
    setAssignedList(new Map());
  };

  const assignSantas = () => {
    const nameHolder = nameList.slice();
    const shuffledNames = nameHolder.slice();
    if (nameHolder.length % 2 === 0) {
      for (let i = shuffledNames.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledNames[i], shuffledNames[j]] = [
          shuffledNames[j],
          shuffledNames[i],
        ];
      }
    } else {
      window.alert(
        "The number of participants must be even from santa assignments."
      );
      return;
    }

    const newAssignedList = new Map();
    const assignedSantas = new Set();

    for (let i = 0; i < nameList.length; i++) {
      const participant = nameList[i];
      let santa = shuffledNames[i];

      while (assignedSantas.has(santa) || santa === participant) {
        santa = shuffledNames[Math.floor(Math.random() * shuffledNames.length)];
      }

      newAssignedList.set(participant, santa);
      assignedSantas.add(santa);
    }

    setAssignedList(newAssignedList);

    console.log(assignedList);
  };

  return (
    <Container className="custom-container">
      <Row>
        <Col sm="3" className="margin-top margin-left">
          <Input
            type="text"
            value={nameToAdd}
            onChange={handleInputChange}
            placeholder="enter name to add"
          />
        </Col>
        <Col sm="2" className="margin-top ">
          <Button
            color="warning"
            size="lg"
            onClick={handleAddName}
            className="float-left-mobile"
          >
            Add Name
          </Button>
        </Col>
        <Col sm="2" className="margin-top">
          <Button
            color="success"
            size="lg"
            onClick={assignSantas}
            className="float-left"
          >
            Assign Santas
          </Button>
        </Col>
        <Col sm="2" className="margin-top">
          <Button
            color="danger"
            size="lg"
            onClick={handleReset}
            className="float-left"
          >
            Reset
          </Button>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <h1>Participants:</h1>
        </Col>
        <Col sm="6">
          <h1>Assignments:</h1>
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <NameList nameList={nameList} />
        </Col>
        <Col sm="6">
          <SantaList assignedList={assignedList} />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;

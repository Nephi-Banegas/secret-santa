import { ListGroup, ListGroupItem } from "reactstrap";
import "../styles.css";

const NameList = ({ nameList }) => {
  return (
    <ListGroup className="name-list">
      {nameList.map((name, index) => (
        <ListGroupItem key={index}>{name}</ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default NameList;

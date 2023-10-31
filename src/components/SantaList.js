import { ListGroup, ListGroupItem } from "reactstrap";
import "../styles.css";

const SantaList = ({ assignedList }) => {
  return (
    <div className="name-list">
      {Array.from(assignedList).map(([santa, participant], index) => (
        <ListGroup key={index}>
          <ListGroupItem
            className={`alternating-list-item ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            {santa} (Santa)
          </ListGroupItem>
          <ListGroupItem
            className={`alternating-list-item ${
              index % 2 === 0 ? "even" : "odd"
            }`}
          >
            {participant}
          </ListGroupItem>
        </ListGroup>
      ))}
    </div>
  );
};

export default SantaList;

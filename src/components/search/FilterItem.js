import Col from "react-bootstrap/Col";
import styles from "./styles/FilterWrapper.module.css";

const FilterItem = ({ heading, component}) => {

  return (
    <Col xs={12} className={`my-1 pb-3 ${styles.filterItem}`}>
      <p className={styles.typeHeading}>{heading}</p>
      {component}
    </Col>
  );
};

export default FilterItem;

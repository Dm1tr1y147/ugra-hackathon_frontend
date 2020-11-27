import React from "react";
import { useCounter } from "hooks/counter";

import styles from "styles/exampleComponent.module.css";

const ExampleComponent = () => {
  const {} = useCounter();
  return <button className={styles.button}>Amazing button by Timothy!</button>;
};

export default ExampleComponent;

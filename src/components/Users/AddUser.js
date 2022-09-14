import { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    setError(false);

    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid name and age (name: no numbers, age: only numbers)",
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: "Invalid age",
        message: "Age must be a number greater than 1 and less than 130.",
      });
      return;
    }

    console.log(userName, age);
    props.onAddUser(userName, age);
    setUserName("");
    setAge("");
  };

  const closeModal = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onCloseModal={closeModal}
        ></Modal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            min="1"
            max="130"
            step="1"
            id="age"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          ></input>
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

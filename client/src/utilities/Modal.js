import React from "react";

import { Button, FormGroup, Form, Modal } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: "",
      selectedPriority: "",
      idNum: 1,
    };
  }

  handleInputChange = (e) => {
    this.setState({ newTodo: e.target.value });
  };

  handlePrioritySelect = (e) => {
    this.setState({ selectedPriority: e });
  };

  handleAddTodo = () => {
    if (
      this.state.newTodo.trim() === "" ||
      this.state.selectedPriority.trim() === ""
    )
      return;

    const newTodoItem = {
      id: this.state.idNum,
      text: this.state.newTodo,
      priority: this.state.selectedPriority,
      status: "Incomplete",
    };

    this.setState((prevState) => ({
      idNum: ++prevState.idNum,
      newTodo: "",
      selectedPriority: "",
    }));
    this.props.onAdd(newTodoItem);
    this.props.onClose();
  };

  render() {
    const { show, onClose } = this.props;
    const { newTodo, selectedPriority } = this.state;

    return (
      <Modal
        className="my-modal"
        show={show}
        onHide={onClose}
        backdrop="static"
      >
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>Add New Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Todo Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Create a Todo List..."
                value={newTodo}
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <FormGroup>
              <Form.Label>Priority:</Form.Label>
              <Form.Select
                value={selectedPriority}
                onChange={(e) => this.handlePrioritySelect(e.target.value)}
              >
                <option value="" disabled>
                  None
                </option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </Form.Select>
            </FormGroup>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={this.handleAddTodo}>
            Add Todo
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default AddTodo;

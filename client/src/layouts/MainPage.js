import React from "react";

import { Button, Badge, Dropdown, Table } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/MainPage.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AddTodo from "../utilities/Modal";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      show: false,
      filter: "All",
    };
  }
  handleAddTodo = (newTodoItem) => {
    this.setState((prevState) => {
      const updatedTodoList = prevState.todoList.concat(newTodoItem);

      return {
        todoList: updatedTodoList,
      };
    });
  };
  handleFilterChange = (e) => {
    this.setState({ filter: e });
  };
  handleStatusChange = (id) => {
    this.setState((prevState) => {
      const updatedTodoList = prevState.todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            status: todo.status === "Incomplete" ? "Complete" : "Incomplete",
          };
        }
        return todo;
      });

      return {
        todoList: updatedTodoList,
      };
    });
  };
  handleDeleteTodo = (id) => {
    this.setState((prevState) => {
      const updatedTodoList = prevState.todoList.filter(
        (todo) => todo.id !== id
      );

      return {
        todoList: updatedTodoList,
      };
    });
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  render() {
    const { todoList, show } = this.state;
    return (
      <div id="app">
        <div id="topBar">
          <Button
            id="test"
            variant="success"
            style={{ width: "15%" }}
            onClick={this.toggleModal}
          >
            <i class="bi bi-plus-circle"></i>
          </Button>
          <h2 style={{ width: "70%" }}> Todo List</h2>
          <div>
            <Dropdown
              onSelect={(eventKey) => this.handleFilterChange(eventKey)}
            >
              <Dropdown.Toggle variant="primary" id="filterDropdown">
                <i class="bi bi-filter"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item
                  eventKey="All"
                  active={this.state.filter === "All"}
                >
                  All
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="High"
                  active={this.state.filter === "High"}
                >
                  High
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Medium"
                  active={this.state.filter === "Medium"}
                >
                  Medium
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Low"
                  active={this.state.filter === "Low"}
                >
                  Low
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div id="todoTable">
          {}
          <Table striped hover variant="dark" style={{ width: "100%" }}>
            <thead>
              <tr>
                <th style={{ width: "5%" }}>Id </th>
                <th style={{ width: "60%" }}>ToDo Name</th>
                <th style={{ width: "10%" }}>Priority</th>
                <th style={{ width: "25%" }}>Status</th>
              </tr>
            </thead>

            <tbody>
              {todoList
                .filter(
                  (todo) =>
                    this.state.filter === "All" ||
                    todo.priority === this.state.filter
                )
                .map((filteredTodo) => (
                  <tr key={filteredTodo.id}>
                    <td
                      onClick={() => this.handleStatusChange(filteredTodo.id)}
                    >
                      {filteredTodo.id}
                    </td>
                    <td
                      onClick={() => this.handleStatusChange(filteredTodo.id)}
                    >
                      {filteredTodo.text}
                    </td>
                    <td>
                      <Badge
                        pill
                        bg={
                          filteredTodo.priority === "High"
                            ? "danger"
                            : filteredTodo.priority === "Medium"
                            ? "warning"
                            : filteredTodo.priority === "Low"
                            ? "success"
                            : "secondary"
                        }
                      >
                        {filteredTodo.priority}
                      </Badge>
                    </td>
                    <td
                      className={
                        filteredTodo.status === "Incomplete"
                          ? "incomplete"
                          : "complete"
                      }
                      onClick={() => this.handleStatusChange(filteredTodo.id)}
                    >
                      {filteredTodo.status}
                    </td>
                    <td
                      class="deleteBox"
                      onClick={() => this.handleDeleteTodo(filteredTodo.id)}
                    >
                      x
                    </td>{" "}
                    {""}
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <div id="modalContainer">
          <AddTodo
            show={show}
            onClose={this.toggleModal}
            onAdd={this.handleAddTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;

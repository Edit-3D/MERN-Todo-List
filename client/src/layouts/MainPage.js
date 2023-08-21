import React from "react";

import { Button, Badge, Dropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/MainPage.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import AddTodo from "../utilities/Modal";
import TodoService from "../services/todoService";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [],
      show: false,
      filter: "All",
    };
  }
  handleCreateTodo = async (newTodoItem) => {
    try {
      const addedTodo = await TodoService.createTodo(newTodoItem);
      this.setState((prevState) => ({
        todoList: [...prevState.todoList, addedTodo],
      }));
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };
  handleDeleteTodo = async (id) => {
    try {
      await TodoService.deleteTodo(id);
      this.setState((prevState) => ({
        todoList: prevState.todoList.filter((todo) => todo.id !== id),
      }));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };
  handleUpdateTodo = async (id, currentStatus) => {
    try {
      const newStatus =
        currentStatus === "Complete" ? "Incomplete" : "Complete";
      const updatedTodo = await TodoService.updateTodo(id, {
        status: newStatus,
      });
      this.setState((prevState) => ({
        todoList: prevState.todoList.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              status: updatedTodo.status,
            };
          }
          return todo;
        }),
      }));
      console.log("Status updated successfully!");
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  async componentDidMount() {
    try {
      const todos = await TodoService.getTodos();
      this.setState({ todoList: todos });
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  }

  handleFilterChange = (e) => {
    this.setState({ filter: e });
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
          <table
            class="table table-dark table-striped table-hover"
            style={{ width: "100%" }}
          >
            <thead>
              <tr>
                <th style={{ width: "60%" }}>ToDo Name</th>
                <th style={{ width: "10%" }}>Priority</th>
                <th style={{ width: "25%" }}>Status</th>
                <th style={{ width: "10%" }}>DELETE</th>
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
                    <td>{filteredTodo.text}</td>
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
                      onClick={() =>
                        this.handleUpdateTodo(
                          filteredTodo.id,
                          filteredTodo.status
                        )
                      }
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
          </table>
        </div>
        <div id="modalContainer">
          <AddTodo
            show={show}
            onClose={this.toggleModal}
            onAdd={this.handleCreateTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoList;

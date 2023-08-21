import api from "./apiService";

class TodoService {
  static getTodos = async () => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static createTodo = async (todoData) => {
    try {
      const response = await api.post("/todos", todoData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static deleteTodo = async (id) => {
    try {
      const response = await api.delete(`/todos/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  static updateTodo = async (id, updatedData) => {
    try {
      const response = await api.put(`/todos/${id}`, updatedData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export default TodoService;

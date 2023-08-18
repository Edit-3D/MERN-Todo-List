import api from "./apiService";

class TodoService {
  static getUsers = async () => {
    try {
      const response = await api.get("/todos");
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  static createUser = async (todoData) => {
    try {
      const response = await api.post("/todos", todoData);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
}

export default TodoService;

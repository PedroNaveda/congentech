const api = {
  getEmployees: async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/employees`);

      if (!response.ok) {
        throw new Error(`Error fetching employees: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  postEmployee: async (employeeData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/employees`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error(`Error updating employee: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
  putEmployees: async (employeeId, employeeData) => {
    try {
      const response = await fetch(`http://localhost:3000/api/employees/${employeeId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
      });

      if (!response.ok) {
        throw new Error(`Error updating employee: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  deleteEmployee: async (employeeId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/employees/${employeeId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error deleting employee: ${response.statusText}`);
      }

      return response.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};

export default api;
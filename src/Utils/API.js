import axios from 'axios';

const baseURL = 'https://api-whittasks.azurewebsites.net/api/';

export const addTask = async (id, task) => {
    try {
      console.log("hello world");
      const response = await axios.post(baseURL + 'tasks/', { 'user_id': id, 'name' : task});

      //console.log(response);
      return response.data;
    } catch (err) {
      console.error(
        `There was a problem adding the new player: ${err}`,
      );
      throw err;
    }
};
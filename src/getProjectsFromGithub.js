import axios from 'axios';

export const getProjectsFromGithub = async () => {
  const response = await axios.get('https://api.github.com/users/q270311/repos');

  if (!response.ok) {
    new Error(response.statusText);
  }

  return await response.data;
};

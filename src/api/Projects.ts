const baseURL = 'http://localhost:5190';

export const getProjects = () => {
  return fetch(`${baseURL}/api/Project`).then((res) => res.json());
};
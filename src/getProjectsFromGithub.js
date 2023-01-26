import axios from "axios";

export const getProjectsFromGithub = async () => {
    //throw new Error("test");
    const response = await axios.get("/personal-homepage/exampleProjects.json");
    //const response = await axios.get("https://api.github.com/users/q270311/repos");
    
    if (!response.ok) {
        new Error(response.statusText);
    }
    return await response.data;
};



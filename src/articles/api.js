import apiUrl from "../apiConfig";
import apiURL from "../apiConfig";
import axios from "axios";

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Articles
const getAllArticles = () => {
  return axios.get(`${apiUrl}/articles`);
};
//Delete Article by ID
const deleteArticleByID = id => {
  return axios.delete(`${apiURL}/articles/${id}`);
};

const createArticle = () => {
  return axios.post(`${apiURL}/articles/`);
};
export { getAllArticles, deleteArticleByID, createArticle };

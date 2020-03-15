import apiUrl from '../apiConfig';
import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Articles
const getAllArticles = () => {
  return axios.get(`${apiUrl}/articles`);
};

// Delete Article by ID
const deleteArticleByID = (id) => {
  return axios.delete(`${apiUrl}/articles/${id}`);
}

//Add article 
const PostArticles = newarticle => {
  return axios.post(`${apiURL}/articles`, newarticle);
};

//Update article By ID
const UpdateArticleById = (id, updatedart) => {
  return axios.patch(`${apiURL}/articles/${id}`, updatedart);
};
export { getAllArticles, deleteArticleByID, PostArticles, UpdateArticleById };
import apiUrl from '../apiConfig';
import axios from 'axios';


// Index , show , create ,update  , destroy

// get all Articles 
export const getAllArticles = () => {

    return   axios.get(`${apiUrl}/articles`)
  
};

// delete artical by id 
export const deleteArticleById = (id) => {
    return axios.delete(`${apiUrl}/articles/${id}`)
}


// create artical 

export const addArtical = (Artical) => {
    console.log("inside add ")
    return  axios.post(`${apiUrl}/articles` , {
        Article : {  
        tital : Artical.tital,
        content :  Artical.content,
        author : Artical.author }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}



export const updateArticalById = (id,newtital ,newauthor ,newcontent) => {

    return axios.patch(`${apiUrl}/articles/${id}` , {
        Article : {  
        tital : newtital,
        content :  newauthor,
        author : newcontent}
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }); 
}


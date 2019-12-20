 const  PostData = (type, userData) => {
    let BaseURL = 'https://chatapp019.herokuapp.com/api/v1/';

    return new Promise((resolve, reject) =>{    
        fetch(BaseURL+type, {
          method: 'POST', 
          mode: 'cors', 
          cache: 'no-cache', 
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify(userData)
          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });
      });
}

export default PostData;
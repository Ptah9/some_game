let url = "http://127.0.0.1:5000/users"


async function Connect(endpoint, method, data){
  try{
    let response = await fetch(url + endpoint, 
      method == "GET" ? {
        method: "GET",
        headers: { "Accept": "application/json" }
    }
      : {
        method: method,
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
  );
    if (response.status !== 200) {  
      console.log('Looks like there was a problem. Status Code: ' +  
        response.status);  
      return;  
    }
      
      let resp = await response.json();
      return resp
      
  }
  catch(e){
    console.log('Fetch Error :-S', e);  
  }
}


export default Connect;
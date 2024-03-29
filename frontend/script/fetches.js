
let url = "http://127.0.0.1:5000/users"
async function main(){
    try{
      let response = await fetch(url);
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
  
async function unjson(response){
    let resp = response
    console.log(resp)
    let score = resp[6]
    scoreSpan.textContent = score;
}


main().then(function(response) {

    
})

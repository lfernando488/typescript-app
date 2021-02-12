 async function getUser(){

    try {
        const data = await fetch(`https://randomuser.me/api/`)
        const jsonResponse = await data.json();
        console.log(jsonResponse);

    }catch(error){
        console.log(error);
        return null;
    }
 }

 getUser();
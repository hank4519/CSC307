const { response } = require('express');
const express = require('express'); 
const cors = require('cors');
const app = express(); 
const port = 5001; 

const users = { 
    users_list :
    [
       { 
          id : 'xyz789',
          name : 'Charlie',
          job: 'Janitor',
       },
       {
          id : 'abc123', 
          name: 'Macs',
          job: 'Bouncer',
       },
       {
          id : 'ppp222', 
          name: 'Mac',
          job: 'Professor',
       }, 
       {
          id: 'yat999', 
          name: 'Dee',
          job: 'Aspring actress',
       },
       {
          id: 'zap555', 
          name: 'Dennis',
          job: 'Bartender',
       }
    ]
 }

 app.use(cors());

app.use(express.json()); 

app.get('/', (req, res) => { 
    res.send('Hello World!'); 
}); 

app.get('/users', (req, res) => {
    const name = req.query.name; 
    console.log(name) 
    if (name != undefined){
        let result = findUserByName(name); 
        result = {users_list: result}; 
        console.log(result)
        res.send(result);
    }
    else{
        res.send(users);
    }
});

const findUserByName = (name) => {
    return users['users_list'].filter( (user) => user['name'] === name);
}
// app.get('/users', (req, res) => {
//     const name = req.query.name;
//     const job = req.query.job; 
//     if( name != undefined && job != undefined ){ 
//         let result = findUserByNameAndJob(name, job); 
//         result = {users_list: result}; 
//         res.send(result) 
//     }
//     else{
//         res.send(users); 
//     }
// }) ;
// const findUserByNameAndJob = (name, job) => {
//     return users['users_list'].filter((user) => user['name'] === name && user['job'] === job)
// }

app.get('/users/:id', (req, res) => {
    const id = req.params['id']; 
    let result = findUserById(id); 
    if (result === undefined || result.length == 0) 
        res.status(404).send('Resource not found.'); 
    else{
        result = {users_list: result};
        res.send(result); 
    }
}); 

function findUserById(id){
    return users['users_list'].find( (user) => user['id'] === id); 
    //or 
    //return users['users_list'].filter( (user) => user['id'] === id);
}

app.post('/users', (req, res) => {
    const userToAdd = req.body
    console.log('app.post' + userToAdd)
    addUser(userToAdd);
    res.status(200).end();
});

function addUser(user){
    users['users_list'].push(user); 
}

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
}); 


app.delete('/users', (req, res) => {
    const userToDelete = req.body 
    removeUser(userToDelete) 
    console.log(users)
    res.status(200).end() 
});

function removeUser(user){ 
    users['users_list'].splice(users['users_list'].indexOf(user), 1) 
}

/*
Trying to make a fecth call and have recent user added to the list 

useEffect(() => {
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://reqres.in/api/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id))
        .then(data => setPostName(data.name))
        .then(data => setPostJob(data.job));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
*/ 
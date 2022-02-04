import express from 'express';

import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users.js'

const router = express.Router() //initialize our router

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser)

export default router;

// BELOW ARE ALL OLD CODE BEFORE MOVING TO

//let users = []

//all routes in here are starting with /users

//router.get('/', getUsers)

/*router.get('/', (req, res) => {
    //console.log(users);

    res.send(users)
});*/

//add the functionality of adding users to our database (see line below)

//router.get('/', createUser);

/*router.post('/', (req, res) => { 
    const user = req.body
 
    //how can we append to current user we are getting from the req.body.
    //spread operator and creation of obj. we created a new object, which reps the new user, then spread the props of user (firstName, age ...etc)
    // and added one more value--id: userId

    users.push({ ...user, id: uuidv4() })

    res.send(`User with name ${user.firstName} added to the database!`)
});*/

// /users/2 => req.params {id: 2}

//router.get('/:id', getUser);
/*router.get('/:id', (req, res) =>{
    const { id } = req.params

    //send the data for a speicif id. find a user in usersdb that has the same id. see line below.
    const foundUser = users.find((user) => user.id === id)
    res.send(foundUser)
});*/

//router.delete('/:id', deleteUser);
/*router.delete('/:id', (req, res) => {
    const { id } = req.params

    //how to remove that element from array, use the filter function
    users = users.filter((user) => user.id != id)

    res.send(`User with the id ${id} deleted from database!!!`)

});*/

//router.patch('/:id', updateUser)
/*router.patch('/:id', (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age} = req.body

    const user = users.find((user) => user.id === id)

    if(firstName) user.firstName = firstName;
    if(lastName) user.lastName = lastName;
    if(age) user.age = age;

    res.send(`User with the id ${id} has been updated in the Database`)

    //how to update the specific user, 
    //first, find the user to be updated.
});*/

//export default router
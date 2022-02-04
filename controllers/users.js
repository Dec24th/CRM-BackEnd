import { v4 as uuidv4 } from 'uuid'; //to generate a different ID for each user. see npm uuid

let users = []

//GET USERS (PLURAL) METHOD
export const getUsers = (req, res) => {

    res.status(418).send(users)

}

//POST METHOD
export const createUser = (req, res) => {
    const user = req.body

    users.push({ ...user, id: uuidv4() })

    res.status(418).send(`User "${user.firstName}" has been added to the database.`)
}
//GET USER (SINGULAR) METHOD
export const getUser = (req, res) => {
    const { id } = req.params

    const foundUser = users.find((user) => user.id === id)
    
    res.send(foundUser)
};

//DELETE METHOD by id
export const deleteUser = (req, res) => {
    const { id } = req.params

    users = users.filter((user) => user.id != id)

    res.status(418).send(`User with id ${id} DELETED from database!!!`)

};

//PATCH METHOD
export const updateUser = (req, res) => {
    const { id } = req.params
    const { firstName, lastName, age } = req.body

    const user = users.find((user) => user.id === id)

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.status(418).send(`User with id ${id} has been UPDATED in the database`)
}
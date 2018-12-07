const axios = require("axios");

const monsters = [];

const character = [];

axios
    .get(`http://dnd5eapi.co/api/monsters/36`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/183`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/41`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/62`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/150`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/84`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/205`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/250`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/114`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
axios
    .get(`http://dnd5eapi.co/api/monsters/291`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))


const filterMonsters = (req,res,next) => {
    console.log('')
}

const createCharacter = (req,res,next) => {
	character.push(req.body)
	res.status(200).json(character)
}

const updateCharacter = (req,res,next) => {
    console.log('')
}

const deleteCharacter = (req,res,next) => {
	character.shift()
	res.status(200).json(character)
}

const getMonsters = (req,res,next) => {
    res.json(monsters)
}

const getCharacter = (req,res,next) => {
    res.json(character)
}

const searchMonsters = (req,res,next) => {
    const monster = monsters.find(monster => +monster.index === +req.params.id);
    if(!monster) {
        return res.status(400).json({ error: 'No monster found.'})
    }
    else{
        res.json(monster)
    }
}

module.exports = {
    updateCharacter,
    deleteCharacter,
    createCharacter,
    getCharacter,
    getMonsters,
    searchMonsters,
}
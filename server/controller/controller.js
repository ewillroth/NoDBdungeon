const axios = require("axios");

const monsters = [];

const character = [];

const usefulmonsters = [ 107,42,250,75,149,134,259,76,281,115,188,205,213,322 ]

for(let i=0; i<usefulmonsters.length; i++){
	axios
		.get(`http://dnd5eapi.co/api/monsters/${usefulmonsters[i]}`)
		.then(response => monsters.push({secretnumber: i,...response.data}))
		.catch(err=>console.log(err))
}
 
const createCharacter = (req,res,next) => {
	character.push(req.body)
	res.status(200).json(character)
}

const updateCharacter = (req,res,next) => {
	character.splice(0,1,req.body)
	res.json(character)
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
    const monster = monsters.find(monster => +monster.secretnumber === +req.params.id);
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
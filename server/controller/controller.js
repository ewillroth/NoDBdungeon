const axios = require("axios");

const monsters = [];

const character = [];

const usefulmonsters = [ 107,149,42,250,75,134,259,220,216,76,168,261,281,115,325,148,139,188,92,56,113,84,114, 63,240,111,136,41,246,205,221,213,32,202,155,285,291,173,322 ]

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
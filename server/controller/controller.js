const axios = require("axios");

const monsters = [];

const character = {
    name: '',
    class: '',
    str: '',
    dex: '',
    wis: '',
    maxhp: '',
    hp: '',
}

for(let i=1; i<325;i++){
    axios
    .get(`http://dnd5eapi.co/api/monsters/${i}`)
    .then(response => monsters.push(response.data))
    .catch(err=>console.log(err))
}

const filterMonsters = () => {
    console.log('')
}

const createCharacter = () => {
    console.log('')
}

const updateCharacter = () => {
    console.log('')
}

const deleteCharacter = () => {
    console.log('')
}

const getMonsters = (req,res,next) => {
    res.json(monsters)
}

const getCharacter = () => {
    console.log('')
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
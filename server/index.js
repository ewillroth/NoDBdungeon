const axios = require('axios');
const {json} = require('body-parser');
const express = require('express');
const cors = require('cors')
const controller = require('./controller/controller')
const app = express();
const port = 3030;

app.use(json())
app.use(cors())

app.get('/api/character', controller.getCharacter)
app.put('/api/character', controller.updateCharacter)
app.post('/api/character', controller.createCharacter)
app.delete('/api/character', controller.deleteCharacter)
app.get(`/api/monsters/:id`, controller.searchMonsters)
app.get('/api/monsters', controller.getMonsters)

app.listen(port, ()=>{console.log(`I'm listening on ${port}`)})
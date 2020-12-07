const express = require('express');
const app = express();
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
const cors = require('cors');
const pool = require('./db')

require('dotenv/config');

app.use(cors());
app.use(express.json());

app.post('/registration', async (req,res) => {
  try {
    const info = req.body;
    const newUser = await pool.query(
      'INSERT INTO public."users" (login, password, name) VALUES($1, $2, $3) RETURNING *',
      [info.login, info.password, info.name]);
    res.json(newUser.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});

//get info about user for login with login parameter
app.get('/login/:login', async(req, res) => {
  try {
    const {login} = req.params;
    const userInfo = await pool.query(
    'SELECT * FROM public."users" WHERE login = $1',
      [login]);
    res.json(userInfo.rows[0]);
  }catch (e) {
    console.error(e.message);
  }
});

//add suggestion
app.post('/suggestions/add', async (req,res) => {
  try {
    const info = req.body;
    const newSuggestion = await pool.query(
      'INSERT INTO public."suggestions" (name, adder_id, group_id) VALUES($1, $2, $3) RETURNING *',
      [info.name, info.adderId, info.groupId]);
    res.json(newSuggestion.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});

//add new group
app.post('/groups/add', async (req,res) => {
  try {
    const info = req.body;
    const newGroup = await pool.query(
      'INSERT INTO public."groups" (name, description) VALUES($1, $2) RETURNING *',
      [info.name, info.description]);
    res.json(newGroup.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});

//add user to the group
app.post('/user/addgroup', async (req,res) => {
  try {
    const info = req.body;
    const addUserToGroup = await pool.query(
      'INSERT INTO public."user_groups" (user_id, group_id) VALUES($1, $2) RETURNING *',
      [info.userId, info.groupId]);
    res.json(addUserToGroup.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});

//get info about user groups
app.get('/user/groups/:userId', async(req, res) => {
  try {
    const {userId} = req.params;
    const userGroups = await pool.query(
      'SELECT * FROM public."groups" LEFT JOIN public."user_groups" ON public."user_groups".group_id = public."groups".id WHERE "user_id" = $1',
      [userId]);
    res.json(userGroups.rows);
  }catch (e) {
    console.error(e.message);
  }
});

//get info about group members
app.get('/group/users/:groupId', async(req, res) => {
  try {
    const {groupId} = req.params;
    const groupUsers = await pool.query(
      'SELECT * FROM public."users" LEFT JOIN public."user_groups" ON public."user_groups".user_id = public."users".user_id WHERE "group_id" = $1',
      [groupId]);
    res.json(groupUsers.rows);
  }catch (e) {
    console.error(e.message);
  }
});


//get info about group suggestions
app.get('/group/suggestions/:groupId', async(req, res) => {
  try {
    const {groupId} = req.params;
    const groupSuggestions = await pool.query(
      'SELECT * FROM public."suggestions" WHERE group_id = $1',
      [groupId]);
    res.json(groupSuggestions.rows);
  }catch (e) {
    console.error(e.message);
  }
});

//for like/dislike button
app.post('/user/suggestion/decision', async (req,res) => {
  try {
    const info = req.body;
    const addSuggestionDecision = await pool.query(
      'INSERT INTO public."user_suggestions" (user_id, suggestions_id, user_likes_it) VALUES($1, $2, $3) RETURNING *',
      [info.userId, info.suggestionId, info.userLikesIt]);
    res.json(addSuggestionDecision.rows[0]);
  } catch (e) {
    console.error(e.message);
  }
});


// const testAdd = async () => {
//   const test = "test";
//   const result = await pool.query('INSERT INTO public."users" (login) VALUES($1)',[test]);
//   console.log("🚀 ~ file: server.js ~ line 15 ~ testAdd ~ result", result)
// }
//
// testAdd()



// app.get('/', (req, res) => {
//   res.send('home page');
// });

// const postRoute = require('./routes/posts');
// app.use('/posts', postRoute);

// mongoose.connect('mongodb+srv://match:12345@match-server.ocnee.mongodb.net/matchDB?retryWrites=true&w=majority',{ useNewUrlParser: true }, ()=> console.log('connected to DB'))
app.listen(process.env.PORT || 5000);


// const things = [
//   { id: 1, name: "Socks" },
//   { id: 2, name: "Skills" },
//   { id: 3, name: "Passion" },
// ];

// app.get("/things/:id", (req, res) => {
//   const wantedId = parseInt(req.params.id)

//   const thing = things.find((thing) => thing.id === wantedId);

//   if (thing != null) {
//     res.json(thing)
//   } else {
//     res.sendStatus(404)
//   }
// });

// app.get("/", (req, res) => {

//   res.send("Welcome to Express");

// });

// app.listen(port, (err) => {

//   if (err) {

//     console.error('Something bad happened');

//   } else {

//     console.log(`server is listening on ${port}`);

//   }

// });

// const welcomeName = (req, res) => {

//   res.send(`Welcome ${req.params.name}`);

// };

// app.get("/users/:name", welcomeName);

// ------------------------------------------------------------

const express = require("express")
const app = express()
const port = 5000
const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },

  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },

  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
]

app.get("/", (req, res) => {
  res.send("Welcome to my favourite movie list")
})
app.get("/api/movies", (req, res) => {
  res.status(200).json(movies)
})
app.get("/api/movies/:id", (req, res) => {
  const movieId = parseInt(req.params.id, 10)
  const movie = movies.find((movie) => movie.id === movieId)
  if (movie) {
    res.status(200).json(movie)
  } else {
    res.status(404).send("Not Found")
  }
})
app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened")
  } else {
    console.log(`Server is listening on ${port}`)
  }
})
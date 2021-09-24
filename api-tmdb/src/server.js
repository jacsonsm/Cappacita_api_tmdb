const cors = require("cors");
const express = require("express");
const app = express();
const dataBase = require("./database/databaseMysql")
require("dotenv/config");
const axios = require("axios");
const api_key = process.env.NEXT_APP_TMDB_TOKEN;

app.use(cors());

app.get("/", async (req, res) => {
    try {
        const { data } = await axios(
            `https://api.themoviedb.org/3/movie/550?api_key=${NEXT_APP_TMDB_TOKEN}&language=pt-BR&page=2`
        );
        return res.json(data.results);
    } catch (error) {
        console.error(error);
    }
});

app.get("/:id", async (req, res) => {
    try {
        const { data } = await axios(
            `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${NEXT_APP_TMDB_TOKEN}&language=pt-BR`
        );
        res.send(data);
    } catch (error) { }
});

app.post("/feedback", async (req, res) => {
    const createFeedback = { nome: req.body.nome, feedback: req.body.comentario }
    const insertFeedback = `INSERT TO tmdb_filmes `



})

app.listen(3005);
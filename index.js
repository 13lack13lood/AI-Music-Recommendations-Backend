const express = require("express");

require("dotenv").config();

const { Configuration, OpenAIApi } = require("openai");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/get-recommendation-track", async (req, res) => {
    try {
        const { prompt } = req.body;

        const content = "give me 15 new songs giving the name and artist given that I like the following songs and send the result as a json object in the format:\nsong1: {\nname: ...\nartist: ...\n}\n" + prompt;

        console.log(content);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: content }],
        });

        console.log(response.data.choices[0].message.content);

        return res.status(200).json({
            message: "Working",
            data: response.data.choices[0].message.content,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.response ? error.response.data : "There was an issue on the server",
        });
    }
});

app.post("/get-recommendation-artist-artist", async (req, res) => {
    try {
        const { prompt } = req.body;

        const content = "give me 12 new artists given that I like the following artists and send the result as a json object in the format:\nartist1: {\nname: ...\n}\n" + prompt;

        console.log(content);

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: content }],
        });

        console.log(response.data.choices[0].message.content);

        return res.status(200).json({
            message: "Working",
            data: response.data.choices[0].message.content,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.response ? error.response.data : "There was an issue on the server",
        });
    }
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}`));

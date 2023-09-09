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

app.post("/get-recommendation", async (req, res) => {
	try {
		// const { prompt } = req.body;

		// const content =
		// 	"give me 15 new songs giving the name and artist given that I like the following songs and send the result in json format\n" +
		// 	prompt;

		// console.log(content);

		// const response = await openai.createChatCompletion({
		// 	model: "gpt-3.5-turbo",
		// 	messages: [{ role: "user", content: content }],
		// });

		// console.log(response.data.choices[0].message.content);

		return res.status(200).json({
			message: "Working",
			data:
				"Here are 15 new songs based on your preferences:\n" +
				"\n" +
				'1. "Overdrive" by Conan Gray\n' +
				'2. "Save Your Tears" by The Weeknd\n' +
				'3. "Clouded" by Brent Faiyaz\n' +
				'4. "Addicted" by Jorja Smith\n' +
				'5. "Yonkers" by Tyler, The Creator\n' +
				'6. "Wait a Minute!" by Willow\n' +
				'7. "Stargazing" by Travis Scott\n' +
				'8. "Gravity" by Brent Faiyaz\n' +
				'9. "Best Friend" by Doja Cat ft. Saweetie\n' +
				'10. "All Too Well" (Taylor\'s Version) by Taylor Swift\n' +
				'11. "Off My Face" by Justin Bieber\n' +
				'12. "Follow You" by Imagine Dragons\n' +
				'13. "Falling" by Harry Styles\n' +
				'14. "Supermarket Flowers" by Ed Sheeran\n' +
				'15. "Kill Our Way to Heaven" by Michl\n' +
				"\n" +
				"Here is the result in JSON format:\n" +
				"\n" +
				"{\n" +
				'  "songs": [\n' +
				"    {\n" +
				'      "name": "Overdrive",\n' +
				'      "artist": "Conan Gray"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Save Your Tears",\n' +
				'      "artist": "The Weeknd"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Clouded",\n' +
				'      "artist": "Brent Faiyaz"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Addicted",\n' +
				'      "artist": "Jorja Smith"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Yonkers",\n' +
				'      "artist": "Tyler, The Creator"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Wait a Minute!",\n' +
				'      "artist": "Willow"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Stargazing",\n' +
				'      "artist": "Travis Scott"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Gravity",\n' +
				'      "artist": "Brent Faiyaz"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Best Friend",\n' +
				'      "artist": "Doja Cat ft. Saweetie"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "All Too Well",\n' +
				'      "artist": "Taylor Swift"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Off My Face",\n' +
				'      "artist": "Justin Bieber"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Follow You",\n' +
				'      "artist": "Imagine Dragons"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Falling",\n' +
				'      "artist": "Harry Styles"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Supermarket Flowers",\n' +
				'      "artist": "Ed Sheeran"\n' +
				"    },\n" +
				"    {\n" +
				'      "name": "Kill Our Way to Heaven",\n' +
				'      "artist": "Michl"\n' +
				"    }\n" +
				"  ]\n" +
				"}",
			// data: response.data.choices[0].message.content,
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

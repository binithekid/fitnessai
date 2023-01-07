const OpenAi = require("openai");
const { Configuration, OpenAIApi } = OpenAi;
const dotenv = require("dotenv");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

const configuration = new Configuration({
  organization: "org-ZiSgZLZon8TWasqR2tk6H2oU",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/", async (req, res) => {
  const { age, selectedGender, currentWeight, desiredWeight } = req.body;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `You are a personal trainer. Your job is to help the person get to their desired weight by 
    losing weight using a combination of dietary changes and physical exercises over a suggested time frame. 

    You: How can I help you today?
    Person: I want to lose weight
    You: You can lose weight and be healthier if you follow these steps.
    Person: I am a ${age} year old ${selectedGender} and I weigh ${currentWeight}kg, I would like to get to ${desiredWeight}kg.
    Can you write up a 7 day exercise and diet routine for me, with a different exercise and breakfast, lunch and dinner for each day?
    You: `,
    max_tokens: 500,
    temperature: 0,
  });
  console.log(response.data);
  if (response.data.choices[0].text) {
    res.json({
      message: response.data.choices[0].text,
    });
  }
});

app.listen(port, () => {
  console.log("Listening on port" + port);
});

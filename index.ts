const OpenAi = require("openai");
const { Configuration, OpenAIApi } = OpenAi;
const dotenv = require("dotenv");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Configuration
dotenv.config();
const app = express();
const port = 3001;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const configuration = new Configuration({
  organization: "org-ZiSgZLZon8TWasqR2tk6H2oU",
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.listen(port, () => {
  console.log("Listening on port" + port);
});

app.post("/createMealPlan", async (req, res) => {
  try {
    const {
      dailyCalorieIntake,
      dailyProteinIntake,
      pathChoice,
      selectedCuisine,
      selectedMeal,
      selectedPlan,
      dietaryPreferences,
    } = req.body;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      I want to ${pathChoice}. In order to ${pathChoice}, based on my caluculations I require ${dailyCalorieIntake} calories${
        dailyProteinIntake && ` and ${dailyProteinIntake} grams of protein`
      } per day.

      ${
        selectedPlan === "Single"
          ? `Can you make me a ${selectedMeal} meal plan based on the amount of calories${
              dailyProteinIntake && ` and protein`
            } I require daily which would mean the meal would be roughly a third of these daily requirements.
            Can you include the calorie ${
              dailyProteinIntake && `and protein`
            } amounts for this meal. Make this be a single meal and not simply a list of ingredients.
        ${
          selectedCuisine &&
          selectedCuisine !== "no preference" &&
          `I would like the meal to be from the ${selectedCuisine} cuisine.`
        }
        `
          : ""
      }

      ${
        selectedPlan === "Daily"
          ? `Can you make me a ${selectedPlan} meal plan strictly based on the amount of calories${
              dailyProteinIntake && ` and protein`
            } I need per day. This plan should include breakfast, lunch and dinner and can also include snacking as well.
          Can the plan include the calorie ${
            dailyProteinIntake && `and protein`
          } amounts for each meal.
    `
          : ""
      }

       ${
         selectedPlan === "Weekly"
           ? `Can you make me a ${selectedPlan} meal plan based strictly on the amount of calories${
               dailyProteinIntake && ` and protein`
             } I need per day. This plan should include breakfast, lunch and dinner and for everyday of the week and can also include snacking.
            Can the plan include the calorie ${
              dailyProteinIntake && `and protein`
            } amounts for each meal. Can you make different meal plans for for different days.`
           : ""
       }

       ${
         dietaryPreferences &&
         `I am also ${dietaryPreferences} so can you bear that in mind when making the meal plan.`
       }

       Can you make the meal plan as healthy as possible and cut out processed foods and include
       fruits and vegatables. Can the response be given in bullet point format. Can the last bullet point be the total 
       calories ${dailyProteinIntake && `and protein`} for the plan per day.
   `,
      max_tokens: 800,
      temperature: 0.5,
    });
    res.status(200).send({
      message: response.data.choices[0].text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({
      message: error.message,
    });
  }
});

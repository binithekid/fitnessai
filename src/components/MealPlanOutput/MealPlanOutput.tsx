import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MealPlanOutput.css";
import { AnimatePresence, motion } from "framer-motion";

const MealPlanOutput = () => {
  const data = useSelector((state: any) => state.dataCollect);
  const [bulletPoints, setBulletPoints] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const port = process.env.REACT_APP_PORT;

  useEffect(() => {
    const body = {
      age: data.age,
      currentWeight: data.currentWeight,
      dailyCalorieIntake: data.dailyCalorieIntake,
      dailyProteinIntake: data.dailyProteinIntake,
      gender: data.gender,
      howActive: data.howActive,
      pathChoice: data.pathChoice,
      selectedCuisine: data.selectedCuisine,
      selectedMeal: data.selectedMeal,
      selectedPlan: data.selectedPlan,
      weightMeasurement: data.weightMeasurement,
      dietaryPreferences: data.dietaryPreferences,
      fruitAndVeg: data.fruitAndVeg,
    };

    fetch(`http://localhost:${port}/createMealPlan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((response) => {
        setBulletPoints(response.message.split("\n"));
        setIsLoading(false);
      });
  }, [data, port]);

  return (
    <AnimatePresence>
      <div>
        {isLoading ? (
          <div className='LoadingContainer'>
            <p>Your meal plan is loading! This will only take a minute</p>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='MealPlanContainer'>
            <h1>YOUR MEAL PLAN</h1>
            {bulletPoints.map((bulletPoint, index) => (
              <p key={index}>{bulletPoint}</p>
            ))}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default MealPlanOutput;

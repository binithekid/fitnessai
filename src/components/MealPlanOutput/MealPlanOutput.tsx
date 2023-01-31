import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./MealPlanOutput.css";
import { AnimatePresence, motion } from "framer-motion";
import background from "../../resources/backgroundone.jpeg";

const MealPlanOutput = () => {
  const data = useSelector((state: any) => state.dataCollect);
  const [bulletPoints, setBulletPoints] = useState([]);
  const [emailAddress, setEmailAddress] = useState("");
  const [successMessage, setSuccessMessage] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  const port = process.env.REACT_APP_PORT;

  const refreshPage = () => {
    window.location.reload();
  };

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

  const handleEmailSubmit = async (e: any) => {
    e.preventDefault();
    const body = {
      data: bulletPoints,
      email: emailAddress,
    };

    fetch(`http://localhost:${port}/emailSubmit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSuccessMessage(data);
        setEmailAddress("");
      });
  };

  return (
    <AnimatePresence>
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
          <div className='LeftSide'>
            <h1>YOUR MEAL PLAN</h1>
            {bulletPoints.map((bulletPoint, index) => (
              <p className='bulletPoints' key={index}>
                {bulletPoint}
              </p>
            ))}
            <div className='sendByEmail'>
              <h3 className='sendEmailTitle'>
                Would you like us to send you this meal plan to your email
                address?
              </h3>
              <p className='emailText'>
                If so, simply enter your email below and it'll be sent to you in
                an instant!
              </p>
              <form onSubmit={handleEmailSubmit}>
                <input
                  className='emailInput'
                  type='email'
                  onChange={(event) => setEmailAddress(event.target.value)}
                  placeholder='Enter your email address'
                />
                <button className='submitButton' disabled={!emailAddress}>
                  Submit
                </button>
              </form>
              {successMessage?.message === "Success" ? (
                <p className='smallTextSuccess'>Email sent succesfully!</p>
              ) : successMessage?.message ? (
                <p className='smallTextError'>
                  There has been an error sending your email, please try another
                  email address
                </p>
              ) : (
                <p className='smallText'>
                  (Check your junk or spam folders if it doesn't appear in your
                  inbox right away!)
                </p>
              )}
            </div>
            <div className='ButtonGroup'>
              <button onClick={refreshPage} className='Button'>
                Start Again!
              </button>
            </div>
          </div>
          <div className='RightSide'>
            <img className='RightSideImage' src={background} alt='background' />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MealPlanOutput;

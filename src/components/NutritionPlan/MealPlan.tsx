import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundseven.jpeg";
import { useSelector, useDispatch } from "react-redux";
import SingleOption from "../MealPlanOptions/SingleOption";
import DailyOption from "../MealPlanOptions/DailyOption";
import { useState } from "react";
import {
  setSelectedCuisine,
  setSelectedMeal,
  setDietaryPreferences,
} from "../../features/slice";

const MealPlan = ({ setCurrentPage, currentPage }: any) => {
  const data = useSelector((state: any) => state?.dataCollect);
  const dispatch = useDispatch();

  const [dietaryRestrictions, setDietaryRestrictions] = useState("");
  const [other, setOther] = useState("");

  //For Single Meal
  const [selectedMeal, setSelctedMeal] = useState("");
  const [preferredCusines, setPreferedCusines] = useState("");

  //For Fruit and Veg

  const handleClick = () => {
    setCurrentPage(currentPage + 1);
    dispatch(setSelectedMeal(selectedMeal));

    if (dietaryRestrictions) {
      dispatch(setDietaryPreferences(dietaryRestrictions));
    }

    if (other) {
      dispatch(setDietaryPreferences(`allergic to ${other}`));
    }

    if (preferredCusines) {
      dispatch(setSelectedCuisine(preferredCusines));
    }
  };

  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className='pageDesign'>
          <div className='leftSide'>
            <div className='topHalf'>
              <h1>YOUR PERSONAL MEAL PLAN OPTIONS</h1>
              {data.selectedPlan === "Single" && (
                <SingleOption
                  selectedMeal={selectedMeal}
                  setSelctedMeal={setSelctedMeal}
                  preferredCusines={preferredCusines}
                  setPreferedCusines={setPreferedCusines}
                  dietaryRestrictions={dietaryRestrictions}
                  setDietaryRestrictions={setDietaryRestrictions}
                  other={other}
                  setOther={setOther}
                />
              )}
              {data.selectedPlan === "Daily" && (
                <DailyOption
                  dietaryRestrictions={dietaryRestrictions}
                  setDietaryRestrictions={setDietaryRestrictions}
                  other={other}
                  setOther={setOther}
                />
              )}
            </div>
            <div className='buttonGroup'>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                className='Button'>
                Back
              </button>
              <button
                disabled={data.selectedPlan === "Single" && !selectedMeal}
                style={{
                  opacity:
                    data.selectedPlan === "Single" && !selectedMeal
                      ? "40%"
                      : "1",
                }}
                onClick={handleClick}
                className='Button'>
                Next
              </button>
            </div>
          </div>
          <div className='rightSide'>
            <img
              className='rightSideImage'
              src={backgroundImage}
              alt='background'
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MealPlan;

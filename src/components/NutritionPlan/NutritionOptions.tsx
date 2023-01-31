import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundsix.jpeg";
import { setSelectedPlan } from "../../features/slice";
import { useDispatch } from "react-redux";
import "../../App.css";

const NutritionOptions = ({ setCurrentPage, currentPage }: any) => {
  const [selectedMealPlan, setSelectedMealPlan] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setSelectedPlan(selectedMealPlan));
    setCurrentPage(currentPage + 1);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className='pageDesign'>
        <div className='leftSide'>
          <div className='topHalf'>
            <h1 style={{ marginTop: "40px" }}>OPTIONS FOR YOU</h1>
            <p className='paraText'>
              We offer meal plan options to suit your individual needs and
              goals. The Single Meal Plan is for when you aren't sure what meal
              to eat at any given time while the Daily Meal Plan provides a
              detailed breakdown of what to eat for the day. Our options are
              tailored to your personal needs, such as your dietary preferences,
              allergies, and fitness level, to ensure that you're getting the
              optimal balance of nutrients for your body
            </p>
            <div className='buttonList'>
              <button
                onClick={() => setSelectedMealPlan("Single")}
                className={
                  selectedMealPlan === "Single"
                    ? "selectedMealPlanButton"
                    : "mealPlanButton "
                }>
                Single Meal Plan
              </button>
              <button
                onClick={() => setSelectedMealPlan("Daily")}
                className={
                  selectedMealPlan === "Daily"
                    ? "selectedMealPlanButton"
                    : "mealPlanButton "
                }>
                Daily Meal Plan
              </button>
            </div>
          </div>
          <div className='buttonGroup'>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className='Button'>
              Back
            </button>
            <button
              className='Button'
              style={{ opacity: !selectedMealPlan ? "70%" : "1" }}
              disabled={!selectedMealPlan}
              onClick={handleSubmit}>
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
  );
};

export default NutritionOptions;

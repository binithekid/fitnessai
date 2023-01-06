import { useState, useEffect } from "react";
import {
  setCurrentWeightData,
  setDesiredWeightData,
  setWeightMeasurement,
} from "../../features/slice";
import { useDispatch } from "react-redux";
import "../../App.css";
import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundtwo.jpeg";

const Weight = ({ setCurrentPage, currentPage }: any) => {
  const [measurement, setMeasurement] = useState("kg");
  const [currentWeight, setCurrentWeight] = useState<string | number>("");
  const [desiredWeight, setDesiredWeight] = useState<string | number>("");
  const [weightErrror, setWeightError] = useState(false);

  const dispatch = useDispatch();

  const weightSubmitData = () => {
    const weightRange =
      measurement === "kg"
        ? { lower: 40, upper: 199 }
        : { lower: 89, upper: 400 };
    if (
      currentWeight < weightRange.lower ||
      currentWeight > weightRange.upper
    ) {
      setWeightError(true);
      return;
    }
    if (
      (desiredWeight && desiredWeight < weightRange.lower) ||
      desiredWeight > weightRange.upper
    ) {
      setWeightError(true);
      return;
    }
    dispatch(setCurrentWeightData(currentWeight));
    dispatch(setDesiredWeightData(desiredWeight));
    dispatch(setWeightMeasurement(measurement));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (currentWeight > 16 || currentWeight < 99) {
      setWeightError(false);
    }
  }, [currentWeight]);

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
            <h1>Your Weight, Your Goals!</h1>
            <p className='paraText'>
              In order to help you achieve your fitness goals, we ask for your
              current weight and your target weight. If you don't know your
              current or desired weight just put a reasonable estimate & if
              you're not sure about what weight you wish to reach, you can leave
              that blank!
            </p>
            <div className='weightInputContainer'>
              <input
                className='weightInput'
                type='text'
                placeholder='Current Weight'
                value={currentWeight}
                onChange={(e) => setCurrentWeight(e.target.value)}></input>
              <input
                className='weightInput'
                type='text'
                placeholder='Desired Weight'
                value={desiredWeight}
                onChange={(e) => setDesiredWeight(e.target.value)}></input>
              <div className='select-dropdown' style={{ width: "4rem" }}>
                <select
                  value={measurement}
                  onChange={(e) => setMeasurement(e.target.value)}>
                  <option value='kg'>kg</option>
                  <option value='lbs'>lbs</option>
                </select>
              </div>
            </div>
            {weightErrror && (
              <p className='invalidInput'>Please enter a valid weight</p>
            )}
          </div>
          <div className='buttonGroup'>
            <button
              className='Button'
              onClick={() => setCurrentPage(currentPage - 1)}>
              Back
            </button>
            <button
              style={!currentWeight ? { opacity: "40%" } : { opacity: "100%" }}
              disabled={!currentWeight}
              className='Button'
              onClick={weightSubmitData}>
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

export default Weight;

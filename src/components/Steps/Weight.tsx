import { useState, useEffect } from "react";
import {
  setCurrentWeightData,
  setWeightMeasurement,
  setUserHeight,
} from "../../features/slice";
import { useDispatch } from "react-redux";
import "../../App.css";
import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundtwo.jpeg";

const Weight = ({ setCurrentPage, currentPage }: any) => {
  const [measurement, setMeasurement] = useState("kg");
  const [currentWeight, setCurrentWeight] = useState<string | number>("");
  const [height, setHeight] = useState("");

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

    dispatch(setCurrentWeightData(currentWeight));
    dispatch(setUserHeight(height));
    dispatch(setWeightMeasurement(measurement));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (currentWeight > 16 || currentWeight < 99) {
      setWeightError(false);
    }
  }, [currentWeight]);

  function handleHeight(event: any) {
    setHeight(event.target.value);
  }

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
              current weight and your height. If you don't know your exact
              weight or height just put a reasonable estimate!
            </p>
            <div className='weightInputContainer'>
              <div className='weightContainer'>
                <input
                  className='weightInput'
                  type='number'
                  placeholder='Current Weight'
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(e.target.value)}></input>
                <div className='select-dropdown' style={{ width: "4rem" }}>
                  <select
                    value={measurement}
                    onChange={(e) => setMeasurement(e.target.value)}>
                    <option value='kg'>kg</option>
                    <option value='lbs'>lbs</option>
                  </select>
                </div>
              </div>
              <div className='select-dropdown' style={{ width: "6rem" }}>
                <select value={height} onChange={handleHeight}>
                  <option value=''>Height</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={`5ft ${i}in`}>{`5ft ${i}in`}</option>
                  ))}
                  {Array.from({ length: 9 }, (_, i) => (
                    <option
                      key={i + 7}
                      value={`6ft ${i}in`}>{`6ft ${i}in`}</option>
                  ))}
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
              style={
                !currentWeight || !height
                  ? { opacity: "40%" }
                  : { opacity: "100%" }
              }
              disabled={!currentWeight || !height}
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

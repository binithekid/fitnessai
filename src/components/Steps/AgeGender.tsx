import { useEffect, useState } from "react";
import "../../App.css";
import { useDispatch } from "react-redux";
import { setAgeData, setGenderData } from "../../features/slice";
import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundthree.jpeg";

const AgeGender = ({ currentPage, setCurrentPage }: any) => {
  const [selectedGender, setSelectedGender] = useState("");
  const [age, setAge] = useState<string | number>("");
  const [ageError, setAgeError] = useState(false);

  const dispatch = useDispatch();

  const handlClick = () => {
    if (age < 16 || age > 99) {
      setAgeError(true);
      return;
    }
    dispatch(setAgeData(age));
    dispatch(setGenderData(selectedGender));
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (age > 16 || age < 99) {
      setAgeError(false);
    }
  }, [age]);

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
            <h1>YOUR AGE & GENDER</h1>
            <p className='paraText'>
              In order to provide the most personalized and effective fitness
              advice, we ask for your age and gender. This information allows us
              to tailor our recommendations to your specific needs and goals!
            </p>

            <div className='ageGenderContainer'>
              <div className='select-dropdown' style={{ width: "6rem" }}>
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}>
                  <option value=''>Gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <input
                className='ageInput'
                typeof='number'
                placeholder='Enter age'
                type='text'
                value={age}
                onChange={(e) => setAge(e.target.value)}></input>
            </div>
            {ageError && (
              <p className='invalidInput'>Please enter a valid age</p>
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
                !selectedGender || !age || ageError
                  ? { opacity: "40%" }
                  : { opacity: "100%" }
              }
              disabled={!selectedGender || !age || ageError}
              className='Button'
              onClick={handlClick}>
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

export default AgeGender;

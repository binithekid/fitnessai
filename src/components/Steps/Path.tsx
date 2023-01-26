import { useState } from "react";
import { setPathChoice } from "../../features/slice";
import { useDispatch } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundone.jpeg";

const Path = ({ setCurrentPage, currentPage }: any) => {
  const [selectPath, setSelectPath] = useState("");

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setPathChoice(selectPath));
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
            <h1>Let's begin!</h1>
            <p className='paraText'>
              We are here to help you achieve your health and fitness goals.
              Before we get started, we'd like to know what you hope to
              accomplish with your workouts. Are you looking to lose weight, or
              gain muscle? Please let us know so we can create a customized plan
              that's right for you.
            </p>

            <div className='select-dropdown'>
              <select
                required
                value={selectPath}
                onChange={(e) => setSelectPath(e.target.value)}>
                <option value=''>Select one</option>
                <option value='Lose Weight'>Lose Weight</option>
                <option value='Build Muscle'>Build Muscle</option>
              </select>
            </div>
          </div>
          <div className='buttonGroup'>
            <button
              className='Button'
              onClick={() => setCurrentPage(currentPage - 1)}>
              Back
            </button>
            <button
              style={!selectPath ? { opacity: "40%" } : { opacity: "100%" }}
              disabled={!selectPath}
              className='Button'
              onClick={handleClick}>
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

export default Path;

import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundone.jpeg";
import { useSelector } from "react-redux";

const Confirmation = ({ setCurrentPage, currentPage }: any) => {
  // const dataCollectState = store.getState();

  const data: any = useSelector((state: any) => state.dataCollect);

  const handleClick = () => {
    console.log(data);
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
            <h1>SO FAR SO GOOD?</h1>
            <p className='paraText'>
              Please take a moment to double-check that the personal data you
              have entered is correct. It is important that this information is
              accurate in order for us to tailor your fitness and diet plan to
              your specific needs. Once you have verified that the data is
              correct, you can proceed by hitting the submit button.
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Age:</span> {data.age}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Gender:</span>{" "}
              {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
            </p>
            <p>
              <span style={{ fontWeight: "600" }}>Current Weight:</span>{" "}
              {data.currentWeight}
              {data.weightMeasurement}
            </p>
            {data.desiredWeight && (
              <p>
                <span style={{ fontWeight: "600" }}>Desired Weight:</span>{" "}
                {data.desiredWeight}
                {data.weightMeasurement}
              </p>
            )}
            <p>
              <span style={{ fontWeight: "600" }}>You want to:</span>{" "}
              {data.pathChoice}
            </p>
          </div>
          <div className='buttonGroup'>
            <button
              className='Button'
              onClick={() => setCurrentPage(currentPage - 1)}>
              Back
            </button>
            <button className='Button' onClick={handleClick}>
              Submit
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

export default Confirmation;

import store from "../../app/store";
import { AnimatePresence, motion } from "framer-motion";

const Confirmation = ({ setCurrentPage, currentPage }: any) => {
  const dataCollectState = store.getState();

  const handlClick = () => {
    console.log(dataCollectState);
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
            <h1>CONFIRMATION</h1>
            <p className='paraText'>
              This information is used to calculate your daily calorie needs and
              to track your progress over time.
              <br /> Is this information correct? If so hit the submit button!
            </p>
            <br />
            <p>
              <b>Age:</b> {dataCollectState.dataCollect.age}
            </p>
            <p>
              <b>Gender:</b>{" "}
              {dataCollectState.dataCollect.gender.charAt(0).toUpperCase() +
                dataCollectState.dataCollect.gender.slice(1)}
            </p>
            <p>
              <b>Current Weight:</b>{" "}
              {dataCollectState.dataCollect.currentWeight}
              {dataCollectState.dataCollect.weightMeasurement}
            </p>
            {dataCollectState.dataCollect.desiredWeight && (
              <p>
                <b>Desired Weight:</b>{" "}
                {dataCollectState.dataCollect.desiredWeight}
                {dataCollectState.dataCollect.weightMeasurement}
              </p>
            )}{" "}
            <p>
              <b>You wish too:</b> {dataCollectState.dataCollect.pathChoice}
            </p>
          </div>
          <div className='buttonGroup'>
            <button
              className='Button'
              onClick={() => setCurrentPage(currentPage - 1)}>
              Back
            </button>
            <button className='Button' onClick={handlClick}>
              Submit
            </button>
          </div>
        </div>

        <div className='rightSide'></div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Confirmation;

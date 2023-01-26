import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundfour.jpeg";
import { useSelector } from "react-redux";

const Confirmation = ({ setCurrentPage, currentPage }: any) => {
  const data: any = useSelector((state: any) => state.dataCollect);

  const handleClick = () => {
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
            <h1>SO FAR SO GOOD?</h1>
            <p className='paraText'>
              Please take a moment to double-check that the personal data you
              have entered is correct. It is important that this information is
              accurate in order for us to tailor your fitness and diet plan to
              your specific needs.
            </p>
            <li className='PlanListItem'>
              <span style={{ fontWeight: "600" }}>Age:</span> {data.age}
            </li>
            <li className='PlanListItem'>
              <span style={{ fontWeight: "600" }}>Gender:</span>{" "}
              {data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
            </li>
            <li className='PlanListItem'>
              <span style={{ fontWeight: "600" }}>How Active:</span>{" "}
              {data.howActive}
            </li>
            <li className='PlanListItem'>
              <span style={{ fontWeight: "600" }}>Height:</span> {data.height}
            </li>
            <li className='PlanListItem'>
              <span style={{ fontWeight: "600" }}>Current Weight:</span>{" "}
              {data.currentWeight}
              {data.weightMeasurement}
            </li>
            <li className='PlanListItem'>
              <span style={{ fontWeight: "600" }}>You want to:</span>{" "}
              {data.pathChoice}
            </li>
          </div>
          <div className='buttonGroup'>
            <button
              className='Button'
              onClick={() => setCurrentPage(currentPage - 1)}>
              Back
            </button>
            <button className='Button' onClick={handleClick}>
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

export default Confirmation;

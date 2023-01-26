import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundfive.jpeg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const YourPlan = ({ setCurrentPage, currentPage }: any) => {
  const data: any = useSelector((state: any) => state.dataCollect);

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
            <h1>YOUR PLAN</h1>
            <p className='paraText'>
              We offer a range of services to help you develop a personalized
              plan that works for you. Our diet and calorie advice will help you
              make informed choices about what to eat and how much to eat to
              meet your goals. You can also take advantage of our calorie intake
              and calorie deficit calculator to help you track your progress. In
              addition, we have a variety of delicious and healthy recipes for
              you to try, as well as a selection of workouts to help you lose
              fat or build muscle. Let us help you on your journey to becoming
              the best version of yourself!
            </p>
            <Link to='/nutrition-plan'>
              <p>NUTRITION PLAN</p>
            </Link>
            <p>FITNESS PLAN</p>
            <p>BOTH</p>
          </div>
          <div className='buttonGroup'>
            <button
              className='Button'
              onClick={() => setCurrentPage(currentPage - 1)}>
              Back
            </button>
            <button className='Button'>Submit</button>
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

export default YourPlan;

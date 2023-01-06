import "../../App.css";
import { AnimatePresence, motion } from "framer-motion";

const GetStarted = ({ currentPage, setCurrentPage }: any) => {
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
        className='GetStarted'>
        <h1 className='headingOne'>Welcome to GetFit.ai</h1>
        <p className='getStartedText'>
          The only tool you'll need to get in the best shape of your life!
        </p>
        <button className='Button' onClick={handleClick}>
          Get Started
        </button>
      </motion.div>
    </AnimatePresence>
  );
};

export default GetStarted;

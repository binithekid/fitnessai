import "../../App.css";
import { AnimatePresence, motion } from "framer-motion";
import eggs from "../../resources/Eggs.jpeg";
import pasta from "../../resources/pasta.jpeg";
import soup from "../../resources/soup.jpeg";
import salad from "../../resources/salad.jpeg";
import Footer from "../Footer";
import { FaWeight, FaCog, FaSeedling, FaLeaf } from "react-icons/fa";

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
        <div className='GetStartedHero'>
          <p className='getStartedText'>Welcome to</p>
          <h1 className='HeroTitle'>
            <FaLeaf className='HeaderLogo' /> GetFit.ai
          </h1>
          <p className='getStartedText'>
            The only tool you'll need to get in the best shape of your life!
          </p>
          <button
            className='Button'
            onClick={handleClick}
            style={{ marginTop: "20px" }}>
            Get Started
          </button>
        </div>
        <div className='GetStartedInfo'>
          <div className='GetStartedLeft'>
            <h2 className='GetStartedSubHeader'>Eat Right, Feel Right!</h2>
            <p className='GetStartedPara'>
              It seems like the code you've provided is not properly handling
              the response from the API endpoint. The response from the endpoint
              is most likely a string containing multiple lines of text and
              bullet points, but it is being treated as a single string. Instead
              of sending the entire response text as a single string, you can
              try formatting the response text into an array of strings, where
              each string represents a line or bullet point. This way, you can
              easily loop through the array of strings to display each line or
              bullet point separately in your frontend component.
            </p>
            <button className='Button' onClick={handleClick}>
              Get Started
            </button>
          </div>
          <div className='GetStartedRight'>
            <div className='imageGridLeft'>
              <div className='MealCard'>
                <img className='RightSideImage' src={eggs} alt='eggs' />
              </div>
              <div className='MealCard'>
                <img className='RightSideImage' src={pasta} alt='pasta' />
              </div>
            </div>
            <div className='imageGridRight'>
              <div className='MealCard'>
                <img className='RightSideImage' src={soup} alt='soup' />
              </div>
              <div className='MealCard'>
                <img className='RightSideImage' src={salad} alt='salad' />
              </div>
            </div>
          </div>
        </div>
        <div className='GetStartedMidSection'>
          <h2 className='GetStartedSubHeader'>How it works</h2>
          <div className='MealContainer'>
            <div className='PlanContainer'>
              <div className='IconContainer'>
                <FaWeight className='Icon' />
              </div>
              <p className='PlanHeader'>Plans to suit your personal needs</p>
              <p className='PlanDescription'>
                It seems like the code you've provided is not properly handling
                the response from the API endpoint. The response from the
                endpoint is most likely a string containing multiple lines of
                text and bullet points,
              </p>
            </div>
            <div className='PlanContainer'>
              <div className='IconContainer'>
                <FaSeedling className='Icon' />
              </div>
              <p className='PlanHeader'>Range of meal plan durations</p>
              <p className='PlanDescription'>
                It seems like the code you've provided is not properly handling
                the response from the API endpoint. The response from the
                endpoint is most likely a string containing multiple lines of
                text and bullet points,
              </p>
            </div>
            <div className='PlanContainer'>
              <div className='IconContainer'>
                <FaCog className='Icon' />
              </div>
              <p className='PlanHeader'>Done using the latest AI technology</p>
              <p className='PlanDescription'>
                It seems like the code you've provided is not properly handling
                the response from the API endpoint. The response from the
                endpoint is most likely a string containing multiple lines of
                text and bullet points,
              </p>
            </div>
          </div>
        </div>
        {/* <div className='GetStartedContact'>
          <div className='GetStartedContactLeft'></div>
          <div className='GetStartedContactRight'>
            <h2 className='GetStartedSubHeader'>Contact us!</h2>
            <p className='GetStartedPara'>
              It seems like the code you've provided is not properly handling
              the response from the API endpoint. The response from the endpoint
              is most likely a string containing multiple lines of text element.
              But be careful as it may cause security issues.
            </p>
            <form className='ContactForm'>
              <input placeholder='Enter Name' className='ContactInput' />
              <input placeholder='Enter Email' className='ContactInput' />
              <textarea
                placeholder='Enter your message'
                className='ContactTextArea'
                rows={7}
              />
              <button className='FormButton' onClick={handleClick}>
                Submit
              </button>
            </form>
          </div>
        </div> */}
      </motion.div>
      <Footer />
    </AnimatePresence>
  );
};

export default GetStarted;

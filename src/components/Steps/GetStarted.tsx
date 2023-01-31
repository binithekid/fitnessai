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
            <FaLeaf className='HeaderLogo' /> NUTRIPLAN
          </h1>
          <p className='getStartedText'>
            Discover delicious and nutritious meal plans tailored to your needs!
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
              Unleash your inner chef and reach your health goals! Say goodbye
              to boring salads and bland chicken breasts. With just a few taps,
              our app creates a custom meal plan based on your personal details,
              such as height, weight, age, and activity level. Whether you're
              looking to lose weight, build muscle, or just want to eat
              healthier, our app has got you covered. And the best part? You can
              email your delicious plan to yourself and enjoy it anytime,
              anywhere. So, get ready to tantalize your taste buds and achieve
              your health goals like a boss!
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
          <h2 className='GetStartedMidSectionSubHeader'>How it works</h2>
          <div className='MealContainer'>
            <div className='PlanContainer'>
              <div className='IconContainer'>
                <FaWeight className='Icon' />
              </div>
              <p className='PlanHeader'>Plans to suit your personal needs</p>
              <p className='PlanDescription'>
                Nutriplan takes into account your height, weight, age, and
                activity level to create a customized meal plan that fits like a
                glove. Whether you're looking to lose weight, bulk up, or just
                eat healthier, our app creates a meal plan that's tailored just
                for you. You can save and access your plan anywhere, anytime by
                simply emailing it to yourself once the plan has been completed.
              </p>
            </div>
            <div className='PlanContainer'>
              <div className='IconContainer'>
                <FaSeedling className='Icon' />
              </div>
              <p className='PlanHeader'>Vegan? We've got you covered</p>
              <p className='PlanDescription'>
                Nutriplan takes into account your dietary restrictions,
                preferences, and lifestyle choices to create a meal plan that's
                perfect for you while also allowing you to choose from a variety
                of cuisines! You can create a single meal plan for breakfast,
                lunch, or dinner, or a daily meal plan that incorporates all
                three, along with easy-to-follow cooking instructions, you'll be
                able to enjoy a tasty and healthy meal in no time!
              </p>
            </div>
            <div className='PlanContainer'>
              <div className='IconContainer'>
                <FaCog className='Icon' />
              </div>
              <p className='PlanHeader'>Powered by the latest AI technology</p>
              <p className='PlanDescription'>
                NutriPlan is powered by OpenAI's latest AI technology to create
                a customized meal plan for you in a matter of seconds, taking
                into account your personal details, dietary restrictions, and
                cuisine preferences. Our cutting-edge AI technology generates
                your plan in a clear and concise manner, so you can easily
                follow and enjoy your delicious and nutritious meals.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </AnimatePresence>
  );
};

export default GetStarted;

import { AnimatePresence, motion } from "framer-motion";
import backgroundImage from "../../resources/backgroundfive.jpeg";
import { useDispatch, useSelector } from "react-redux";
import {
  setDailyProteinIntake,
  setDailyCalorieIntake,
} from "../../features/slice";

const PersonalOverview = ({ currentPage, setCurrentPage }: any) => {
  const data = useSelector((state: any) => state.dataCollect);

  const dispatch = useDispatch();

  function proteinIntake(weightInKg: number) {
    const weightInPounds = weightInKg * 2.205;
    const recommendedIntake = weightInPounds * 0.9;
    return Math.ceil(recommendedIntake);
  }

  function calculateCalories(weightInKg: number) {
    return Math.ceil(weightInKg * 44);
  }

  const handleClick = () => {
    if (data.pathChoice === "Build Muscle") {
      dispatch(setDailyProteinIntake(proteinIntake(data.currentWeight)));
      dispatch(setDailyCalorieIntake(calculateCalories(data.currentWeight)));
    }

    if (data.pathChoice === "Lose Weight") {
      dispatch(setDailyCalorieIntake(TDEE - 500));
    }

    setCurrentPage(currentPage + 1);
  };

  function convertToCm(ftIn: any) {
    var parts = ftIn.trim().split(" ");
    var ft = parseFloat(parts[0]);
    var inches = parseFloat(parts[1]);
    if (isNaN(ft) || isNaN(inches)) return NaN;
    return Math.ceil((ft * 12 + inches) * 2.54);
  }

  function calculateTDEE(
    weight: number,
    height: number,
    age: number,
    sex: string,
    activityLevel: string
  ) {
    let BMR;

    if (sex === "male") {
      // prettier-ignore
      BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
      // prettier-ignore
      BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }
    let PAL = 1.2; //defaults to sedentary
    switch (activityLevel) {
      case "Not Active":
        PAL = 1.2;
        break;
      case "Lightly Active":
        PAL = 1.375;
        break;
      case "Moderately Active":
        PAL = 1.55;
        break;
      case "Very Active":
        PAL = 1.725;
        break;
      case "Extra Active":
        PAL = 1.9;
        break;
      default:
        break;
    }
    return Math.ceil(BMR * PAL);
  }

  let weight = parseInt(data.currentWeight);
  let height = convertToCm(data.height); // in cm
  let age = parseInt(data.age);
  let sex = data.gender;
  let activityLevel = data.howActive;
  let TDEE = calculateTDEE(weight, height, age, sex, activityLevel);

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
            <h1>YOUR Recommended REQUIREMENTS</h1>

            {data.pathChoice === "Build Muscle" ? (
              <>
                <p className='paraText'>
                  In order to build muscle, you need to be in a{" "}
                  <b>calorie surplus</b> meaning you need to consume more
                  calories than you burn. You should focus on consuming a
                  balanced diet that is high in protein and calories. Numerous
                  studies have tried to determine the optimal amount of protein
                  for muscle gain, with{" "}
                  <b>0.8 - 1 grams of protein per pound </b>of body weight
                  seeming to be the most reasonable estimate. For you that would
                  be roughly{" "}
                  <b>
                    {proteinIntake(data.currentWeight).toFixed(0)} grams of
                    protein{" "}
                  </b>
                  per day. Additionally, you should also consume a moderate
                  amount of carbohydrates and healthy fats. Most people require
                  around <b>20 calories per pound</b> (or 44 kcal / kg) of
                  bodyweight to gain muscle mass. Try to consume around{" "}
                  <b>{calculateCalories(data.currentWeight)} calories</b> each
                  day to ensure you are getting enough energy to fuel your
                  workouts and build muscle. Make sure to get a variety of
                  nutrient-dense foods such as lean meats, eggs, dairy, fruits,
                  vegetables, whole grains, and healthy fats. Please keep in
                  mind that these nutritional recommendations are based on the
                  assumption that you are engaging in a regular weightlifting or
                  intense resistance training program, at least 4-5 times per
                  week.
                </p>
                <li className='IntakeListItem'>
                  <b>Recommended Protein Intake:</b>{" "}
                  {proteinIntake(data.currentWeight).toFixed(0)} grams
                </li>
                <li className='IntakeListItem'>
                  <b>Recommended Calorie Intake:</b>{" "}
                  {calculateCalories(data.currentWeight)} calories
                </li>
              </>
            ) : (
              <>
                <p className='paraText'>
                  Losing weight requires creating a <b>calorie deficit</b>. To
                  achieve this, you must consume fewer calories than your body
                  burns. The amount of calories you burn in a day is known as
                  your total daily energy expenditure (TDEE). Based on the
                  information provided, your TDEE has been calculated to be{" "}
                  <b>{TDEE}</b>. This calculation is based on factors such as
                  your age, sex, weight, height, and activity level. To lose
                  weight, you must consume fewer calories than your TDEE. A safe
                  and sustainable rate of weight loss is usually considered to
                  be around <b>0.5-1 kg (1-2 pounds) per week.</b> This would
                  require a calorie deficit of around<b> 500-1000 calories</b>{" "}
                  per day. It is crucial to keep in mind that these are general
                  recommendations and what may be effective for one individual,
                  may not be for another. In order to achieve your weight loss
                  goals, it is vital that you find a sustainable approach that
                  works for you through experimentation as well as the
                  implementation of a consistent exercise routine.
                </p>
                <li className='IntakeListItem'>
                  <b>Your current TDEE: </b> {TDEE} calories
                </li>
                <li className='IntakeListItem'>
                  <b>Recommended Calorie Intake to lose weight:</b> {TDEE - 500}{" "}
                  calories
                </li>
              </>
            )}
          </div>
          <div className='buttonGroup'>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              className='Button'>
              Back
            </button>
            <button onClick={handleClick} className='Button'>
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

export default PersonalOverview;

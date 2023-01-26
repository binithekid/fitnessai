import "./MealPlanOptions.css";
import { AnimatePresence, motion } from "framer-motion";

const SingleOption = ({
  selectedMeal,
  setSelctedMeal,
  preferredCusines,
  setPreferedCusines,
  setOther,
  other,
  dietaryRestrictions,
  setDietaryRestrictions,
}: any) => {
  const handleOtherChange = (event: any) => {
    setOther(event.target.value);
  };

  return (
    <>
      <div className='singleOptionCOntainer'>
        <p className='paraText'>
          You selected the <b>Single Meal Plan!</b>
        </p>
        <p className='paraText'>
          To help us personalize your nutrition plan, can you please let us know
          if you have any dietary restrictions or preferences such as being
          vegan or having any food allergies.
        </p>
        <form className='nutrionalPreferencesForm'>
          <div className='select-dropdown' style={{ width: "12rem" }}>
            <select
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}>
              <option value=''>None</option>
              <option value='vegan'>Vegan</option>
              <option value='vegetarian'>Vegetarian</option>
              <option value='pescatarian'>Pescatarian</option>
              <option value='lactose intolerant'>Lactose Intolerance</option>
              <option value='allergic to peanuts'>Peanut Allergy</option>
              <option value='other'>Other</option>
            </select>
          </div>
          {dietaryRestrictions === "other" && (
            <AnimatePresence>
              {" "}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{ marginTop: "1rem" }}>
                <p
                  style={{
                    width: "80%",
                    fontSize: "12px",
                    marginTop: "-10px",
                  }}>
                  If you are allergic to something that is not on the list
                  please only enter what you are allergic to. For example if you
                  are allergic to eggs, simply enter "eggs" into the space below{" "}
                </p>
                <input
                  style={{ padding: "6px" }}
                  className='weightInput'
                  type='text'
                  value={other}
                  onChange={handleOtherChange}
                  placeholder='Enter here'
                />
              </motion.div>
            </AnimatePresence>
          )}
        </form>
        <p className='selectPlan'>Do you want a plan for:</p>
        <div className='select-dropdown' style={{ width: "8rem" }}>
          <select
            value={selectedMeal}
            onChange={(e) => setSelctedMeal(e.target.value)}>
            <option value=''>Select Meal</option>
            <option value='breakfast'>Breakfast</option>
            <option value='lunch'>Lunch</option>
            <option value='dinner'>Dinner</option>
          </select>
        </div>
      </div>
      {selectedMeal === "lunch" || selectedMeal === "dinner" ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className='singleOptionCOntainer'>
            <p className='selectPlan'>
              Do you have any cusines you prefer to have for this meal:
            </p>
            <div className='select-dropdown' style={{ width: "10rem" }}>
              <select
                value={preferredCusines}
                onChange={(e) => setPreferedCusines(e.target.value)}>
                <option value=''>Select Cuisine</option>
                <option value='no preference'>No preference</option>
                <option value='Italian'>Italian</option>
                <option value='Thai'>Thai</option>
                <option value='Indian'>Indian</option>
                <option value='Chinese'>Chinese</option>
                <option value='Mexican'>Mexican</option>
                <option value='Mediterranean'>Mediterranean</option>
                <option value='Middle Eastern'>Middle Eastern</option>
              </select>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </>
  );
};

export default SingleOption;

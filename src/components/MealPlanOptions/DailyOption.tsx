import "./MealPlanOptions.css";
import { AnimatePresence, motion } from "framer-motion";

const SingleOption = ({
  setOther,
  other,
  dietaryRestrictions,
  setDietaryRestrictions,
}: any) => {
  const handleOtherChange = (event: any) => {
    setOther(event.target.value);
  };

  return (
    <AnimatePresence>
      <div className='singleOptionCOntainer'>
        <p className='paraText'>
          You selected the <b>Daily Meal Plan!</b>
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
                <p style={{ width: "80%", fontSize: "12px" }}>
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
      </div>
    </AnimatePresence>
  );
};

export default SingleOption;

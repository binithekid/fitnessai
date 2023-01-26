import { useState } from "react";
import Weight from "./Steps/Weight";
import AgeGender from "./Steps/AgeGender";
import Path from "./Steps/Path";
import Confirmation from "./Steps/Confirmation";
import GetStarted from "./Steps/GetStarted";
import PersonalOverview from "./NutritionPlan/PersonalOverview";
import NutritionOptions from "./NutritionPlan/NutritionOptions";
import MealPlan from "./NutritionPlan/MealPlan";
import MealPlanOutput from "./MealPlanOutput/MealPlanOutput";

const UserInfo = () => {
  const [currentPage, setCurrentPage] = useState(1);

  switch (currentPage) {
    case 1:
      return (
        <GetStarted setCurrentPage={setCurrentPage} currentPage={currentPage} />
      );

    case 2:
      return <Path setCurrentPage={setCurrentPage} currentPage={currentPage} />;

    case 3:
      return (
        <AgeGender setCurrentPage={setCurrentPage} currentPage={currentPage} />
      );

    case 4:
      return (
        <Weight setCurrentPage={setCurrentPage} currentPage={currentPage} />
      );

    case 5:
      return (
        <Confirmation
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      );

    case 6:
      return (
        <PersonalOverview
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      );

    case 7:
      return (
        <NutritionOptions
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      );

    case 8:
      return (
        <MealPlan currentPage={currentPage} setCurrentPage={setCurrentPage} />
      );

    case 9:
      return <MealPlanOutput />;

    default:
      return null;
  }
};

export default UserInfo;

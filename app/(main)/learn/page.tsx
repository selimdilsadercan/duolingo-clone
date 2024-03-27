import FeedWrapper from "@/components/learn/FeedWrapper";
import Navbar from "@/components/learn/Navbar";
import Promo from "@/components/learn/Promo";
import { Quests } from "@/components/learn/Quests";
import StickyWrapper from "@/components/learn/StickyWrapper";
import UserProgress from "@/components/learn/UserProgress";
import { redirect } from "next/navigation";

async function Page() {
  // const userProgressData = getUserProgress();
  // const courseProgressData = getCourseProgress();
  // const lessonPercentageData = getLessonPercentage();
  // const unitsData = getUnits();
  // const userSubscriptionData = getUserSubscription();

  // const [userProgress, units, courseProgress, lessonPercentage, userSubscription] = await Promise.all([
  //   userProgressData,
  //   unitsData,
  //   courseProgressData,
  //   lessonPercentageData,
  //   userSubscriptionData
  // ]);

  // if (!userProgress || !userProgress.activeCourse) {
  //   redirect("/courses");
  // }

  // if (!courseProgress) {
  //   redirect("/courses");
  // }

  // const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress /*activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={isPro}*/ />
        {/* {!isPro && <Promo />} */}
        <Quests /*points={userProgress.points}*/ />
      </StickyWrapper>
      <FeedWrapper>
        <Navbar /*title={userProgress.activeCourse.title}*/ />
        {/* {units.map((unit) => (
          <div key={unit.id} className="mb-10">
            <Unit
              id={unit.id}
              order={unit.order}
              description={unit.description}
              title={unit.title}
              lessons={unit.lessons}
              activeLesson={
                courseProgress.activeLesson as
                  | (typeof lessons.$inferSelect & {
                      unit: typeof unitsSchema.$inferSelect;
                    })
                  | undefined
              }
              activeLessonPercentage={lessonPercentage}
            />
          </div>
        ))} */}
      </FeedWrapper>
    </div>
  );
}

export default Page;

import { getUserProgress, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import FeedWrapper from "@/components/learn/FeedWrapper";
import Promo from "@/components/learn/Promo";
import StickyWrapper from "@/components/learn/StickyWrapper";
import Image from "next/image";
import UserProgress from "@/components/learn/UserProgress";
import Quests from "@/components/learn/Quests";
import Items from "@/components/shop/Items";

async function Page() {
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [userProgress, userSubscription] = await Promise.all([userProgressData, userSubscriptionData]);
  if (!userProgress || !userProgress.activeCourse) redirect("/courses");

  const isPro = !!userSubscription?.isActive;

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress activeCourse={userProgress.activeCourse} hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={isPro} />
        {!isPro && <Promo />}
        <Quests points={userProgress.points} />
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image src="/shop.svg" alt="Shop" height={90} width={90} />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6">Shop</h1>
          <p className="text-muted-foreground text-center text-lg mb-6">Spend your points on cool stuff.</p>
          <Items hearts={userProgress.hearts} points={userProgress.points} hasActiveSubscription={isPro} />
        </div>
      </FeedWrapper>
    </div>
  );
}

export default Page;

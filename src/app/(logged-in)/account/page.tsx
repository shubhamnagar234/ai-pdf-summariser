import { redirect } from "next/navigation";
import { verifySession } from "@/lib/auth";
import { db } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import BgGradient from "@/components/common/bg-gradient";
import {
  MotionDiv,
  MotionH1,
  MotionP,
} from "@/components/common/motion-wrapper";
import { itemVariants } from "@/utils/constants";
import { AccountForms } from "@/components/account/account-forms";

export default async function AccountPage() {
  const session = await verifySession();
  if (!session.isAuth || !session.userId) {
    return redirect("/sign-in");
  }

  const userResult = await db
    .select()
    .from(users)
    .where(eq(users.id, session.userId));
  const user = userResult[0];

  if (!user) {
    return redirect("/sign-in");
  }

  return (
    <main className="max-w-7xl mx-auto">
      <BgGradient />
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto flex flex-col gap-4"
      >
        <div className="px-4 py-12 sm:py-24">
          <div className="flex flex-col gap-2 mb-12 text-center lg:text-left">
            <MotionH1
              variants={itemVariants as any}
              initial="hidden"
              whileInView="visible"
              className="text-4xl font-bold tracking-tight bg-linear-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent"
            >
              Account Settings
            </MotionH1>
            <MotionP
              variants={itemVariants as any}
              initial="hidden"
              whileInView="visible"
              className="text-gray-600"
            >
              Manage your profile and security preferences
            </MotionP>
          </div>

          <AccountForms user={{ fullName: user.fullName, email: user.email }} />
        </div>
      </MotionDiv>
    </main>
  );
}

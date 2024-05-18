"use client";

import GithubBasicInfo from "@/components/GithubBasicInfo";
import LinkedinBasicInfo from "@/components/LinkedinBasicInfo";
import DevCard from "@/components/cards/dev/DevCard";
import { DevCardEnum } from "@/lib/types/devCardEnum";
import Settings from "@/components/Settings";
import GitlabBasicInfo from "@/components/GitlabBasicInfo";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main>
      <div className="space-y-10 py-4 px-8">
        <Settings />
        <GithubBasicInfo />
        <LinkedinBasicInfo />
        <GitlabBasicInfo />
        <Separator />
        <DevCard
          cardType={DevCardEnum.AllInOneCard}
          githubUsername={"MathPow"}
          gitlabUsername={"MathPow"}
          linkednUsername={"MathPow"}
        />
      </div>
    </main>
  );
}

import { getUnit, getUserSubscription } from "@/db/queries";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type GuidebookPageProps = {
  params: {
    unitId: string;
  };
};

const GuidebookPage = async ({ params }: GuidebookPageProps) => {
  const unitId = parseInt(params.unitId);

  if (isNaN(unitId)) {
    redirect("/learn");
  }

  const [unit, userSubscriptionData] = await Promise.all([
    getUnit(unitId),
    getUserSubscription(),
  ]);

  if (!unit) {
    redirect("/learn");
  }

  const isPro = !!userSubscriptionData?.isActive;

  // Render markdown safely or use standard HTML.
  // For simplicity since we don't have a markdown parser yet, we'll split by newlines
  // and handle basic formatting like ## and # for headers.
  const renderText = (text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.startsWith("# ")) {
        return <h1 key={i} className="text-3xl font-bold mt-6 mb-4 text-neutral-800">{line.replace("# ", "")}</h1>;
      }
      if (line.startsWith("## ")) {
        return <h2 key={i} className="text-2xl font-bold mt-6 mb-3 text-neutral-700">{line.replace("## ", "")}</h2>;
      }
      if (line.startsWith("### ")) {
        return <h3 key={i} className="text-xl font-bold mt-4 mb-2 text-neutral-600">{line.replace("### ", "")}</h3>;
      }
      if (line.trim() === "") {
        return <br key={i} />;
      }
      return <p key={i} className="text-lg text-neutral-600 mb-2 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="flex flex-col h-full w-full max-w-[900px] mx-auto px-6 py-6 pb-[150px]">
      <div className="flex items-center justify-between mb-8">
        <Link href="/learn">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Map
          </Button>
        </Link>
        <div className="text-neutral-500 font-bold">
          Unit {unit.order} Guidebook
        </div>
      </div>

      <div className="bg-white rounded-2xl border-2 border-neutral-200 p-8 lg:p-12 shadow-sm">
        {unit.guidebookText ? (
          renderText(unit.guidebookText)
        ) : (
          <div className="text-center text-neutral-500 py-20 text-xl font-bold">
            No guidebook available for this unit yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default GuidebookPage;

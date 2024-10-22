import { cn } from "@/lib/utils";
function EmptyList({
  heading = "NA",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <div className={cn("text-xl", className)}>{heading}</div>;
}

export default EmptyList;

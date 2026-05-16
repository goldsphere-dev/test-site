import Link from "next/link";

interface ConditionCardProps {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ConditionCard({
  id,
  icon,
  title,
  description,
}: ConditionCardProps) {
  return (
    <Link
      href={`/conditions#${id}`}
      className="group bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-brand-red/30 transition-all flex flex-col gap-3 items-center text-center"
    >
      <div className="w-16 h-16 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <h3 className="font-semibold text-charcoal group-hover:text-brand-red transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-dark leading-relaxed">{description}</p>
    </Link>
  );
}

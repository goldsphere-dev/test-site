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
      className="group bg-white rounded-2xl border border-border p-6 hover:shadow-lg hover:border-brand-red/30 transition-all flex flex-col gap-3"
    >
      <div className="w-10 h-10 rounded-full bg-red-light flex items-center justify-center text-brand-red shrink-0">
        {icon}
      </div>
      <h3 className="font-semibold text-charcoal group-hover:text-brand-red transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-dark leading-relaxed">{description}</p>
    </Link>
  );
}

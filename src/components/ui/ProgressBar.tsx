import { cn } from '@/lib/utils';

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
  label?: string;
}

export default function ProgressBar({ value, max, className, barClassName, showLabel = false, label }: ProgressBarProps) {
  const pct = Math.min((value / max) * 100, 100);

  return (
    <div className={cn('w-full', className)}>
      {showLabel && (
        <div className="flex justify-between text-xs mb-1.5">
          <span className="text-muted-foreground font-medium">{label}</span>
          <span className="text-foreground font-semibold">{value} / {max}</span>
        </div>
      )}
      <div className="h-2.5 rounded-full bg-muted overflow-hidden">
        <div
          className={cn('h-full rounded-full bg-primary transition-all duration-700 ease-out', barClassName)}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}


import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ActivityItemProps {
  icon: ReactNode;
  title: string;
  timestamp: string;
  description?: string;
  className?: string;
}

export function ActivityItem({
  icon,
  title,
  timestamp,
  description,
  className,
}: ActivityItemProps) {
  return (
    <div className={cn("activity-item", className)}>
      <div className="flex-shrink-0 rounded-full p-2 bg-primary/5 text-primary">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium">{title}</div>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="text-xs text-muted-foreground">{timestamp}</span>
          {description && (
            <>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground line-clamp-1">
                {description}
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

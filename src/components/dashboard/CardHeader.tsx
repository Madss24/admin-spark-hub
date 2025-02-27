
import { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  action?: ReactNode;
}

export function CardHeader({ 
  title, 
  description, 
  action, 
  className, 
  ...props 
}: CardHeaderProps) {
  return (
    <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
      <div className="flex items-center justify-between">
        <h3 className="font-semibold leading-none tracking-tight">{title}</h3>
        {action && <div>{action}</div>}
      </div>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

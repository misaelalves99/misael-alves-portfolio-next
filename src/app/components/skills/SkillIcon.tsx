// app/components/skills/SkillIcon.tsx

import { ComponentType } from "react";

interface SkillIconProps {
  icon: ComponentType<{ className?: string }>;
  label: string;
  className?: string;
  iconClassName?: string;
}

export default function SkillIcon({ icon: Icon, label, className, iconClassName }: SkillIconProps) {
  return (
    <div className={className} title={label}>
      <Icon className={iconClassName} />
    </div>
  );
}

import { Home, Truck, DollarSign, Shield, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavModule {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

const modules: NavModule[] = [
  { id: "daily", label: "DAILY LIFE", icon: Home, color: "text-blue-400" },
  { id: "transport", label: "TRANSPORT", icon: Truck, color: "text-transport" },
  { id: "financial", label: "FINANCIAL", icon: DollarSign, color: "text-financial" },
  { id: "security", label: "SECURITY", icon: Shield, color: "text-security" },
];

export function NavigationDock() {
  return (
    <aside className="w-32 bg-navigation flex flex-col items-center py-8 gap-6">
      {modules.map((module) => {
        const Icon = module.icon;
        return (
          <button
            key={module.id}
            className="flex flex-col items-center gap-2 px-4 py-6 w-full hover:bg-white/10 transition-colors group"
          >
            <Icon className={cn("w-10 h-10", module.color, "group-hover:scale-110 transition-transform")} />
            <span className="text-white text-xs font-semibold tracking-wide text-center leading-tight">
              {module.label}
            </span>
          </button>
        );
      })}

      <div className="flex-1" />

      <button className="w-full px-4 py-6 bg-emergency hover:bg-red-600 transition-all animate-pulse-slow flex flex-col items-center gap-2 group">
        <AlertTriangle className="w-12 h-12 text-white group-hover:scale-110 transition-transform" />
        <span className="text-white text-sm font-bold tracking-wider">
          EMERGENCY
        </span>
      </button>
    </aside>
  );
}
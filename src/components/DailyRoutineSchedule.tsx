"use client";

import { useState, useEffect } from "react";
import { Clock, Check, Circle, Sun, Cloud, Moon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const translations = {
  en: {
    title: "My Daily Schedule",
    morning: "Morning",
    afternoon: "Afternoon",
    evening: "Evening",
    night: "Night",
    currentActivity: "Now",
    nextActivity: "Next",
    completedActivities: "Completed",
    markDone: "Done",
    reset: "Reset Day",
  },
  id: {
    title: "Jadwal Harian Saya",
    morning: "Pagi",
    afternoon: "Siang",
    evening: "Sore",
    night: "Malam",
    currentActivity: "Sekarang",
    nextActivity: "Selanjutnya",
    completedActivities: "Selesai",
    markDone: "Selesai",
    reset: "Atur Ulang Hari",
  },
};

interface RoutineActivity {
  id: string;
  timeStart: string;
  timeEnd: string;
  labelEn: string;
  labelId: string;
  photo: string;
  period: "morning" | "afternoon" | "evening" | "night";
  completed: boolean;
}

interface DailyRoutineScheduleProps {
  language: "en" | "id";
  onClose: () => void;
}

export function DailyRoutineSchedule({ language, onClose }: DailyRoutineScheduleProps) {
  const t = translations[language];
  const [activities, setActivities] = useState<RoutineActivity[]>([
    { id: "1", timeStart: "06:00", timeEnd: "06:30", labelEn: "Wake Up & Get Dressed", labelId: "Bangun & Berpakaian", photo: "/generated/sleep-rest.png", period: "morning", completed: false },
    { id: "2", timeStart: "06:30", timeEnd: "07:00", labelEn: "Shower & Brush Teeth", labelId: "Mandi & Sikat Gigi", photo: "/generated/shower-bath.png", period: "morning", completed: false },
    { id: "3", timeStart: "07:00", timeEnd: "07:30", labelEn: "Breakfast", labelId: "Sarapan", photo: "/generated/food-meal.png", period: "morning", completed: false },
    { id: "4", timeStart: "08:00", timeEnd: "10:00", labelEn: "Morning Study Time", labelId: "Waktu Belajar Pagi", photo: "/generated/food-meal.png", period: "morning", completed: false },
    { id: "5", timeStart: "10:00", timeEnd: "10:30", labelEn: "Snack Break", labelId: "Istirahat Camilan", photo: "/generated/food-meal.png", period: "morning", completed: false },
    { id: "6", timeStart: "10:30", timeEnd: "12:00", labelEn: "Activities & Play", labelId: "Aktivitas & Bermain", photo: "/generated/food-meal.png", period: "morning", completed: false },
    { id: "7", timeStart: "12:00", timeEnd: "12:30", labelEn: "Lunch", labelId: "Makan Siang", photo: "/generated/food-meal.png", period: "afternoon", completed: false },
    { id: "8", timeStart: "12:30", timeEnd: "14:00", labelEn: "Rest Time", labelId: "Waktu Istirahat", photo: "/generated/sleep-rest.png", period: "afternoon", completed: false },
    { id: "9", timeStart: "14:00", timeEnd: "16:00", labelEn: "Afternoon Learning", labelId: "Belajar Siang", photo: "/generated/food-meal.png", period: "afternoon", completed: false },
    { id: "10", timeStart: "16:00", timeEnd: "16:30", labelEn: "Snack Time", labelId: "Waktu Camilan", photo: "/generated/food-meal.png", period: "afternoon", completed: false },
    { id: "11", timeStart: "16:30", timeEnd: "18:00", labelEn: "Free Time & Play", labelId: "Waktu Bebas & Bermain", photo: "/generated/food-meal.png", period: "evening", completed: false },
    { id: "12", timeStart: "18:00", timeEnd: "18:30", labelEn: "Dinner", labelId: "Makan Malam", photo: "/generated/food-meal.png", period: "evening", completed: false },
    { id: "13", timeStart: "18:30", timeEnd: "19:30", labelEn: "Evening Activities", labelId: "Aktivitas Malam", photo: "/generated/food-meal.png", period: "evening", completed: false },
    { id: "14", timeStart: "19:30", timeEnd: "20:00", labelEn: "Shower & Get Ready for Bed", labelId: "Mandi & Siap Tidur", photo: "/generated/shower-bath.png", period: "night", completed: false },
    { id: "15", timeStart: "20:00", timeEnd: "06:00", labelEn: "Bedtime & Sleep", labelId: "Waktu Tidur", photo: "/generated/sleep-rest.png", period: "night", completed: false },
  ]);

  const [currentPeriod, setCurrentPeriod] = useState<"morning" | "afternoon" | "evening" | "night">("morning");

  useEffect(() => {
    const updatePeriod = () => {
      const hour = new Date().getHours();
      if (hour >= 6 && hour < 12) setCurrentPeriod("morning");
      else if (hour >= 12 && hour < 17) setCurrentPeriod("afternoon");
      else if (hour >= 17 && hour < 20) setCurrentPeriod("evening");
      else setCurrentPeriod("night");
    };

    updatePeriod();
    const interval = setInterval(updatePeriod, 60000);
    return () => clearInterval(interval);
  }, []);

  const getCurrentActivity = () => {
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`;
    return activities.find(
      (activity) => !activity.completed && currentTime >= activity.timeStart && currentTime < activity.timeEnd
    );
  };

  const getNextActivity = () => {
    const current = getCurrentActivity();
    if (!current) return activities.find((a) => !a.completed);
    const currentIndex = activities.findIndex((a) => a.id === current.id);
    return activities.slice(currentIndex + 1).find((a) => !a.completed);
  };

  const markActivityDone = (id: string) => {
    setActivities((prev) => prev.map((activity) => (activity.id === id ? { ...activity, completed: true } : activity)));
  };

  const resetDay = () => {
    setActivities((prev) => prev.map((activity) => ({ ...activity, completed: false })));
  };

  const getPeriodColor = (period: string) => {
    switch (period) {
      case "morning": return { bg: "bg-yellow-100", border: "border-yellow-400", text: "text-yellow-700", icon: Sun };
      case "afternoon": return { bg: "bg-orange-100", border: "border-orange-400", text: "text-orange-700", icon: Cloud };
      case "evening": return { bg: "bg-purple-100", border: "border-purple-400", text: "text-purple-700", icon: Moon };
      case "night": return { bg: "bg-blue-900", border: "border-blue-700", text: "text-blue-200", icon: Star };
      default: return { bg: "bg-gray-100", border: "border-gray-400", text: "text-gray-700", icon: Clock };
    }
  };

  const currentActivity = getCurrentActivity();
  const nextActivity = getNextActivity();
  const completedCount = activities.filter((a) => a.completed).length;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-navigation to-blue-800 px-8 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Clock className="w-10 h-10 text-white" />
            <div>
              <h2 className="text-3xl font-bold text-white font-heading">{t.title}</h2>
              <p className="text-blue-200 text-sm mt-1">
                {t.completedActivities}: {completedCount} / {activities.length}
              </p>
            </div>
          </div>
          <Button onClick={onClose} variant="ghost" className="text-white hover:bg-white/20 text-2xl font-bold px-6 py-3">
            ✕
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto p-8">
          {/* Current & Next Activity Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {currentActivity && (
              <div className={`${getPeriodColor(currentActivity.period).bg} ${getPeriodColor(currentActivity.period).border} border-4 rounded-xl p-6 shadow-lg`}>
                <Badge className="mb-3 text-lg px-4 py-2" style={{ backgroundColor: "#25D366" }}>
                  🟢 {t.currentActivity}
                </Badge>
                <div className="flex items-center gap-4">
                  <img src={currentActivity.photo} alt={currentActivity.labelEn} className="w-24 h-24 rounded-lg object-cover border-4 border-white shadow-md" />
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${getPeriodColor(currentActivity.period).text} mb-2`}>
                      {language === "en" ? currentActivity.labelEn : currentActivity.labelId}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600">{currentActivity.timeStart} - {currentActivity.timeEnd}</p>
                    <Button onClick={() => markActivityDone(currentActivity.id)} className="mt-3 bg-green-600 hover:bg-green-700 text-white font-bold">
                      <Check className="w-5 h-5 mr-2" /> {t.markDone}
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {nextActivity && (
              <div className={`${getPeriodColor(nextActivity.period).bg} ${getPeriodColor(nextActivity.period).border} border-4 rounded-xl p-6 shadow-lg opacity-80`}>
                <Badge className="mb-3 text-lg px-4 py-2 bg-blue-600">
                  ⏭️ {t.nextActivity}
                </Badge>
                <div className="flex items-center gap-4">
                  <img src={nextActivity.photo} alt={nextActivity.labelEn} className="w-24 h-24 rounded-lg object-cover border-4 border-white shadow-md" />
                  <div className="flex-1">
                    <h3 className={`text-2xl font-bold ${getPeriodColor(nextActivity.period).text} mb-2`}>
                      {language === "en" ? nextActivity.labelEn : nextActivity.labelId}
                    </h3>
                    <p className="text-lg font-semibold text-gray-600">{nextActivity.timeStart} - {nextActivity.timeEnd}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Full Schedule by Period */}
          <div className="space-y-6">
            {["morning", "afternoon", "evening", "night"].map((period) => {
              const periodActivities = activities.filter((a) => a.period === period);
              const periodStyle = getPeriodColor(period);
              const PeriodIcon = periodStyle.icon;
              const isCurrentPeriod = period === currentPeriod;

              return (
                <div key={period} className={`${periodStyle.bg} ${isCurrentPeriod ? `${periodStyle.border} border-4` : "border-2 border-gray-200"} rounded-xl p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <PeriodIcon className={`w-8 h-8 ${periodStyle.text}`} />
                    <h3 className={`text-2xl font-bold ${periodStyle.text}`}>
                      {t[period as keyof typeof t]}
                    </h3>
                    {isCurrentPeriod && (
                      <Badge className="bg-green-500 text-white text-sm px-3 py-1">
                        {t.currentActivity}
                      </Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {periodActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className={`bg-white rounded-lg p-4 shadow-md border-2 ${activity.completed ? "border-green-500 opacity-50" : "border-gray-200"} transition-all`}
                      >
                        <div className="flex items-center gap-3 mb-3">
                          {activity.completed ? (
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                              <Check className="w-6 h-6 text-white" />
                            </div>
                          ) : (
                            <img src={activity.photo} alt={activity.labelEn} className="w-12 h-12 rounded-lg object-cover border-2 border-gray-300" />
                          )}
                          <div className="flex-1">
                            <p className="text-xs font-bold text-gray-500">{activity.timeStart}</p>
                            <h4 className={`text-sm font-bold ${activity.completed ? "line-through text-gray-400" : "text-gray-800"}`}>
                              {language === "en" ? activity.labelEn : activity.labelId}
                            </h4>
                          </div>
                        </div>
                        {!activity.completed && (
                          <Button onClick={() => markActivityDone(activity.id)} size="sm" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                            <Check className="w-4 h-4 mr-1" /> {t.markDone}
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <Button onClick={resetDay} variant="outline" className="text-lg px-8 py-4 font-bold border-2 border-gray-300 hover:bg-gray-100">
              🔄 {t.reset}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
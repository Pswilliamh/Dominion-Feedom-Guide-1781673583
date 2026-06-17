"use client";

import { UtensilsCrossed, Droplet, Apple, Shirt, User2, Footprints, Car, Truck, MapPin, Shield, DollarSign, Home } from "lucide-react";

const categories = [
  {
    id: 1,
    title: "NOURISHMENT",
    items: [
      { icon: UtensilsCrossed, label: "Meals", message: "I need a meal" },
      { icon: Droplet, label: "Water", message: "I need water" },
      { icon: Apple, label: "Snacks", message: "I need a snack" },
    ],
  },
  {
    id: 2,
    title: "WARDROBE",
    items: [
      { icon: Shirt, label: "Shirts", message: "I need a shirt" },
      { icon: User2, label: "Pants", message: "I need pants" },
      { icon: Footprints, label: "Shoes", message: "I need shoes" },
    ],
  },
  {
    id: 3,
    title: "TRANSPORT",
    items: [
      { icon: Car, label: "Car", message: "I need car transport" },
      { icon: Truck, label: "Truck", message: "I need truck transport" },
      { icon: MapPin, label: "Location", message: "I need location assistance" },
    ],
  },
  {
    id: 4,
    title: "SECURITY",
    items: [
      { icon: Shield, label: "Protection", message: "I need security protection" },
      { icon: Shield, label: "Safety", message: "I need safety assistance" },
      { icon: Shield, label: "Alert", message: "Security alert needed" },
    ],
  },
  {
    id: 5,
    title: "FINANCIAL",
    items: [
      { icon: DollarSign, label: "Payment", message: "I need to make a payment" },
      { icon: DollarSign, label: "Budget", message: "I need budget assistance" },
      { icon: DollarSign, label: "Account", message: "I need account information" },
    ],
  },
  {
    id: 6,
    title: "DAILY LIFE",
    items: [
      { icon: Home, label: "Home", message: "I need home assistance" },
      { icon: Home, label: "Schedule", message: "I need schedule help" },
      { icon: Home, label: "Tasks", message: "I need task assistance" },
    ],
  },
];

interface CommandMatrixProps {
  onCardClick?: (message: string) => void;
}

export function CommandMatrix({ onCardClick }: CommandMatrixProps) {
  const handleItemClick = (message: string) => {
    if (onCardClick) {
      onCardClick(message);
    }
  };

  return (
    <main className="flex-1 p-8 bg-background overflow-auto">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-full">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg border-2 border-card-glow/30 shadow-lg shadow-card-glow/20 hover:border-card-glow/60 hover:shadow-card-glow/40 transition-all duration-300 flex flex-col p-6 group"
          >
            <h3 className="text-xl font-bold text-foreground mb-4 text-center font-heading">
              {category.title}
            </h3>
            <div className="flex-1 flex flex-col gap-3">
              {category.items.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => handleItemClick(item.message)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-semibold text-foreground/80">
                      {item.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
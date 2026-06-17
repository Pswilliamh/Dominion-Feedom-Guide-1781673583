import { Layers } from "lucide-react";

const placeholderCards = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `CATEGORY ${i + 1}`,
}));

export function CommandMatrix() {
  return (
    <main className="flex-1 p-8 bg-background">
      <div className="grid grid-cols-3 grid-rows-2 gap-6 h-full">
        {placeholderCards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg border-2 border-card-glow/30 shadow-lg shadow-card-glow/20 hover:border-card-glow/60 hover:shadow-card-glow/40 transition-all duration-300 flex flex-col items-center justify-center p-8 cursor-pointer group"
          >
            <Layers className="w-16 h-16 text-muted-foreground/40 mb-4 group-hover:text-accent group-hover:scale-110 transition-all" />
            <div className="text-center">
              <p className="text-xs text-muted-foreground/60 uppercase tracking-widest mb-2">
                [CATEGORY CONTENT PLACEHOLDER]
              </p>
              <h3 className="text-2xl font-bold text-foreground">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
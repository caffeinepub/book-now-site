import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const currentYear = new Date().getFullYear();
  const hostname = encodeURIComponent(window.location.hostname);
  const telegramUrl = "https://t.me/got3850";

  return (
    <div className="min-h-screen bg-background font-sans flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-xs">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-extrabold text-navy">
            Delhi NCR Male escort Services
          </a>
          <div className="flex gap-3">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-bold px-5 py-2 text-sm rounded-lg"
            >
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                Book Now
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="font-bold px-5 py-2 text-sm rounded-lg"
            >
              <a href={telegramUrl} target="_blank" rel="noopener noreferrer">
                Enquire
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full"
        >
          <Card className="shadow-card border-0">
            <CardContent className="p-10">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <img
                  src="/assets/uploads/Screenshot-2026-03-17-at-8.14.08-PM-1.png"
                  alt="Male Escort Delhi NCR"
                  className="w-full md:w-64 lg:w-80 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex flex-col">
                  <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
                    Find your love partner
                  </h1>
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    we don&apos;t want you to live a lonely or bored life that
                    lacks excitement, encouragement, and love. We have
                    shortlisted some of the best men so you can choose a Male
                    Escort In Delhi &amp; NCR. Also, we have simplified the
                    escort service. We won&apos;t ask you to create your profile
                    or share your details. We respect your peace and privacy.
                    Male escort is a discreet service for women who want to
                    spice up their love life.
                  </p>
                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-3 text-base rounded-lg"
                    >
                      <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="font-bold px-8 py-3 text-base rounded-lg"
                    >
                      <a
                        href={telegramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enquire
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>

      {/* Footer */}
      <footer
        className="text-white"
        style={{ background: "oklch(0.155 0.03 265.4)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 text-center">
          <p className="text-xl font-extrabold text-white mb-2">
            Delhi NCR App Services
          </p>
          <p className="text-[oklch(0.62_0.015_265)] text-sm mb-6">
            Your trusted platform for seamless bookings and scheduling.
          </p>
          <p className="text-xs text-[oklch(0.62_0.015_265)]">
            &copy; {currentYear}. Built with{" "}
            <Heart className="inline w-3 h-3 text-orange-cta" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              className="hover:text-white transition-colors underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

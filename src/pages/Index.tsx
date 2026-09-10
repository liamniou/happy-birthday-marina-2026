import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ticket1 from "@/assets/ticket-1.png";
import ticket2 from "@/assets/ticket-2.png";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const flapRotate = useTransform(scrollYProgress, [0.1, 0.4], [0, 180]);
  const flapZ = useTransform(scrollYProgress, [0.1, 0.25, 0.26, 0.4], [10, 10, -1, -1]);

  const ticket1Y = useTransform(scrollYProgress, [0.35, 0.75], [0, -340]);
  const ticket2Y = useTransform(scrollYProgress, [0.35, 0.75], [0, -300]);
  const ticket1Rotate = useTransform(scrollYProgress, [0.35, 0.75], [0, -4]);
  const ticket2Rotate = useTransform(scrollYProgress, [0.35, 0.75], [0, 6]);
  const ticketOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const ticket1X = useTransform(scrollYProgress, [0.35, 0.75], [0, -20]);
  const ticket2X = useTransform(scrollYProgress, [0.35, 0.75], [0, 60]);

  const envelopeScale = useTransform(scrollYProgress, [0, 0.1], [0.9, 1]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const calendarOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const calendarY = useTransform(scrollYProgress, [0.75, 0.9], [20, 0]);

  return (
    <div ref={containerRef} className="h-[400vh] bg-envelope-bg">
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.p
          className="text-envelope-text/60 tracking-[0.3em] uppercase text-sm mb-12 font-serif"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
        >
          Happy Birthday 🎉🎂
        </motion.p>

        <motion.div className="relative" style={{ scale: envelopeScale }}>
          <div className="relative w-[340px] md:w-[440px] h-[220px] md:h-[280px]">

            {/* Back wall */}
            <div className="absolute inset-0 bg-envelope-inner rounded-t-md z-[1]" />

            {/* Tickets — overflow is visible so they can rise above the envelope */}
            <div className="absolute inset-0 z-[2]">
              <motion.div
                className="absolute bottom-4 left-1/2 -translate-x-1/2"
                style={{ opacity: ticketOpacity }}
              >
                <div className="relative w-[260px] md:w-[320px] h-[160px] md:h-[200px]">
                  <motion.img
                    src={ticket1}
                    alt="Placebo 30th Anniversary Tour ticket"
                    className="absolute top-0 left-0 w-[260px] md:w-[320px] rounded-sm shadow-envelope"
                    style={{ y: ticket1Y, rotate: ticket1Rotate, x: ticket1X }}
                  />
                  <motion.img
                    src={ticket2}
                    alt="Placebo 30th Anniversary Tour ticket"
                    className="absolute top-0 left-0 w-[260px] md:w-[320px] rounded-sm shadow-envelope"
                    style={{ y: ticket2Y, rotate: ticket2Rotate, x: ticket2X }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Side flaps */}
            <div className="absolute top-0 left-0 right-0 h-full z-[5]">
              <svg viewBox="0 0 440 280" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,0 L0,280 L220,160 Z" className="fill-envelope" opacity="0.6" />
                <path d="M440,0 L440,280 L220,160 Z" className="fill-envelope" opacity="0.6" />
              </svg>
            </div>

            {/* Front fold — covers bottom portion of tickets */}
            <div className="absolute bottom-0 left-0 right-0 h-[65%] z-[6]">
              <svg viewBox="0 0 440 182" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,0 L220,120 L440,0 L440,182 L0,182 Z" className="fill-envelope" />
                <path d="M0,0 L220,120 L440,0" className="fill-none stroke-envelope-fold" strokeWidth="1" />
              </svg>
            </div>

            {/* Flap */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-[65%] origin-top"
              style={{ rotateX: flapRotate, zIndex: flapZ }}
            >
              <svg viewBox="0 0 440 182" className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="flapGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(340 85% 72%)" />
                    <stop offset="100%" stopColor="hsl(340 82% 66%)" />
                  </linearGradient>
                </defs>
                <path d="M0,0 L440,0 L220,170 Z" fill="url(#flapGrad)" />
                <path d="M0,0 L220,170 L440,0" className="fill-none stroke-envelope-fold" strokeWidth="1" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.a
          href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Placebo%20%E2%80%93%2030th%20Anniversary%20Tour&dates=20261020T193000/20261020T223000&ctz=Europe/Stockholm&location=Annexet%2C%20Arenaslingan%2014%2C%2012177%20Stockholm&details=Placebo%2030th%20Anniversary%20Tour%20%E2%80%94%20Annexet%2C%20Arenaslingan%2014%2C%2012177%20Stockholm"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-envelope-text/10 text-envelope-text/80 font-serif text-sm tracking-wide hover:bg-envelope-text/20 transition-colors cursor-pointer"
          style={{ opacity: calendarOpacity, y: calendarY }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Add to Calendar
        </motion.a>

        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2 text-envelope-text/40"
          style={{ opacity: arrowOpacity }}
        >
          <span className="text-xs tracking-widest uppercase font-serif">Scroll</span>
          <motion.svg
            width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;

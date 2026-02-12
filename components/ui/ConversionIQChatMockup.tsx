"use client";

import { useState, useEffect, useCallback } from "react";

const SCENES = [
  {
    id: "webchat",
    label: "Web-Chat",
    messages: [
      {
        sender: "visitor",
        name: "Marcus",
        text: "Looking for a 5-night beach getaway in March for two",
      },
      {
        sender: "agent",
        name: "Conversion Agent",
        text: "Perfect — I found 3 options. Here's your top match:",
        link: { label: "Oceanview Suite · Mar 12–17", sub: "$1,890 · Breakfast Included" },
      },
      {
        sender: "visitor",
        name: "Marcus",
        text: "Yes, book it",
      },
    ],
    status: { icon: "check", text: "Booked · $1,890", color: "#10B981" },
  },
  {
    id: "sms",
    label: "SMS",
    messages: [
      {
        sender: "agent",
        name: "Conversion Agent",
        text: "Hey Sarah — you left Ray-Bans in your cart. Still interested?",
      },
      {
        sender: "visitor",
        name: "Sarah",
        text: "Was worried about the fit",
      },
      {
        sender: "agent",
        name: "Conversion Agent",
        text: "Totally fair — they come with free returns. Link to checkout:",
        link: { label: "Complete Order", sub: "Ray-Ban Aviators · $187" },
      },
    ],
    status: { icon: "cart", text: "Recovered · $187", color: "#E8345A" },
  },
  {
    id: "social",
    label: "Social",
    messages: [
      {
        sender: "visitor",
        name: "Jessica",
        badge: "IG Comment",
        text: "Omg this looks amazing! How much?",
      },
      {
        sender: "agent",
        name: "Conversion Agent",
        text: "Thanks Jessica! The Starter Package is $299/mo.",
      },
      {
        sender: "agent",
        name: "Conversion Agent",
        text: "Based on your team size, I'd recommend Pro. Want a demo?",
      },
    ],
    status: { icon: "calendar", text: "Demo Booked", color: "#6B4DE6" },
  },
  {
    id: "dotti",
    label: "Dotti",
    messages: [
      {
        sender: "system",
        name: "Dotti DeepLink",
        text: "Visitor identified: $1.2M net worth · Scottsdale, AZ",
      },
      {
        sender: "agent",
        name: "Conversion Agent",
        text: "Welcome back, David. Found a listing with a private golf course.",
        link: { label: "View Property · $875K", sub: "Scottsdale · Private Course" },
      },
      {
        sender: "visitor",
        name: "David",
        text: "Schedule a tour this Saturday",
      },
    ],
    status: { icon: "pin", text: "Tour Booked · Sat 10 AM", color: "#D97706" },
  },
];

/* ── Icons ── */
const IQLogo = () => (
  <svg width="18" height="14" viewBox="0 0 84 66" fill="none">
    <path d="M16.3 64.1H11C3.3 64.1 0 63.5 0 53.5V0.9H5.2C12.9 0.9 16.3 1.5 16.3 11.5V64.1Z" fill="white"/>
    <path d="M64.1 32.6C64.1 39.9 62.9 45.2 60.8 47.8C58.4 50.7 53.4 51.3 49.6 51.3C45.8 51.3 40.8 50.7 38.4 47.8C37.4 46.6 36.7 44.9 36.1 42.6C39.9 60 55.1 64.6 67.5 61.1C75.9 56 80.1 46.5 80.1 32.6C80.1 11 69.8 0 49.6 0C42.4 0 36.4 1.4 31.7 4.2C44.1 0.7 59.3 5.3 63.1 22.7C63.8 25.4 64.1 28.8 64.1 32.6H64.1Z" fill="white"/>
    <path d="M19.1 32.6C19.1 54.3 29.4 65.3 49.6 65.3C56.9 65.3 62.8 63.9 67.5 61.1C55.1 64.6 39.9 60 36.1 42.6C35.5 39.9 35.1 36.5 35.1 32.6C35.1 25.4 36.3 20 38.4 17.5C40.8 14.6 45.8 14 49.6 14C53.4 14 58.4 14.6 60.8 17.5C61.8 18.7 62.6 20.4 63.1 22.7C59.3 5.3 44.1 0.7 31.7 4.2C23.4 9.3 19.1 18.8 19.1 32.6Z" fill="white"/>
  </svg>
);

const FingerPrintIcon = () => (
  <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
    <path d="M7 2C4.2 2 2 4.2 2 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 7C12 4.2 9.8 2 7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M7 4.5C5.6 4.5 4.5 5.6 4.5 7V9" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9.5 7V10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 7V12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const CheckIcon = () => <svg width="20" height="20" viewBox="0 0 14 14" fill="none"><path d="M3 7L6 10L11 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const CartIcon = () => <svg width="20" height="20" viewBox="0 0 14 14" fill="none"><path d="M1 1H3L3.6 4M3.6 4L4.8 9H11L12.5 4H3.6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="5.5" cy="11.5" r="1" fill="currentColor"/><circle cx="10" cy="11.5" r="1" fill="currentColor"/></svg>;
const CalendarIcon = () => <svg width="20" height="20" viewBox="0 0 14 14" fill="none"><rect x="1.5" y="2.5" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="2"/><line x1="1.5" y1="5.5" x2="12.5" y2="5.5" stroke="currentColor" strokeWidth="2"/><line x1="4.5" y1="1" x2="4.5" y2="3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="9.5" y1="1" x2="9.5" y2="3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
const PinIcon = () => <svg width="20" height="20" viewBox="0 0 14 14" fill="none"><path d="M7 1C4.5 1 2.5 3 2.5 5.5C2.5 8.5 7 13 7 13C7 13 11.5 8.5 11.5 5.5C11.5 3 9.5 1 7 1Z" stroke="currentColor" strokeWidth="2"/><circle cx="7" cy="5.5" r="1.5" stroke="currentColor" strokeWidth="2"/></svg>;

const statusIcons: Record<string, React.FC> = { check: CheckIcon, cart: CartIcon, calendar: CalendarIcon, pin: PinIcon };

function VisitorAvatar({ name }: { name: string }) {
  const initial = name.replace("@", "").charAt(0).toUpperCase();
  return (
    <div style={{
      width: 28, height: 28, borderRadius: "50%",
      background: "rgba(255,255,255,0.2)",
      border: "1px solid rgba(255,255,255,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontSize: 14, fontWeight: 700, color: "#fff",
      flexShrink: 0,
    }}>
      {initial}
    </div>
  );
}

function AgentAvatar() {
  return (
    <div style={{
      width: 28, height: 28, borderRadius: "50%",
      background: "linear-gradient(135deg, rgba(77,70,195,0.8), rgba(21,193,255,0.6))",
      border: "1px solid rgba(255,255,255,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <IQLogo />
    </div>
  );
}

function SystemAvatar() {
  return (
    <div style={{
      width: 28, height: 28, borderRadius: 6,
      background: "rgba(217,119,6,0.6)",
      border: "1px solid rgba(255,255,255,0.3)",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
    }}>
      <FingerPrintIcon />
    </div>
  );
}

interface ConversionIQChatMockupProps {
  onSceneChange?: (sceneId: string) => void;
  onVideoEnd?: () => void;
}

export default function ConversionIQChatMockup({ onSceneChange, onVideoEnd }: ConversionIQChatMockupProps) {
  const [activeScene, setActiveScene] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(0);
  const [showStatus, setShowStatus] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const scene = SCENES[activeScene];

  const animateScene = useCallback(() => {
    setIsTransitioning(false);
    setVisibleMessages(0);
    setShowStatus(false);
    
    const msgCount = SCENES[activeScene].messages.length;
    
    // Animate sequence
    setTimeout(() => setVisibleMessages(1), 300);
    
    if (msgCount > 1) {
      setTimeout(() => setVisibleMessages(2), 2500); // Wait for reading
    }
    if (msgCount > 2) {
      setTimeout(() => setVisibleMessages(3), 4800);
    }
    
    setTimeout(() => setShowStatus(true), 4800 + 800);
    
  }, [activeScene]);

  useEffect(() => {
    animateScene();
  }, [animateScene]);

  useEffect(() => {
    // Notify parent of scene change
    if (onSceneChange) {
      onSceneChange(SCENES[activeScene].id);
    }
  }, [activeScene, onSceneChange]);

  useEffect(() => {
    // If onVideoEnd is provided, let video control the timing
    // Otherwise, use the 8-second timer
    if (!onVideoEnd) {
      const totalDuration = 8000;
      const timer = setTimeout(() => {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveScene((p) => (p + 1) % SCENES.length);
        }, 400); 
      }, totalDuration);
      return () => clearTimeout(timer);
    }
  }, [activeScene, onVideoEnd]);

  // Expose function to advance scene (called by video onEnded)
  useEffect(() => {
    if (onVideoEnd) {
      // Store the advance function in a way that video can call it
      (window as any).__advanceChatScene = () => {
        setIsTransitioning(true);
        setTimeout(() => {
          setActiveScene((p) => (p + 1) % SCENES.length);
        }, 400);
      };
    }
    return () => {
      delete (window as any).__advanceChatScene;
    };
  }, [onVideoEnd]);

  const handleTabClick = (index: number) => {
    if (index === activeScene) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveScene(index);
      if (onSceneChange) {
        onSceneChange(SCENES[index].id);
      }
    }, 300);
  };

  const StatusIcon = statusIcons[scene.status.icon] || CheckIcon;

  return (
    <div style={{
      // Reduced Height (~Half of before)
      width: 440, 
      height: 360, 
      fontFamily: "inherit",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      
      {/* ── Tabs (Fixed Top) ── */}
      <div style={{ flexShrink: 0, zIndex: 10 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          {SCENES.map((s, i) => (
            <button key={s.id} onClick={() => handleTabClick(i)} style={{
              flex: 1, padding: "8px 0", fontSize: 12, fontWeight: 700,
              letterSpacing: "0.05em", textTransform: "uppercase",
              border: i === activeScene ? "1px solid rgba(255,255,255,0.5)" : "1px solid transparent",
              cursor: "pointer", borderRadius: 8,
              transition: "all 0.2s ease",
              background: i === activeScene ? "rgba(20, 20, 35, 0.35)" : "rgba(20, 20, 35, 0.15)",
              color: i === activeScene ? "#fff" : "rgba(255,255,255,0.5)",
              backdropFilter: "blur(10px)",
              // Active tab shadow for visibility
              boxShadow: i === activeScene ? "0 4px 12px rgba(0,0,0,0.1)" : "none"
            }}>
              {s.label}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          {SCENES.map((_, i) => (
            <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
              {i === activeScene && <div style={{ height: "100%", background: "#fff", animation: "ciqProgressFill 8s linear forwards" }} />}
              {i < activeScene && <div style={{ height: "100%", width: "100%", background: "rgba(255,255,255,0.5)" }} />}
            </div>
          ))}
        </div>
      </div>

      {/* ── Messages Area ── */}
      <div style={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 12,
        paddingBottom: 20,
        maxHeight: 340,
        overflow: "hidden",
        // The Fade/Tuck Effect: 
        // Transparent at top (0%) -> Visible starting at 15% -> Fully visible at bottom
        maskImage: "linear-gradient(to bottom, transparent 0%, transparent 5%, black 40%, black 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, transparent 5%, black 40%, black 100%)",
        
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning ? "scale(0.98)" : "scale(1)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}>
        {scene.messages.map((msg, i) => {
          const isVisible = i < visibleMessages;
          const isAgent = msg.sender === "agent";
          const isSystem = msg.sender === "system";
          const isVisitor = msg.sender === "visitor";

          return (
            <div key={`${scene.id}-${i}`} style={{
              alignSelf: isVisitor ? "flex-end" : "flex-start",
              maxWidth: isSystem ? "100%" : "90%",
              // Smoother "Push" Animation
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(60px)",
              maxHeight: isVisible ? 500 : 0, 
              // Using a longer duration and eased bezier for the "float up" feel
              transition: "opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.2, 0.9, 0.3, 1), max-height 0.5s cubic-bezier(0.2, 0.9, 0.3, 1)",
            }}>
              
              <div style={{
                background: isSystem
                  ? "rgba(15, 15, 25, 0.25)"
                  : "rgba(20, 20, 35, 0.30)",
                backdropFilter: "blur(40px)",
                WebkitBackdropFilter: "blur(40px)",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                borderRadius: 20, padding: "20px 24px",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  {isAgent && <AgentAvatar />}
                  {isSystem && <SystemAvatar />}
                  {isVisitor && <VisitorAvatar name={msg.name} />}
                  <span style={{ fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: "0.02em" }}>{msg.name}</span>
                  {(msg as any).badge && (
                    <span style={{ fontSize: 10, fontWeight: 800, color: "rgba(255,255,255,0.9)", background: "rgba(255,255,255,0.15)", padding: "2px 8px", borderRadius: 4, textTransform: "uppercase" }}>{(msg as any).badge}</span>
                  )}
                </div>
                <div style={{ fontSize: 20, lineHeight: 1.35, color: "#FFFFFF", fontWeight: 500, textShadow: "0 2px 10px rgba(0,0,0,0.1)" }}>
                  {msg.text}
                </div>
                {(msg as any).link && (
                  <div style={{ marginTop: 14, background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 14, padding: "14px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div><div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 4 }}>{(msg as any).link.label}</div><div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{(msg as any).link.sub}</div></div>
                    <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4L10 8L6 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {/* Status Pill (Floating Bottom Left) */}
        <div style={{
           alignSelf: "flex-start",
           marginBottom: 0, // Float right at bottom
           opacity: showStatus && !isTransitioning ? 1 : 0,
           transform: showStatus && !isTransitioning ? "translateY(0)" : "translateY(20px)",
           transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
           height: showStatus ? "auto" : 0,
           overflow: "hidden" // Prevent jump during height anim
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "rgba(20, 20, 35, 0.30)", 
            backdropFilter: "blur(40px)",
            WebkitBackdropFilter: "blur(40px)",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 16, padding: "12px 20px",
            boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
          }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: scene.status.color, display: "flex", alignItems: "center", justifyContent: "center", color: "white" }}>
              <StatusIcon />
            </div>
            <div>
              <div style={{ fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.5)", marginBottom: 2 }}>Result</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#fff" }}>{scene.status.text}</div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes ciqProgressFill { from { width: 0%; } to { width: 100%; } }
      `}</style>
    </div>
  );
}

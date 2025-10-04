"use client";
import { useState, useEffect, useRef } from "react";
import { FiX } from "react-icons/fi";
import Lottie from "lottie-react";
import chatAnimation from "@/animations/Live-chatbot.json";

export default function AnimatedChatBot() {
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [messages, setMessages] = useState<
    { from: "bot" | "user" | "company"; text: string }[]
  >([{ from: "bot", text: "Hello! How can I help you today?" }]);
  const [input, setInput] = useState("");
  const [hasSentFirstAutoReply, setHasSentFirstAutoReply] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    // Add user's message
    setMessages((prev) => [...prev, { from: "user", text: trimmed }]);
    setInput("");

    // First time user sends a message -> bot sends one automated thank-you reply
    if (!hasSentFirstAutoReply) {
      setHasSentFirstAutoReply(true);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Thanks for your message! We'll get back to you soon.",
          },
        ]);
      }, 800);
      return;
    }
    // For subsequent messages, simulate a company reply
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "company",
          text: "Thanks — our team has received your message and will respond shortly.",
        },
      ]);
    }, 900);
  };

  useEffect(() => {
    // Scroll chat to bottom on new messages or open
    if (!open) return;
    const el = scrollRef.current;
    if (el) {
      setTimeout(() => {
        el.scrollTop = el.scrollHeight;
      }, 50);
    }

    // Close chat on Escape key or click outside
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      // chatContainerRef should be attached to chatbox div
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKey);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [messages, open]);

  if (dismissed) return null;

  return (
    <div
      ref={chatContainerRef}
      className="fixed bottom-26 right-6 z-50 flex flex-col items-end"
    >
      {open && (
        <div className="w-96 max-w-[90vw] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-orange-200">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-gray-100 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 rounded-full w-9 h-9 flex items-center justify-center text-xl">
                💬
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Chat with us</span>
                <span className="text-xs opacity-80">
                  We&apos;re here to help — typically replies within 24h
                </span>
              </div>
            </div>
            <button onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX className="text-lg" />
            </button>
          </div>
          <div
            ref={scrollRef}
            className="flex-1 p-4 overflow-y-auto bg-orange-100 flex flex-col gap-3 max-h-[40vh] overscroll-contain touch-pan-y"
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg max-w-[78%] break-words whitespace-pre-wrap shadow-sm ${
                  msg.from === "bot"
                    ? "bg-orange-200 self-start text-gray-900"
                    : msg.from === "company"
                    ? "bg-orange-100 self-start border border-orange-100 text-gray-800"
                    : "bg-orange-500 self-end text-gray-100"
                }`}
                style={{
                  alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 flex gap-2 border-t border-orange-200 bg-orange-100">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border-2 rounded-lg px-3 py-2  border-orange-500 text-gray-800 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {!open && (
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-5 bg-orange-500 blur-xl opacity-30 animate-pulse rounded-full"></div>

          <div className="flex items-center">
            {/* Lottie button wrapped in a relative container so the dismiss X can overlay it */}
            <div className="relative">
              <button
                onClick={() => setOpen(true)}
                className="bg-transparent text-white p-4 rounded-full transition z-10"
                aria-label="Open chat"
              >
                <Lottie
                  animationData={chatAnimation}
                  loop
                  autoplay
                  className="w-20 h-20"
                />
              </button>

              {/* Overlay dismiss button at top-right of the animated bot */}
              <button
                onClick={() => setDismissed(true)}
                className="absolute -top-2 -right-2 bg-gray-100 rounded-full p-1 shadow-lg text-gray-900 hover:bg-gray-200 z-20"
                aria-label="Dismiss chat"
                title="Hide chat"
              >
                <FiX className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

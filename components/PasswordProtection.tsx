"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PasswordProtectionProps {
  children: React.ReactNode;
}

export default function PasswordProtection({ children }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const auth = localStorage.getItem("multilocal-auth");
    if (auth === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password.toLowerCase() === "multilocal") {
      localStorage.setItem("multilocal-auth", "true");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      setPassword("");
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/hero-bg.png"
        alt="Background"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Password Form */}
      <div className="relative z-10 w-full max-w-md px-6">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Multilocal</h1>
            <p className="text-white/70 text-sm">Enter access code to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError(false);
                }}
                placeholder="Enter access code"
                className={`w-full px-4 py-3 bg-white/10 border ${
                  error ? "border-red-400" : "border-white/20"
                } rounded-lg text-white caret-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors`}
                autoFocus
              />
              {error && (
                <p className="mt-2 text-sm text-red-400">
                  Invalid access code. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors"
            >
              Access Site
            </button>
          </form>

          <p className="text-center text-white/50 text-xs mt-6">
            For investor access only
          </p>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="fixed inset-0 w-screen h-screen flex justify-center items-center z-50 font-sans rtl p-4 loader-overlay-gradient">
      <div className="flex flex-col items-center text-center max-w-sm w-full">
        
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex justify-center items-center mb-6 sm:mb-7">
          <div className="absolute w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-transparent outer-ring-anim"></div>
          <div className="absolute w-14 h-14 sm:w-20 sm:h-20 rounded-full border-2 border-transparent middle-ring-anim"></div>
          <div className="w-8 h-8 sm:w-12 sm:h-12 flex justify-center items-center icon-core-glow">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path d="M50 0 L63 37 L100 50 L63 63 L50 100 L37 63 L0 50 L37 37 Z" fill="url(#goldGradient)" />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE082" />
                  <stop offset="50%" stopColor="#FFB300" />
                  <stop offset="100%" stopColor="#B58900" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div className="mb-5 sm:mb-6">
          <h2 className="text-white text-xl sm:text-2xl font-bold tracking-wide m-0 mb-1 sm:mb-2 loader-title-shadow">
            سایت درحال توسعه می باشد
          </h2>
          <div className="text-xs sm:text-sm m-0 font-light loader-subtitle-container loader-subtitle-color">
            <span className="typewriter-text">لطفاً شکیبا باشید</span>
            <span className="animated-dots">
              <span className="dot-1">.</span>
              <span className="dot-2">.</span>
              <span className="dot-3">.</span>
            </span>
          </div>
        </div>

        <div className="w-32 sm:w-40 h-0.5 sm:h-1 bg-white/5 rounded-full overflow-hidden relative">
          <div className="absolute top-0 h-full w-3/5 rounded-full progress-bar-gradient progress-bar-shift"></div>
        </div>

      </div>
    </div>
  );
}

export default App;

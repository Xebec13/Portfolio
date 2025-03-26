import React, { useEffect, useRef } from 'react';
import './sakurapetals.css';


const SakuraPetals = ({ petalImage, petalCount = 30 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const petalPlayers = [];

    function animatePetals() {
      const petals = containerRef.current.querySelectorAll('.petal');

      for (let i = 0, len = petals.length; i < len; ++i) {
        const petal = petals[i];
        petal.innerHTML = `<div class="rotate"><img src="${petalImage}" class="askew"></div>`;
        const scale = Math.random() * 0.8 + 0.2;

        const player = petal.animate([
          { transform: `translate3d(${(i / len) * 100}vw,0,0) scale(${scale})`, opacity: scale },
          { transform: `translate3d(${(i / len) * 100 + 10}vw,150vh,0) scale(${scale})`, opacity: 1 }
        ], {
          duration: Math.random() * 90000 + 3000,
          iterations: Infinity,
          delay: -(Math.random() * 5000)
        });

        petalPlayers.push(player);
      }
    }

    animatePetals();
  }, [petalImage]);

  return (
    <div id="petals-container" ref={containerRef}>
      {Array.from({ length: petalCount }).map((_, index) => (
        <div key={index} className="petal"></div>
      ))}
    </div>
  );
};

export default SakuraPetals;
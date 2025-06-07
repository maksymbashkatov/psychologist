'use client';

import { useEffect, useState, TouchEvent } from 'react';
import styles from './diploms.module.css';

const diploms = [
  {
    id: 1,
    src: '/diploms/1.webp'
  },
  {
    id: 2,
    src: '/diploms/2.webp'
  },
  {
    id: 3,
    src: '/diploms/3.webp'
  },
  {
    id: 4,
    src: '/diploms/4.webp'
  },
];

export default function Diploms() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [screenWidth, setScreenWidth] = useState(NaN);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [dragX, setDragX] = useState(0);
  const minSwipeDistance = 50;

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, [])

  const handleCircleClick = (index: number) => {
    setActiveIndex(index);
  };

  const calculateTransform = () => {
    let containerWidth;
    let gap;
    if (screenWidth > 1319) {
      containerWidth = 900;
      gap = 100;
    } else if (screenWidth > 540) {
      containerWidth = 800;
      gap = 80;
    } else {
      containerWidth = screenWidth;
      gap = 0;
    }
    const offset = containerWidth + gap;
    return `translateX(calc(${(2.5 - activeIndex) * offset}px))`;
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setDragX(0);
  };
  
  const onTouchMove = (e: TouchEvent) => {
    const currentX = e.touches[0].clientX;
    setTouchEndX(currentX);

    if (touchStartX !== null) {
      let deltaX = currentX - touchStartX;

      if ((activeIndex === 1 && deltaX > 0) || (activeIndex === 4 && deltaX < 0)) {
        deltaX = 0;
      }

      setDragX(deltaX);
    }
  };
  
  const onTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const delta = touchStartX - touchEndX;

    if (delta > minSwipeDistance && activeIndex < 4) {
      setActiveIndex(activeIndex + 1);
    }

    if (delta < -minSwipeDistance && activeIndex > 1) {
      setActiveIndex(activeIndex - 1);
    }

    setTouchStartX(null);
    setTouchEndX(null);
    setDragX(0);
  };
  
  return <section className={`${styles.diploms} section`}>
    <div
      className={`${styles.diplomsContainer} ${dragX !== 0 ? styles.noTransition : ''}`}
      style={{
        transform: `${calculateTransform()} translateX(${dragX}px)`
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {
        diploms.map((d) => <img
          key={d.id}
          src={d.src}
          className={`
            ${styles.diplom}
            ${activeIndex === d.id ? styles.activeDiplom : styles.inactiveDiplom}
          `}
          style={{
            width: `${screenWidth < 541 ? screenWidth : ''}px`
          }}
        >
        </img>)
      }
    </div>
    <div className={styles.circlesContainer}>
    {
      [1, 2, 3, 4].map((index) => <div
        key={index}
        className={
          `${styles.circle} ${activeIndex === index ? styles.activeCircle : ''}`
        }
        onClick={() => handleCircleClick(index)}
      ></div>)
    }
  </div>
</section>
}
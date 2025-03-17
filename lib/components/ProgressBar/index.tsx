'use client';
import { ProgressBarStyles } from './styles';
import { useState, useEffect, useRef } from 'react';

export default function ProgressBar() {
  const classes = ProgressBarStyles();
  const [position, setPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);
  

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };
  

  const handleDrag = (e: any) => {
    if (!isDragging || !progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    let newPosition;
    
    
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    
 
    newPosition = (clientX - rect.left) / rect.width;
    
  
    newPosition = Math.max(0, Math.min(1, newPosition));
    
    setPosition(newPosition);
  };
  
 
  const handleBarClick = (e: React.MouseEvent | React.TouchEvent) => {
    if (!progressBarRef.current) return;
    
    const rect = progressBarRef.current.getBoundingClientRect();
    

    const clientX = 'touches' in e && e.touches && e.touches.length > 0 
      ? e.touches[0].clientX 
      : 'clientX' in e 
        ? e.clientX 
        : 0;
    
    const newPosition = (clientX - rect.left) / rect.width;
    const clampedPosition = Math.max(0, Math.min(1, newPosition));
    
    setPosition(clampedPosition);
  };
  

  const handleDragEnd = () => {
    setIsDragging(false);
  };
  
 
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleDrag);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleDrag);
      document.addEventListener('touchend', handleDragEnd);
    }
    
    return () => {
      document.removeEventListener('mousemove', handleDrag);
      document.removeEventListener('mouseup', handleDragEnd);
      document.removeEventListener('touchmove', handleDrag);
      document.removeEventListener('touchend', handleDragEnd);
    };
  }, [isDragging]);
  
 
  const formatTime = (percentage: number) => {
  
    const totalSeconds = 180 * percentage;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.floor(totalSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };
  
  return (

   <div className={classes.container}>
        


        <div 
        ref={progressBarRef}
        onClick={handleBarClick}
        onTouchStart={handleBarClick}
        >
        <div 
            className={classes.progress}
            style={{
                '--progress-width': `${position * 100}%`,
            } as React.CSSProperties}
            >
            <div 
            className={classes.dot}
            style={{
                left: `${position * 100}%`
                }}
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                >
            </div>
        </div>
        </div>
        <div className={classes.time}>
        
        </div>
    </div>
  )
}
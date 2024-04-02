// Whiteboard.tsx
import React, { useRef, useEffect } from 'react';
import { fabric } from 'fabric';

const Whiteboard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new fabric.Canvas(canvasRef.current, {
      isDrawingMode: true,
    });

    return () => {
      canvas.dispose(); // Clean up Fabric.js canvas on component unmount
    };
  }, []);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <canvas ref={canvasRef} className="border border-dark" />
        </div>
      </div>
    </div>
  );
};

export default Whiteboard;

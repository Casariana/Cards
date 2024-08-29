import React, { useRef, useEffect } from 'react';

const CanvasComponent = ({color, fondo }) => {
  // Crear una referencia para el canvas
  const canvasRef = useRef(null);

  useEffect(() => {
    // Obtener el contexto 2D del canvas
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Dibujar algo en el canvas
    context.fillStyle = fondo;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = color;
    context.beginPath();
    context.arc(150, 150, 60, 0, Math.PI * 2);
    context.fill();
  }, []); // El array vacío asegura que esto se ejecute solo una vez, después del primer render

  return (
    <canvas
      ref={canvasRef}
      width={300}
      height={300}
      style={{ border: '1px solid black' }}
    />
  );
};

export default CanvasComponent;
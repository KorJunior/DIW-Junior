window.onload = function () {
    const canvas = document.getElementById('myCanvas');
  

    try {
      TagCanvas.Start('myCanvas', 'tags', {
        reverse: true,
        depth: 0.8,
        imageMode: 'image',
        initial: [0.1, 0.1],
        minSpeed: 0.0,
        maxSpeed: 0.05,
        wheelZoom: false,
        shape: 'sphere',
        zoomMin: 1.0,
        zoomMax: 1.0,
        tooltip: 'native',
        activeCursor: 'default',
        outlineColour: 'rgba(0, 0, 0, 0)',
        
      });
  
    } catch (e) {
      console.error("Error al inicializar TagCanvas:", e);
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
  
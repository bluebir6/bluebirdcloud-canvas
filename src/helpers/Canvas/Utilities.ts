const CanvasUtilities = {
  resize: (canvasFabric: fabric.Canvas) => {
    window.addEventListener("resize", () => {
      console.log(canvasFabric);
      canvasFabric.setHeight(window.innerHeight);
      canvasFabric.setWidth(window.innerWidth);
      canvasFabric.calcOffset();
      canvasFabric.requestRenderAll();
    });
    window.dispatchEvent(new Event("resize"));
  }
};

export default CanvasUtilities as typeof CanvasUtilities;

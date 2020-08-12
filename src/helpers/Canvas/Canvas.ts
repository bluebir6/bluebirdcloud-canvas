import { fabric } from "fabric";
import CanvasUtilities from "./Utilities";
import CanvasPanZoomHandler from "./PanZoom";
import CanvasDrawingPensProvider from "./Pens";
import SocketTransmitProvider from "./Transmit";

class Canvas {
  canvasElOrigin: object;
  canvasFabric: fabric.Canvas;
  panZoomHandler: CanvasPanZoomHandler;
  constructor(canvasEl: object) {
    this.canvasElOrigin = canvasEl;
    this.canvasFabric = new fabric.Canvas(
      this.canvasElOrigin as HTMLCanvasElement,
      {
        enablePointerEvents: true,
        isDrawingMode: true,
        selection: false
      }
    );
    CanvasUtilities.resize(this.canvasFabric);
    this.panZoomHandler = new CanvasPanZoomHandler(this.canvasFabric);
    new CanvasDrawingPensProvider(this.canvasFabric);
    new SocketTransmitProvider(this.canvasFabric);
    setInterval(() => {
      try {
        document.getElementById(
          "webpack-dev-server-client-overlay"
        )!.style.display = "none";
      } catch (error) {
        error = null;
      }
    }, 100);
  }
}

export default Canvas;

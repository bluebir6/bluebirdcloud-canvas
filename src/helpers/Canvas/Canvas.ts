import { fabric } from "fabric";
import CanvasUtilities from "./Utilities";
import CanvasPanZoomHandler from "./PanZoom";
import CanvasDrawingPensProvider from "./Pens";
import SocketTransmitProvider from "./Transmit";

class Canvas {
  canvasElOrigin: object; canvasFabric: any; panZoomHandler: CanvasPanZoomHandler; constructor(canvasEl: object) {
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
  }
}

export default Canvas;

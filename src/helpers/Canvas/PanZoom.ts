/* tslint:disable */
import { fabric } from "fabric";
const panzoom = require("pan-zoom");
class CanvasPanZoomHandler {
  canvasFabric: any;
  touchZoomFingerAverage = {
    x: 0,
    y: 0
  };
  touchZoomFingerLastAverage = {
    x: 0,
    y: 0
  };
  unpanzoom: unknown;
  constructor(canvasFabric: fabric.Canvas) {
    this.canvasFabric = canvasFabric;
    const upperCanvasEl = (this.canvasFabric
      .upperCanvasEl as unknown) as HTMLCanvasElement;
    this.unpanzoom = panzoom(upperCanvasEl, (event: any) => {
      if (event.dx == 0 && event.dy == 0) {
        this.canvasFabric.isDrawingMode = false;
        this.canvasFabric.selection = false;
        this.canvasFabric.freeDrawingBrush.onMouseUp();
        let zoom = this.canvasFabric.getZoom();
        zoom *= 0.999 ** (event.dz * 0.75 * devicePixelRatio);
        if (zoom > 20) zoom = 20;
        if (zoom < 0.01) zoom = 0.01;
        const constructedFabricZoomPoint = new fabric.Point(event.x, event.y);
        this.canvasFabric.zoomToPoint(constructedFabricZoomPoint, zoom);
      }
    });

    upperCanvasEl.addEventListener("touchstart", (event: any) => {
      this.canvasFabric.isDrawingMode = true;
      if (event.touches && event.touches.length == 2) {
        this.canvasFabric.isDrawingMode = false;
        this.canvasFabric.selection = false;
        this.canvasFabric.freeDrawingBrush.onMouseUp();
        this.touchZoomFingerAverage.x = 0;
        this.touchZoomFingerAverage.y = 0;
        this.touchZoomFingerLastAverage.x =
          (event.touches[0].clientX + event.touches[1].clientX) / 2;
        this.touchZoomFingerLastAverage.y =
          (event.touches[0].clientY + event.touches[1].clientY) / 2;
      }
    });
    upperCanvasEl.addEventListener("touchmove", (event: any) => {
      if (event.touches && event.touches.length == 2) {
        this.canvasFabric.isDrawingMode = false;
        this.canvasFabric.selection = false;
        this.canvasFabric.freeDrawingBrush.onMouseUp();
        this.touchZoomFingerAverage.x =
          (event.touches[0].clientX + event.touches[1].clientX) / 2;
        this.touchZoomFingerAverage.y =
          (event.touches[0].clientY + event.touches[1].clientY) / 2;
        const constructedFabricPoint = new fabric.Point(
          this.touchZoomFingerAverage.x - this.touchZoomFingerLastAverage.x,
          this.touchZoomFingerAverage.y - this.touchZoomFingerLastAverage.y
        );

        this.canvasFabric.relativePan(constructedFabricPoint);
        this.touchZoomFingerLastAverage.x = this.touchZoomFingerAverage.x;
        this.touchZoomFingerLastAverage.y = this.touchZoomFingerAverage.y;
      }
    });
    this.canvasFabric.on("mouse:down", () => {
      this.canvasFabric.requestRenderAll();
      this.canvasFabric.selection = false;
      this.canvasFabric.forEachObject(function (o) {
        o.selectable = false;
      });
      this.canvasFabric.renderAll();
    });
    this.canvasFabric.on("mouse:up", () => {
      this.canvasFabric.requestRenderAll();
      this.canvasFabric.isDrawingMode = true;
      this.canvasFabric.freeDrawingBrush.onMouseUp();
      this.canvasFabric.renderAll();
    });
    this.canvasFabric.on("mouse:wheel", function (opt) {
      const delta = opt.e.deltaY;
      let zoom = this.canvasFabric.getZoom();
      zoom *= 0.999 ** delta;
      if (zoom > 20) zoom = 20;
      if (zoom < 0.01) zoom = 0.01;
      this.canvasFabric.zoomToPoint(
        { x: opt.e.offsetX, y: opt.e.offsetY },
        zoom
      );
      opt.e.preventDefault();
      opt.e.stopPropagation();
    });
    this.canvasFabric.on("mouse:down", function (opt) {
      const evt = opt.e;
      if (evt.altKey === true) {
        this.isDragging = true;
        this.selection = false;
        this.lastPosX = evt.clientX;
        this.lastPosY = evt.clientY;
      }
    });
    this.canvasFabric.on("mouse:move", function (opt) {
      if (this.isDragging) {
        const e = opt.e;
        const vpt = this.viewportTransform;
        vpt[4] += e.clientX - this.lastPosX;
        vpt[5] += e.clientY - this.lastPosY;
        this.requestRenderAll();
        this.lastPosX = e.clientX;
        this.lastPosY = e.clientY;
      }
    });
    this.canvasFabric.on("mouse:up", function (opt) {
      // on mouse up we want to recalculate new interaction
      // for all objects, so we call setViewportTransform
      this.setViewportTransform(this.viewportTransform);
      this.isDragging = false;
      this.selection = true;
    });
  }
}

export default CanvasPanZoomHandler;

import { fabric } from "fabric";
import store from '@/store/index';
import { PSBrush } from "@arch-inc/fabricjs-psbrush";

class CanvasDrawingPensProvider {
    canvasFabric: fabric.Canvas;
    brush: typeopf  PSBrush;
    constructor(canvasFabric: fabric.Canvas) {
        this.canvasFabric = canvasFabric;
        this.brush = new PSBrush(this.canvasFabric)
        this.brush.width = 10;
        this.brush.color = "#000";
        this.canvasFabric.freeDrawingBrush = this.brush;
        var thisbrush = this.brush;
        store.original.watch(function (state) {
            if (store.state.CanvasStateCanvasToolPickerState.currentTools.find(tool => tool.active == true)!.uuid === "70a27869-dd8e-4bcb-b6c6-e0a731f5a71c") {
                thisbrush.color = "#ffffff";
                thisbrush.width = 100;
                canvasFabric.requestRenderAll();

            } else {
                thisbrush.color = store.state.CanvasStateCanvasToolPickerState.currentTools.find(tool => tool.active == true)!.toolProperties.color;
                thisbrush.width = 10;
                canvasFabric.requestRenderAll();
            }
        }, function () { });
    };
}

export default CanvasDrawingPensProvider;

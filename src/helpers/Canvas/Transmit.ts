import { vm } from "@/main";
import store from "@/store/index";
import { fabric } from "fabric";

class SocketTransmitProvider {
  canvasFabric: fabric.Canvas;
  currentUUID = "";
  enabled = true;
  constructor(canvasFabric: fabric.Canvas) {
    this.canvasFabric = canvasFabric;
    console.log(vm);
    function uuidv4() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(
        c
      ) {
        const r = (Math.random() * 16) | 0,
          v = c == "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    }
    this.canvasFabric.on("object:added", e => {
      if (this.enabled == true) {
        this.currentUUID = uuidv4();
        vm.$socket.client.emit("add_path", {
          obj: e.target!.toJSON(),
          uuid: this.currentUUID
        });
        vm.$socket.client.emit(
          "update_canvas",
          JSON.stringify(this.canvasFabric)
        );
      }
    });

    vm.$socket.client.on("add_path", (path: any) => {
      console.log(path);
      if (this.currentUUID !== path.uuid) {
        this.enabled = false;
        fabric.util.enlivenObjects(
          [path.obj],
          (objects: Array<Record<string, any>>) => {
            objects.forEach((obj: any) => {
              this.canvasFabric.add(obj);
            });
          },
          ""
        );
        this.enabled = true;
      }
    });

    vm.$socket.client.on("draw_canvas", (canvasobj: any) => {
      this.enabled = false;
      this.canvasFabric.loadFromJSON(
        canvasobj,
        this.canvasFabric.renderAll.bind(canvasFabric)
      );
      this.enabled = true;
    });

    vm.$socket.client.on("clear_canvas", (canvasobj: any) => {
      this.canvasFabric.loadFromJSON(
        canvasobj,
        canvasFabric.renderAll.bind(canvasFabric)
      );
    });
  }
}

export default SocketTransmitProvider;

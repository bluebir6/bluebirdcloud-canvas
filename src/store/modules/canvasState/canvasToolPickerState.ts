import { CanvasStateMutationTypes } from "@/store/mutationTypes/canvasStateMutations";
import { defineModule } from "direct-vuex";

interface CanvasToolPickerDataTool {
  toolName: string;
  toolType: string;
  toolProperties: {
    width: number;
    opacity: number;
    color: string;
  };
  toolGraphic: {
    light: string;
    dark: string;
  };
  uuid: string;
  active: boolean;
}
export interface CanvasToolPickerState {
  currentTools: Array<CanvasToolPickerDataTool>;
}

const CanvasToolPickerStateStore = defineModule({
  namespaced: true as true,
  state: (): CanvasToolPickerState => ({
    currentTools: [
      {
        toolName: "Pen",
        toolType: "pen",
        toolProperties: {
          width: 1,
          opacity: 0.5,
          color: "#000000"
        },
        toolGraphic: {
          light: require("@/assets/UI/PencilKit/light/Pen.svg"),
          dark: require("@/assets/UI/PencilKit/dark/Pen.svg")
        },
        uuid: "c6732fca-cec9-4213-be50-bdfb557200b8",
        active: true
      },
      {
        toolName: "Red Pen",
        toolType: "pen",
        toolProperties: {
          width: 0,
          opacity: 1,
          color: "#f03737"
        },
        toolGraphic: {
          light: require("@/assets/UI/PencilKit/light/Pen_RED.svg"),
          dark: require("@/assets/UI/PencilKit/dark/Pen.svg")
        },
        uuid: "05dc0e90-7525-4c4b-a8a2-54746b563ace",
        active: false
      },
      {
        toolName: "Green Pen",
        toolType: "pen",
        toolProperties: {
          width: 0,
          opacity: 1,
          color: "#45e02d"
        },
        toolGraphic: {
          light: require("@/assets/UI/PencilKit/light/Pen_GREEN.svg"),
          dark: require("@/assets/UI/PencilKit/dark/Pen.svg")
        },
        uuid: "74ec5733-3ba1-4e7c-bf8f-36f1fbcb6d56",
        active: false
      },
      {
        toolName: "Blue Pen",
        toolType: "pen",
        toolProperties: {
          width: 0,
          opacity: 1,
          color: "#19c6ff"
        },
        toolGraphic: {
          light: require("@/assets/UI/PencilKit/light/Pen_BLUE.svg"),
          dark: require("@/assets/UI/PencilKit/dark/Pen.svg")
        },
        uuid: "436602ee-fdfd-44f0-bbe3-4770e993a283",
        active: false
      },
      {
        toolName: "Purple Pen",
        toolType: "pen",
        toolProperties: {
          width: 0,
          opacity: 1,
          color: "#b011d4"
        },
        toolGraphic: {
          light: require("@/assets/UI/PencilKit/light/Pen_PURPLE.svg"),
          dark: require("@/assets/UI/PencilKit/dark/Pen.svg")
        },
        uuid: "49b04a19-4a73-4e46-a120-d4283b5cb0be",
        active: false
      },
      {
        toolName: "Eraser",
        toolType: "eraser",
        toolProperties: {
          width: 0,
          opacity: 1,
          color: "#potato"
        },
        toolGraphic: {
          light: require("@/assets/UI/PencilKit/light/Eraser.svg"),
          dark: require("@/assets/UI/PencilKit/dark/Eraser.svg")
        },
        uuid: "70a27869-dd8e-4bcb-b6c6-e0a731f5a71c",
        active: false
      }
    ]
  }),
  getters: {},
  actions: {},
  mutations: {
    [CanvasStateMutationTypes.ChangeCurrentActiveTool](
      state: CanvasToolPickerState,
      payload: string
    ) {
      const currentTool = state.currentTools.find(
        element => element.active == true
      );
      if (currentTool === undefined) {
        window.logger.log(
          "error",
          "Current Tool is undefined",
          ["Current Tool is undefined"],
          "CTPS-76892",
          "canvasToolPickerState.ts"
        );
      } else {
        currentTool.active = false;
        const newTool = state.currentTools.find(
          element => element.uuid == payload
        );
        if (newTool == undefined) {
          window.logger.log(
            "error",
            "Replacement Tool is undefined",
            ["Replacement Tool is undefined"],
            "CTPS-76893",
            "canvasToolPickerState.ts"
          );
        } else {
          newTool.active = true;
        }
      }
    }
  }
});

export default CanvasToolPickerStateStore;

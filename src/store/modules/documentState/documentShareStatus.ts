import { DocumentStateMutationTypes } from "@/store/mutationTypes/documentStateMutations";
import { defineModule } from "direct-vuex";

export interface DocumentShareStatusState {
  privacyStatus: {
    isPrivate: boolean;
    isDiscoverable: boolean;
  };
  shareStatus: {
    isShared: boolean;
    sharedWith: object;
  };
  adoption: {
    adoptedTo: string;
  };
}

const DocumentShareStatusStore = defineModule({
  namespaced: true as true,
  state: (): DocumentShareStatusState => ({
    privacyStatus: {
      isPrivate: true,
      isDiscoverable: false
    },
    shareStatus: {
      isShared: false,
      sharedWith: []
    },
    adoption: {
      adoptedTo: ""
    }
  }),
  getters: {},
  actions: {},
  mutations: {
    [DocumentStateMutationTypes.ChangeDocumentSharingPrivacyStatus](
      state: DocumentShareStatusState,
      payload: boolean
    ) {
      state.privacyStatus.isPrivate = payload;
      if (payload === false) {
        state.privacyStatus.isDiscoverable = false;
        state.shareStatus.isShared = false;
      }
    },
    [DocumentStateMutationTypes.ChangeDocumentSharingDiscoveryStatus](
      state: DocumentShareStatusState,
      payload: boolean
    ) {
      if (payload === true && state.privacyStatus.isPrivate === true) {
        throw new Error(
          "Store DocumentShareStatusStore.privacyStatus.isPrivate is true. Commit DocumentStateDocumentShareStatus.ChangeDocumentSharingPrivacyStatus first."
        );
      } else if (state.privacyStatus.isPrivate === false) {
        state.privacyStatus.isDiscoverable = payload;
      }
    },
    [DocumentStateMutationTypes.ChangeDocumentSharingAbility](
      state: DocumentShareStatusState,
      payload: boolean
    ) {
      if (payload === true && state.privacyStatus.isPrivate === true) {
        throw new Error(
          "Store DocumentShareStatusStore.privacyStatus.isPrivate is true. Commit DocumentStateDocumentShareStatus.ChangeDocumentSharingPrivacyStatus first."
        );
      } else {
        state.shareStatus.isShared = payload;
      }
    }
  }
});
export default DocumentShareStatusStore;

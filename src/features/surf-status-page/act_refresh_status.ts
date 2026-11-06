// ACT_REFRESH_STATUS — the single user triggered action of the Status Utility surface.
// State delta: STATE_APPLICATION_STATUS := "refreshed"
// Persistence effect: PERSIST_STATUS_STORAGE write for ENTITY_STATUS_RECORD
// Navigation: stay (route remains /status)

import {
  REFRESHED_STATUS_VALUE,
  STATUS_ENTITY_REF,
  STATUS_PERSISTENCE_REF,
  STATUS_STATE_REF,
  type StatusValue,
} from "../prod-status-utility/prod-status-utility.types";

export const REFRESH_STATUS_ACTION_REF = "ACT_REFRESH_STATUS";
export const REFRESH_STATUS_LOCAL_ACTION_ID = "refresh-status-1";

export interface RefreshStatusOutcome {
  actionRef: string;
  stateRef: string;
  statePath: string;
  stateValue: StatusValue;
  persistenceRef: string;
  persistenceOperation: "write";
  entityRef: string;
  payloadFields: string[];
}

export function actRefreshStatus(): RefreshStatusOutcome {
  return {
    actionRef: REFRESH_STATUS_ACTION_REF,
    stateRef: STATUS_STATE_REF,
    statePath: "",
    stateValue: REFRESHED_STATUS_VALUE,
    persistenceRef: STATUS_PERSISTENCE_REF,
    persistenceOperation: "write",
    entityRef: STATUS_ENTITY_REF,
    payloadFields: [],
  };
}

export function isRefreshStatusAction(actionRef: string): boolean {
  return actionRef === REFRESH_STATUS_ACTION_REF || actionRef === REFRESH_STATUS_LOCAL_ACTION_ID;
}

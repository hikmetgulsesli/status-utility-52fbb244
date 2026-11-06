// Product types for the Status Utility feature (US-001).
// Mirrors the closed ProductSpecV2 component:
//   ENTITY_STATUS_RECORD / FIELD_STATUS_RECORD_STATUS_VALUE
//   STATE_APPLICATION_STATUS
//   PERSIST_STATUS_STORAGE

export const STATUS_STATE_REF = "STATE_APPLICATION_STATUS";
export const STATUS_ENTITY_REF = "ENTITY_STATUS_RECORD";
export const STATUS_PERSISTENCE_REF = "PERSIST_STATUS_STORAGE";
export const STATUS_ROUTE_PATH = "/status";

export const STATUS_STORAGE_KEY = "setfarm.status_utility.status_storage.v1";

export const INITIAL_STATUS_VALUE = "idle";
export const REFRESHED_STATUS_VALUE = "refreshed";

export type StatusValue = "idle" | "refreshed";

export interface StatusRecord {
  statusValue: StatusValue;
}

export interface StatusStateSnapshot {
  STATE_APPLICATION_STATUS: StatusValue;
}

export interface StatusMessageDescriptor {
  statusValue: StatusValue;
  visibleText: string;
}

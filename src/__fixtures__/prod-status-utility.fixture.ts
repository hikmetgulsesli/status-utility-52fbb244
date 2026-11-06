// Deterministic fixture for the Status Utility feature (US-001).

import {
  INITIAL_STATUS_VALUE,
  REFRESHED_STATUS_VALUE,
  STATUS_ENTITY_REF,
  STATUS_PERSISTENCE_REF,
  STATUS_ROUTE_PATH,
  STATUS_STATE_REF,
  STATUS_STORAGE_KEY,
} from "../features/prod-status-utility/prod-status-utility.types";

export const prodStatusUtilityFixture = {
  entityRef: STATUS_ENTITY_REF,
  stateRef: STATUS_STATE_REF,
  persistenceRef: STATUS_PERSISTENCE_REF,
  storageKey: STATUS_STORAGE_KEY,
  routePath: STATUS_ROUTE_PATH,
  initialStatusValue: INITIAL_STATUS_VALUE,
  refreshedStatusValue: REFRESHED_STATUS_VALUE,
  statusMessage: "Status refreshed",
} as const;

export default prodStatusUtilityFixture;

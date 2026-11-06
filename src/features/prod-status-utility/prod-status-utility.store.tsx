// Application state store for the Status Utility feature (US-001).
// Owns STATE_APPLICATION_STATUS and its PERSIST_STATUS_STORAGE round trip.

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import { readStatusValue, writeStatusRecord } from "./prod-status-utility.repo";
import { actRefreshStatus } from "../surf-status-page/act_refresh_status";
import type { StatusValue } from "./prod-status-utility.types";

export interface StatusStoreValue {
  statusValue: StatusValue;
  refreshStatus: () => void;
}

const StatusStoreContext = createContext<StatusStoreValue | null>(null);

export function StatusStoreProvider({ children }: { children?: ReactNode }) {
  // Rehydration kind: initialization (persisted value is read once on creation).
  const [statusValue, setStatusValue] = useState<StatusValue>(() => readStatusValue());

  const refreshStatus = useCallback(() => {
    const outcome = actRefreshStatus();
    writeStatusRecord({ statusValue: outcome.stateValue });
    setStatusValue(outcome.stateValue);
  }, []);

  const value = useMemo<StatusStoreValue>(
    () => ({ statusValue, refreshStatus }),
    [statusValue, refreshStatus],
  );

  return <StatusStoreContext.Provider value={value}>{children}</StatusStoreContext.Provider>;
}

export function useStatusStore(): StatusStoreValue {
  const store = useContext(StatusStoreContext);
  if (!store) {
    throw new Error("STATUS_STORE_PROVIDER_MISSING");
  }
  return store;
}

export default StatusStoreProvider;

// Persistence repository for PERSIST_STATUS_STORAGE (browser origin authority).
// Durability: reload. Rehydration: initialization.

import {
  INITIAL_STATUS_VALUE,
  STATUS_STORAGE_KEY,
  type StatusRecord,
  type StatusValue,
} from "./prod-status-utility.types";

function getBrowserStorage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage ?? null;
  } catch {
    return null;
  }
}

export function isStatusValue(candidate: unknown): candidate is StatusValue {
  return candidate === "idle" || candidate === "refreshed";
}

export function readStatusRecord(): StatusRecord | null {
  const storage = getBrowserStorage();
  if (!storage) return null;
  try {
    const raw = storage.getItem(STATUS_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { statusValue?: unknown };
    if (!isStatusValue(parsed.statusValue)) return null;
    return { statusValue: parsed.statusValue };
  } catch {
    return null;
  }
}

export function writeStatusRecord(record: StatusRecord): void {
  const storage = getBrowserStorage();
  if (!storage) return;
  try {
    storage.setItem(STATUS_STORAGE_KEY, JSON.stringify(record));
  } catch {
    /* storage unavailable: state stays in memory for the current session */
  }
}

export function clearStatusRecord(): void {
  const storage = getBrowserStorage();
  if (!storage) return;
  try {
    storage.removeItem(STATUS_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}

export function readStatusValue(): StatusValue {
  const record = readStatusRecord();
  return record ? record.statusValue : INITIAL_STATUS_VALUE;
}

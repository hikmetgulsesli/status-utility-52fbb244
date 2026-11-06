// Browser test bridge used by the Setfarm browser evidence adapter.
// Publishes __SETFARM_TEST_BRIDGE__ with the captured state binding
// /states/STATE_APPLICATION_STATUS and the invokeAction entry point,
// plus the __SETFARM_SCENARIO_MODE__ manual scenario marker.

import { STATUS_STATE_REF, type StatusValue } from "../features/prod-status-utility/prod-status-utility.types";

export const SETFARM_TEST_BRIDGE_GLOBAL = "__SETFARM_TEST_BRIDGE__";
export const SETFARM_SCENARIO_MODE_GLOBAL = "__SETFARM_SCENARIO_MODE__";
export const SETFARM_SCENARIO_MODE_VALUE = "manual";

export interface SetfarmTestBridgeOptions {
  getStatusValue: () => StatusValue;
  invokeAction: (actionRef: string) => void;
}

export interface SetfarmTestBridge {
  version: number;
  states: Record<string, StatusValue>;
  getState: (stateRef: string) => StatusValue | undefined;
  getStates: () => Record<string, StatusValue>;
  invokeAction: (actionRef: string) => void;
}

export function registerSetfarmTestBridge(options: SetfarmTestBridgeOptions): SetfarmTestBridge | null {
  if (typeof window === "undefined") return null;

  const states: Record<string, StatusValue> = {};
  Object.defineProperty(states, STATUS_STATE_REF, {
    enumerable: true,
    configurable: true,
    get: () => options.getStatusValue(),
  });

  const bridge: SetfarmTestBridge = {
    version: 1,
    states,
    getState: (stateRef: string) =>
      stateRef === STATUS_STATE_REF ? options.getStatusValue() : undefined,
    getStates: () => ({ [STATUS_STATE_REF]: options.getStatusValue() }),
    invokeAction: (actionRef: string) => options.invokeAction(actionRef),
  };

  const host = window as unknown as Record<string, unknown>;
  host[SETFARM_TEST_BRIDGE_GLOBAL] = bridge;
  host[SETFARM_SCENARIO_MODE_GLOBAL] = SETFARM_SCENARIO_MODE_VALUE;

  return bridge;
}

export default registerSetfarmTestBridge;

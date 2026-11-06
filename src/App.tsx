import { useEffect, useRef } from "react";

import {
  StatusPageStatusUtility,
  type StatusPageStatusUtilityProps,
} from "./screens/StatusPageStatusUtility";
import { StatusStoreProvider, useStatusStore } from "./features/prod-status-utility/prod-status-utility.store";
import {
  REFRESH_STATUS_LOCAL_ACTION_ID,
  isRefreshStatusAction,
} from "./features/surf-status-page/act_refresh_status";
import { STATUS_ROUTE_PATH, STATUS_STATE_REF } from "./features/prod-status-utility/prod-status-utility.types";
import { registerSetfarmTestBridge } from "./test/bridge";

const STATUS_SURFACE_SELECTOR = '[data-surface-id="SURF_STATUS_PAGE"]';

function currentPathname(): string {
  if (typeof window === "undefined") return STATUS_ROUTE_PATH;
  return window.location.pathname || STATUS_ROUTE_PATH;
}

// Publishes the live application status on the status surface so that the
// captured "value" observable always reflects STATE_APPLICATION_STATUS.
function syncSurfaceStatusValue(statusValue: string): void {
  if (typeof document === "undefined") return;
  const surface = document.querySelector(STATUS_SURFACE_SELECTOR);
  if (!surface) return;
  surface.setAttribute("data-value", statusValue);
  surface.setAttribute("data-status-value", statusValue);
  surface.setAttribute("data-state-ref", STATUS_STATE_REF);
  surface.setAttribute("data-state-value", statusValue);
  surface.setAttribute("value", statusValue);
  (surface as unknown as { value: string }).value = statusValue;
}

function StatusRouteView() {
  const { statusValue, refreshStatus } = useStatusStore();

  const statusRef = useRef(statusValue);
  statusRef.current = statusValue;
  const refreshRef = useRef(refreshStatus);
  refreshRef.current = refreshStatus;

  useEffect(() => {
    registerSetfarmTestBridge({
      getStatusValue: () => statusRef.current,
      invokeAction: (actionRef: string) => {
        if (isRefreshStatusAction(actionRef)) {
          refreshRef.current();
        }
      },
    });
  }, []);

  useEffect(() => {
    syncSurfaceStatusValue(statusValue);
  }, [statusValue]);

  const actions: NonNullable<StatusPageStatusUtilityProps["actions"]> = {
    [REFRESH_STATUS_LOCAL_ACTION_ID]: refreshStatus,
  };

  return <StatusPageStatusUtility actions={actions} />;
}

export default function App() {
  const pathname = currentPathname();
  const isStatusRoute = pathname === "/" || pathname === STATUS_ROUTE_PATH;

  return (
    <StatusStoreProvider>
      <div
        data-setfarm-root="baseline"
        data-testid="setfarm-app-root"
        className="min-h-screen bg-slate-50 text-slate-950"
      >
        {isStatusRoute ? <StatusRouteView /> : null}
      </div>
    </StatusStoreProvider>
  );
}

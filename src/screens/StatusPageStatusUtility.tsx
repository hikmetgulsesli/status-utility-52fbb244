// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Status Page - Status Utility
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type StatusPageStatusUtilityActionId = "refresh-status-1";

export interface StatusPageStatusUtilityProps {
  actions?: {
    "refresh-status-1"?: () => void;
  };

}

export type StatusPageStatusUtilityActionCallbacks = NonNullable<StatusPageStatusUtilityProps["actions"]>;

export function StatusPageStatusUtility({ actions }: StatusPageStatusUtilityProps) {
  return (
    <>
      <div data-surface-id="SURF_STATUS_PAGE" className="flex-1 flex flex-col justify-between p-6 md:p-12" data-setfarm-element-ref="E000001" data-observable-refs="OBS_REFRESH_STATUS_STATUS_MESSAGE_OBSERVABLE OBS_REFRESH_STATUS_STATUS_VALUE_OBSERVABLE">
          {/* Header */}
          <header className="max-w-4xl mx-auto w-full flex items-center justify-between pb-8 border-b border-slate-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                SU
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-slate-900">Status Utility</h1>
                <p className="text-xs text-slate-500 font-medium">System Monitoring &amp; State Diagnostics</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 border border-emerald-200">
                <span className="w-2 h-2 mr-1.5 rounded-full bg-emerald-500"></span>
                System Online
              </span>
              <span className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">
                /status
              </span>
            </div>
          </header>
      
          {/* Main Content Area */}
          <main className="max-w-4xl mx-auto w-full my-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Main Status Card */}
              <div className="md:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">Current System State</h2>
                    <p className="text-sm text-slate-500">Real-time status diagnostics for the utility service</p>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-md border border-emerald-100">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Operational</span>
                  </div>
                </div>
      
                {/* Status Message Section */}
                <div className="bg-slate-50 rounded-lg p-5 border border-slate-100">
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                    Status Message
                  </div>
                  <div className="text-base font-medium text-slate-900">
                    Status refreshed
                  </div>
                </div>
      
                {/* State Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      State Value
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono text-sm font-semibold">
                      refreshed
                    </div>
                  </div>
      
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      Active Route
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200 font-mono text-sm font-medium">
                      /status
                    </div>
                  </div>
                </div>
      
                {/* Primary Control Area */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <p className="text-xs text-slate-400">
                    Click refresh to re-evaluate system state and synchronize storage.
                  </p>
                  <button type="button" data-action="ACT_REFRESH_STATUS" data-control-slot="CSLOT_REFRESH_STATUS_REFRESH_BUTTON" className="inline-flex items-center px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors" data-setfarm-element-ref="E000002" data-observable-refs="OBS_REFRESH_STATUS_REFRESH_BUTTON_OBSERVABLE" data-action-id="refresh-status-1" onClick={actions?.["refresh-status-1"]}>
                    Refresh Status
                  </button>
                </div>
              </div>
      
              {/* Sidebar / Metadata */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 space-y-4">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Diagnostic Information
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-500">Environment</span>
                      <span className="font-mono text-xs text-slate-700">Production</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-500">Storage Sync</span>
                      <span className="text-xs font-medium text-emerald-600">Active</span>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100">
                      <span className="text-slate-500">Route Verification</span>
                      <span className="font-mono text-xs text-slate-700">/status</span>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span className="text-slate-500">Target Endpoint</span>
                      <span className="font-mono text-xs text-slate-700">TARGET_STATUS_PAGE</span>
                    </div>
                  </div>
                </div>
      
                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5 text-xs text-slate-500 space-y-2">
                  <div className="font-semibold text-slate-700 uppercase tracking-wider text-[11px]">Notice</div>
                  <p className="leading-relaxed">
                    Status records are kept synchronised with local storage across browser reloads.
                  </p>
                </div>
              </div>
            </div>
          </main>
      
          {/* Footer */}
          <footer className="max-w-4xl mx-auto w-full pt-8 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400">
            <div>Status Utility © 2025</div>
            <div>All systems functioning normally</div>
          </footer>
        </div>
    </>
  );
}

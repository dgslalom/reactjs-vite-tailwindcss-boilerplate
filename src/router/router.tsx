import { createBrowserRouter } from 'react-router-dom';
// import { ErrorPage } from 'shared/components/error/errorPage.component';
// import { Login } from 'routes/login/login.route';
// import { Root } from 'routes/root/root.route';
// import { EnvironmentalMonitorRoute } from 'routes/environmental-monitor/environmental-monitor.route';
// import { DashboardRoute } from 'routes/dashboard/dashboard.route';

// import { AlertsRoute } from 'routes/alerts/alerts.route';
// import { VesselPerformance } from 'routes/vessel-performance/vesselPerformance.route';
// import { IndividualVesselPerformance } from 'routes/vessel-performance/individual-vessel-performance/individualVesselPerformance.route';
// import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
// import { VesselDataMonitor } from 'routes/vessel-data-monitor/vessel-data-monitor.route';
// import { VesselDataSummary } from 'routes/vessel-data-monitor/routes/vesselDataSummary/vessel-data-summary.route';
// import { VesselDetail } from 'routes/environmental-monitor/components/vessel-detail/vessel-detail.component';
// import { Reports } from 'routes/reports/reports.route';
// import { VoyageMonitorRoute } from 'routes/voyage-monitor/voyage-monitor.route';
// import { VesselVoyageRoute } from 'routes/voyage-monitor/routes/vessel-voyage/vessel-voyage.route';
// import { RestrictedRouter } from 'router/restricted.router';
// import { PermissionModule } from 'shared/models/user.model';

import { ComingSoon } from '../components/ComingSoon/coming-soon';
import Landing from '../components/Landing/landing';
import { Root } from '../routes/root/root.route';

export interface RouteItem {
  path: string;
  breadcrumbName?: string;
}

export const ROUTES = {
  root: { path: '/', breadcrumbName: 'Root' },
  landing: { path: '/landing', breadcrumbName: 'Landing' },
  dashboard: { path: '/dashboard', breadcrumbName: 'Dashboard' },
  comingSoon: { path: '/coming-soon', breadcrumbName: 'Dashboard' },
  login: { path: '/login', breadcrumbName: '' },
  environmentalMonitorFleet: {
    path: '/environmental-monitor/fleet',
    breadcrumbName: 'Environmental Monitor'
  },
  environmentalMonitor: {
    path: '/environmental-monitor',
    breadcrumbName: 'Environmental Monitor'
  },
  environmentalMonitorVesselsDetail: {
    path: '/environmental-monitor/vessels/:id',
    breadcrumbName: ''
  },
  vesselPerformance: {
    path: '/vessel-performance',
    breadcrumbName: 'Vessel Performance'
  },
  individualVesselPerformance: {
    path: '/vessel-performance/:id',
    breadcrumbName: ''
  },
  voyageMonitor: { path: '/voyage-monitor', breadcrumbName: 'Voyage Monitor' },
  voyageMonitorActiveVoyages: {
    path: '/voyage-monitor/active',
    breadcrumbName: ''
  },
  voyageMonitorHistoricalVoyages: {
    path: '/voyage-monitor/historical',
    breadcrumbName: ''
  },
  vesselVoyage: {
    path: '/voyage-monitor/:id',
    breadcrumbName: 'Vessel Voyage'
  },
  vesselDataMonitor: {
    path: '/vessel-data-monitor',
    breadcrumbName: 'Vessel Data Monitor'
  },
  vesselDataSummary: {
    path: '/vessel-data-monitor/vessel-data-summary/:id',
    breadcrumbName: 'Vessel Data Summary'
  },
  alerts: { path: '/alerts', breadcrumbName: 'Alerts' },
  reports: { path: '/reports', breadcrumbName: 'Reports' },
  settings: { path: '/settings', breadcrumbName: 'Settings' },
  settingsThresholdLimits: {
    path: '/settings/threshold-limits',
    breadcrumbName: ''
  },
  settingsUserAdmin: { path: '/settings/admin', breadcrumbName: '' },
  userInfo: { path: '/user', breadcrumbName: '' }
};

// const rootWithComponent = (
//   component: EmotionJSX.Element,
//   requiredModules: PermissionModule[]
// ): EmotionJSX.Element => {
//   return (
//     <RestrictedRouter
//       requiredModules={requiredModules}
//       childComponent={<Root childComponent={component} />}
//     ></RestrictedRouter>
//   );
// };

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: ROUTES.comingSoon.path,
        element: <ComingSoon />
      }
    ]
  },
  // {
  //   path: ROUTES.landing.path,
  //   element: <Landing />
  // },
  {
    path: ROUTES.comingSoon.path,
    element: <ComingSoon />
  }
]);

// export const router = createBrowserRouter([
//   {
//     path: ROUTES.dashboard.path,
//     element: rootWithComponent(<DashboardRoute />, []),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.environmentalMonitor.path,
//     element: rootWithComponent(<EnvironmentalMonitorRoute />, [
//       PermissionModule.EnvironmentalMonitor
//     ]),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.environmentalMonitorVesselsDetail.path,
//     element: rootWithComponent(<VesselDetail />, [
//       PermissionModule.EnvironmentalMonitor
//     ]),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.vesselPerformance.path,
//     element: rootWithComponent(<VesselPerformance />, [
//       PermissionModule.VesselPerformanceMonitor
//     ]),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.individualVesselPerformance.path,
//     element: rootWithComponent(<IndividualVesselPerformance />, [
//       PermissionModule.VesselPerformanceMonitor
//     ]),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.voyageMonitor.path,
//     element: rootWithComponent(<VoyageMonitorRoute />, [
//       PermissionModule.VoyagePlanningTracking
//     ]),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.voyageMonitorActiveVoyages.path,
//     element: rootWithComponent(
//       <ComingSoon name="Voyage Monitor: Active Voyages" />,
//       [PermissionModule.VoyagePlanningTracking]
//     ),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.voyageMonitorHistoricalVoyages.path,
//     element: rootWithComponent(
//       <ComingSoon name="Voyage Monitor: Historical Voyages" />,
//       [PermissionModule.VoyagePlanningTracking]
//     ),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.vesselVoyage.path,
//     element: rootWithComponent(<VesselVoyageRoute />, [
//       PermissionModule.VoyagePlanningTracking
//     ]),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.vesselDataMonitor.path,
//     element: rootWithComponent(<VesselDataMonitor />, [
//       PermissionModule.VesselDataMonitor
//     ]),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.alerts.path,
//     element: rootWithComponent(<AlertsRoute />, []),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.reports.path,
//     element: rootWithComponent(<Reports />, []),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.settingsThresholdLimits.path,
//     element: rootWithComponent(
//       <ComingSoon name="Settings: Threshold Limits" />,
//       []
//     ),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.settingsUserAdmin.path,
//     element: rootWithComponent(<ComingSoon name="Settings: User Admin" />, []),
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.login.path,
//     element: <Login />,
//     errorElement: <ErrorPage />
//   },
//   {
//     path: ROUTES.vesselDataSummary.path,
//     element: rootWithComponent(<VesselDataSummary />, [
//       PermissionModule.VesselDataMonitor
//     ]),
//     errorElement: <ErrorPage />
//   }
// ]);

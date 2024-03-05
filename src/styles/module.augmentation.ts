import { CSSProperties } from 'react';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    bigDataPoint: CSSProperties;
  }

  interface TypographyVariantsOptions {
    bigDataPoint?: CSSProperties;
  }
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    menuItem: CSSProperties;
    menuItemLight: CSSProperties;
    chart: CSSProperties;
    alertDetailLabel: CSSProperties;
    alertDetailComment: CSSProperties;
    alertTitle: CSSProperties;
  }

  interface TypographyVariantsOptions {
    menuItem?: CSSProperties;
    menuItemLight?: CSSProperties;
    chart?: CSSProperties;
    alertDetailLabel?: CSSProperties;
    alertDetailComment?: CSSProperties;
    alertTitle?: CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    bigDataPoint: true;
    menuItem: true;
    menuItemLight: true;
    chart: true;
    alertDetailLabel: true;
    alertDetailComment: true;
    alertTitle: true;
  }
}

declare module '@mui/material/styles' {
  interface Theme {
    background: {
      page: string;
      nav: string;
      component: string;
      componentLight: string;
      default: string;
    };
    alerts: {
      avatarBackground: string;
      inputBackground: string;
      ctaColor: string;
      chipTextColor: string;
      chipBackgroundColor: string;
      activityChartStroke: string;
      activityChartStopColor: string;
      status: {
        open: string;
        closed: string;
        archived: string;
      };
    };
    eventModal: {
      inputBackground: string;
      errorTextLight: string;
      loadingOverlayBackground: string;
    };
    vesselPerformance: {
      charts: {
        axis: string;
        toolTipBackground: string;
        secondaryGreen: string;
        secondaryPurple: string;
        secondaryMagenta: string;
        filterBackground: string;
        filterBackgroundSelected: string;
      };
      tables: {
        border: string;
      };
    };
    environmentalMonitor: {
      tables: {
        hover: string;
      };
      circleIcons: {
        marginLeft: number;
        fontSize: string;
      };
      colors: {
        green: string;
        secondaryPurple: string;
        magenta: string;
        cyan: string;
      };
      toggleButton: {
        backgroundColor: string;
        boxShadow: string;
      };
    };
    excelColour: {
      red: string;
      green: string;
      yellow: string;
      grey: string;
      lightgrey: string;
      emissionColor: string;
      nonEmissionColor: string;
      openAlert: string;
      closedAlert: string;
      archivedAlert: string;
      defaultColor: string;
    };
    colors: {
      white: string;
      offWhite: string;
      infoStatesFocusedVisible: string;
      blueGray: string;
      charcoalGray: string;
      darkBlue: string;
      magenta: string;
      cyan: string;
      purple: string;
      aRating: string;
      bRating: string;
      cRating: string;
      dRating: string;
      eRating: string;
      divider: string;
    };
    collapsibleNavBarOptions: {
      openWidth: number;
      closedWidth: number;
    };
    topNavigationOptions: {
      height: number;
    };
    scrollbar: {
      scrollbarTrack: string;
      scrollbarThumb: string;
    };
  }

  interface ThemeOptions {
    background?: {
      page?: string;
      nav?: string;
      component?: string;
      componentLight?: string;
      default?: string;
    };
    alerts?: {
      avatarBackground?: string;
      inputBackground?: string;
      ctaColor?: string;
      chipTextColor?: string;
      chipBackgroundColor?: string;
      activityChartStroke?: string;
      activityChartStopColor?: string;
      status?: {
        open?: string;
        closed?: string;
        archived?: string;
      };
    };
    eventModal?: {
      inputBackground?: string;
      errorTextLight?: string;
      loadingOverlayBackground?: string;
    };
    vesselPerformance?: {
      charts?: {
        axis?: string;
        toolTipBackground?: string;
        secondaryGreen?: string;
        secondaryPurple?: string;
        secondaryMagenta?: string;
        filterBackground?: string;
        filterBackgroundSelected?: string;
      };
      tables?: {
        border?: string;
      };
    };
    environmentalMonitor?: {
      tables?: {
        hover?: string;
      };
      circleIcons: {
        marginLeft: number;
        fontSize: string;
      };
      colors: {
        green?: string;
        secondaryPurple?: string;
        magenta: string;
        cyan: string;
      };
      toggleButton: {
        backgroundColor: string;
        boxShadow: string;
      };
    };
    excelColour?: {
      red?: string;
      green?: string;
      yellow?: string;
      grey?: string;
      lightgrey?: string;
      emissionColor?: string;
      nonEmissionColor?: string;
      openAlert?: string;
      closedAlert?: string;
      archivedAlert?: string;
      defaultColor?: string;
    };
    colors: {
      white: string;
      offWhite: string;
      infoStatesFocusedVisible: string;
      blueGray: string;
      charcoalGray: string;
      darkBlue: string;
      magenta: string;
      cyan: string;
      purple: string;
      aRating: string;
      bRating: string;
      cRating: string;
      dRating: string;
      eRating: string;
      divider: string;
    };
    collapsibleNavBarOptions: {
      openWidth?: number;
      closedWidth?: number;
    };
    topNavigationOptions: {
      height?: number;
    };
    scrollbar: {
      scrollbarTrack?: string;
      scrollbarThumb?: string;
    };
  }
}

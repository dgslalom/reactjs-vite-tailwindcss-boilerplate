import { createTheme } from '@mui/material/styles';
import { typography } from './typography';

const { fontFamilies, fontWeights, lineHeights, fontSize, letterSpacing } =
  typography;

// Using "theme composition" to first declare static values and then compose new ones
const staticTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1440,
      xl: 1920
    }
  },
  palette: {
    text: {
      primary: 'rgb(255, 255, 255)',
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.38)'
    },
    primary: {
      main: '#3887BD',
      dark: '#42a5f5',
      light: '#e3f2fd',
      contrastText: 'rgba(255, 255, 255, 0.87)'
    },
    secondary: {
      main: '#319db4',
      dark: '#ab47bc',
      light: '#f3e5f5',
      contrastText: 'rgb(255, 255, 255)'
    },
    error: {
      main: '#F44336',
      dark: '#d32f2f',
      light: '#e57373',
      contrastText: 'rgb(255, 255, 255)'
    },
    warning: {
      main: '#FFA726',
      dark: '#f57c00',
      light: '#ffb74d',
      contrastText: '#000000de'
    },
    success: {
      main: '#66BB6A',
      dark: '#388e3c',
      light: '#81c784',
      contrastText: '#000000de'
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.08)',
      focus: 'rgba(255, 255, 255, 0.12)',
      selected: 'rgba(255, 255, 255, 0.16)',
      active: 'rgb(255,255,255, 0.56)'
    },
    divider: 'rgba(255, 255, 255, 0.12)'
  },

  // color codes are specific to excel export, ExcelJS picks the colour code value without #
  excelColour: {
    red: 'F44336',
    green: '66BB6A',
    grey: '7a7a7a',
    yellow: 'FFA726',
    lightgrey: 'd0cece',
    emissionColor: 'F44336',
    nonEmissionColor: 'F48A82',
    openAlert: '319DB4',
    closedAlert: '70E8C7',
    archivedAlert: 'EFEFF0',
    defaultColor: 'FFFFFF'
  },
  typography: {
    h1: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-4']}`,
      lineHeight: `${lineHeights['0']}`,
      fontSize: `${fontSize['10']}`,
      letterSpacing: `${letterSpacing['0']}`
    },
    h2: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-2']}`,
      lineHeight: `${lineHeights['1']}`,
      fontSize: `${fontSize['9']}`,
      letterSpacing: `${letterSpacing['1']}`
    },
    h3: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-2']}`,
      lineHeight: `${lineHeights['2']}`,
      fontSize: `${fontSize['8']}`,
      letterSpacing: `${letterSpacing['2']}`
    },
    h4: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-2']}`,
      lineHeight: `${lineHeights['3']}`,
      fontSize: `${fontSize['7']}`,
      letterSpacing: `${letterSpacing['3']}`
    },
    h5: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-2']}`,
      lineHeight: `${lineHeights['4']}`,
      fontSize: `${fontSize['1']}`,
      letterSpacing: `${letterSpacing['2']}`
    },
    h6: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-3']}`,
      lineHeight: `${lineHeights['5']}`,
      fontSize: `${fontSize['6']}`,
      letterSpacing: `${letterSpacing['4']}`
    },
    body1: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-2']}`,
      lineHeight: `${lineHeights['6']}`,
      fontSize: `${fontSize['5']}`,
      letterSpacing: `${letterSpacing['4']}`
    },
    body2: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-0']}`,
      lineHeight: `${lineHeights['7']}`,
      fontSize: `${fontSize['1']}`,
      letterSpacing: `${letterSpacing['5']}`
    },
    caption: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-2']}`,
      lineHeights: `${lineHeights['17']}`,
      fontSize: `${fontSize['3']}`,
      letterSpacing: `${letterSpacing['4']}`
    },
    bigDataPoint: {
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: `${fontWeights['roboto-2']}`,
      lineHeight: `${lineHeights['8']}`,
      fontSize: `${fontSize['11']}`,
      letterSpacing: `${letterSpacing['4']}`
    }
  },
  components: {
    MuiTooltip: {
      styleOverrides: {
        arrow: {
          color: '#EFEFF0'
        },
        tooltip: {
          backgroundColor: '#EFEFF0',
          color: '#1D262f',
          fontSize: `${fontSize['3']}`,
          textAlign: 'center',
          padding: '8px'
        },
        tooltipPlacementTop: {
          top: '16px'
        }
      }
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          // Map the bigDataPoint variant to render as <h4> instead of default (span)
          bigDataPoint: 'h4'
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '0px',
          '& .recharts-legend-item > span': {
            color: '#FFFFFF !important'
          },
          '& .recharts-legend-item > svg': {
            marginTop: -2
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: '0px',
          padding: '0px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          margin: '0px',
          padding: '0px'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        padding: {
          paddingTop: 0,
          paddingBottom: 0
        }
      }
    }
  },
  background: {
    page: '#1D262F',
    nav: '#3D444D',
    component: '#2C343D',
    componentLight: '#3D444D',
    default: 'rgba(239, 239, 240, 0.07)'
  },
  alerts: {
    avatarBackground: 'rgba(56, 135, 189, 0.3)',
    inputBackground: 'rgba(255, 255, 255, 0.09)',
    ctaColor: 'rgba(255, 255, 255, 0.87)',
    chipTextColor: 'rgba(0, 0, 0, 0.87)',
    chipBackgroundColor: 'rgba(244, 67, 54, 1)',
    activityChartStroke: '#B39DDB',
    activityChartStopColor: '#8C85CF',
    status: {
      open: '#319DB4',
      closed: '#70E8C7',
      archived: '#EFEFF0'
    }
  },
  eventModal: {
    inputBackground: 'rgba(255, 255, 255, 0.09)',
    loadingOverlayBackground: '#2C343DEB',
    errorTextLight: '#edacac'
  },
  vesselPerformance: {
    charts: {
      axis: '#EFEFF0',
      toolTipBackground: '#EFEFF0',
      secondaryGreen: '#70E8C7',
      secondaryPurple: '#8C85CF',
      secondaryMagenta: '#FF598C',
      filterBackground: 'rgba(255, 255, 255, 0.10)',
      filterBackgroundSelected: 'rgba(255, 255, 255, 0.35)'
    },
    tables: {
      border: '#ffffff1f'
    }
  },
  environmentalMonitor: {
    tables: {
      hover: '#5a6370'
    },
    colors: {
      green: '#66BB6A',
      secondaryPurple: '#8C85CF',
      magenta: '#FF598C',
      cyan: '#4DE8E3'
    },
    circleIcons: {
      fontSize: '18px',
      marginLeft: 2
    },
    toggleButton: {
      backgroundColor: 'rgba(255, 255, 255, 0.10)',
      boxShadow: '0px 3px 4px 0px #00000024'
    }
  },
  shape: {
    borderRadius: 4
  },
  colors: {
    white: '#FFFFFF',
    offWhite: '#EFEFF0',
    infoStatesFocusedVisible: '#efeff030',
    blueGray: '#2a5675',
    charcoalGray: 'rgba(239, 239, 240, 0.3)',
    darkBlue: '#1D262F',
    magenta: '#FF598C',
    cyan: '#4DE8E3',
    purple: '#8C85CF',
    aRating: '#66BB6A',
    bRating: '#FFA726',
    cRating: '#F57C00',
    dRating: '#F44336',
    eRating: '#D32F2F',
    divider: 'rgb(255,255,255, 0.56)'
  },
  collapsibleNavBarOptions: {
    openWidth: 248,
    closedWidth: 72
  },
  topNavigationOptions: {
    height: 74
  },
  scrollbar: {
    scrollbarTrack: 'rgba(255, 255, 255, 0.08)',
    scrollbarThumb: 'rgba(255, 255, 255, 0.7)'
  }
});

export const theme = createTheme(staticTheme, {
  typography: {
    menuItem: {
      color: staticTheme.palette.text.primary,
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: 500,
      lineHeight: `${lineHeights['3']}`, // 24px
      fontSize: `${fontSize['5']}`, // 16px
      letterSpacing: '0.016px'
    },
    menuItemLight: {
      color: staticTheme.palette.text.primary,
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: 300,
      lineHeight: `${lineHeights['3']}`, // 24px
      fontSize: `${fontSize['5']}` // 16px
    },
    chart: {
      color: staticTheme.vesselPerformance.charts.axis,
      fontFamily: `${fontFamilies.condensed}`,
      fontWeight: 400,
      lineHeight: `${lineHeights['0']}`, // 120% ish
      fontSize: `${fontSize['1']}` // 12px
    },
    alertDetailLabel: {
      color: staticTheme.palette.text.secondary,
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: 400,
      lineHeight: `${lineHeights['4']}`, // 12px
      fontSize: `${fontSize['1']}`, // 12px
      letterSpacing: `${letterSpacing['4']}` // 0.15px,
    },
    alertDetailComment: {
      color: staticTheme.palette.text.primary,
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: 400,
      lineHeight: `${lineHeights['6']}`, // 150%
      fontSize: `${fontSize['5']}`, // 16px
      letterSpacing: `${letterSpacing['4']}` // 0.15px,
    },
    alertTitle: {
      color: '#EDACAC',
      fontFamily: `${fontFamilies.roboto}`,
      fontWeight: 500,
      lineHeight: `${lineHeights['3']}`,
      fontSize: `${fontSize['5']}`,
      letterSpacing: `${letterSpacing['4']}`
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: staticTheme.background.componentLight,
          borderRadius: '6px'
        }
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${staticTheme.palette.divider}`
        },
        indicator: {
          backgroundColor: staticTheme.palette.secondary.main
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontFamily: `${fontFamilies.roboto}`,
          lineHeight: `${lineHeights['3']}`, // 24px
          fontSize: `${fontSize['5']}`, // 16px
          letterSpacing: '0.016px',
          color: 'theme.palette.text.secondary',
          fontWeight: 400,
          '&.Mui-selected': {
            fontWeight: 500,
            color: staticTheme.palette.text.primary
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: staticTheme.background.page
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: staticTheme.background.page
        }
      }
    },
    MuiDataGrid: {
      styleOverrides: {
        overlay: {
          backgroundColor: staticTheme.background.page
        },
        paper: {
          backgroundColor: staticTheme.background.page
        },
        menu: {
          '& .MuiPaper-root': {
            backgroundColor: staticTheme.background.page
          }
        },
        filterForm: {
          backgroundColor: staticTheme.background.page,
          '& option': {
            backgroundColor: `${staticTheme.background.page} !important`
          }
        },
        cell: {
          a: {
            color: 'inherit',
            textDecoration: 'underline'
          },
          '&:focus': {
            outline: 'none'
          }
        },
        columnHeaderTitleContainerContent: {
          width: 'calc(100% - 28px)'
        },
        iconButtonContainer: {
          width: 0,
          button: {
            transform: 'translate(0, -50%)',
            position: 'absolute',
            visibility: 'visible'
          }
        },
        iconSeparator: {
          color: 'transparent'
        },
        'columnHeader--alignRight': {
          '& .MuiDataGrid-iconButtonContainer': {
            right: 'unset',
            button: {
              transform: 'translate(-100%, -50%)'
            }
          }
        }
      }
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          fontFamily: fontFamilies['roboto'],
          borderBottom: `1px solid ${staticTheme.palette.divider}`,
          borderTop: 'none',
          color: staticTheme.palette.text.primary,
          fontSize: fontSize['1'],
          fontWeight: fontWeights['regular'],
          lineHeight: lineHeights['7'],
          letterSpacing: letterSpacing['5'],
          padding: '16px',
          '&:nth-of-type(odd):not(.MuiTableRow-head)': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)'
          },
          '&:hover:not(.MuiTableRow-head)': {
            cursor: 'pointer',
            background:
              'linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)), rgba(255, 255, 255, 0.08)'
          },
          '&.MuiTableRow-head span:hover': {
            cursor: 'pointer',
            color: staticTheme.palette.text.primary
          }
        },
        head: {
          verticalAlign: 'bottom',
          fontSize: typography.fontSize['3'],
          fontWeight: fontWeights.medium,
          lineHeight: lineHeights['13'],
          fontFeatureSettings: "'clig' off, 'liga' off"
        }
      }
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          fontFamily: 'inherit',
          borderBottom: 'inherit',
          color: 'inherit',
          fontSize: 'inherit',
          fontWeight: 'inherit',
          lineHeight: 'inherit',
          letterSpacing: 'inherit',
          padding: 'inherit'
        }
      }
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          color: staticTheme.palette.text.primary
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:active': {
            backgroundColor: staticTheme.palette.action.active
          },
          '&:focus': {
            backgroundColor: staticTheme.palette.action.focus
          },
          '&:hover': {
            backgroundColor: staticTheme.palette.action.hover
          },
          '&.Mui-selected': {
            backgroundColor: `${staticTheme.palette.action.selected} !important`
          },
          '& .Mui-focusVisible': {
            backgroundColor: `${staticTheme.palette.action.focus} !important`
          }
        }
      }
    }
  }
});

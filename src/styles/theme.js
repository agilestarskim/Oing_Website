export const theme = {
  colors: {
    primary: '#2D68FF',    // 신뢰감 있는 파란색
    secondary: '#00D1C5',  // 밝고 트렌디한 민트색
    accent: '#FF5B7F',     // 생동감 있는 핑크색
    background: {
      primary: '#FFFFFF',
      secondary: '#F8FAFF',
      dark: '#1A1A1A'
    },
    text: {
      primary: '#1A1A1A',
      secondary: '#666666',
      light: '#999999',
      white: '#FFFFFF'
    }
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  typography: {
    fontFamily: {
      main: "'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif",
    },
    fontSize: {
      h1: '48px',
      h2: '36px',
      h3: '24px',
      body: '16px',
      small: '14px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    }
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    round: '999px',
  },
  shadows: {
    small: '0 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px'
  },
  container: {
    padding: {
      mobile: '20px',
      desktop: '40px'
    },
    maxWidth: '1200px'
  }
} 
/* Must load immediately after https://cdn.tailwindcss.com
 * Theme: "Prism" — vibrant accents, cream canvas */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        accent: {
          purple: '#8b5cf6',
          cyan: '#06b6d4',
          pink: '#ec4899',
        },
        night: {
          950: '#fffafd',
          900: '#f5f3ff',
          850: '#ecfeff',
          800: '#e0e7ff',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 26px rgba(236,72,153,0.28), 0 0 52px rgba(6,182,212,0.18)',
        glowPink: '0 0 22px rgba(251,191,36,0.35)',
        card: '0 10px 36px rgba(91,33,182,0.09)',
      },
    },
  },
};

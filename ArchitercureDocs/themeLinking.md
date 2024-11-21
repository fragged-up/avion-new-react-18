# Here’s a base theme.css setup for your project. It includes customizable CSS variables for colors, fonts, spacing, and other design elements that can be easily extended or overridden.

# // theme.css file

# :root {
  /* Colors */
  --color-primary: #2a254b; /* Main color */
  --color-secondary: #ff8a65; /* Accent color */
  --color-background: #ffffff; /* Background color */
  --color-text: #333333; /* Text color */
  --color-muted: #aaaaaa; /* Muted/Disabled color */
  
  /* Font families */
  --font-primary: 'Satoshi', sans-serif;
  --font-secondary: 'Clash Display', sans-serif;
  
  /* Font sizes */
  --font-size-xs: 0.75rem; /* 12px */
  --font-size-sm: 0.875rem; /* 14px */
  --font-size-base: 1rem; /* 16px */
  --font-size-lg: 1.25rem; /* 20px */
  --font-size-xl: 1.5rem; /* 24px */
  --font-size-xxl: 2rem; /* 32px */
  
  /* Spacing */
  --spacing-xs: 0.5rem; /* 8px */
  --spacing-sm: 0.75rem; /* 12px */
  --spacing-md: 1rem; /* 16px */
  --spacing-lg: 1.5rem; /* 24px */
  --spacing-xl: 2rem; /* 32px */
  
  /* Border radius */
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 16px;

  /* Shadows */
  --box-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
  --box-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.16);
  --box-shadow-lg: 0 10px 20px rgba(0, 0, 0, 0.2);
}

body {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: var(--color-background);
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

a {
  color: var(--color-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

button {
  font-family: var(--font-primary);
  font-size: var(--font-size-base);
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
}

button:hover {
  background-color: var(--color-secondary);
  color: #ffffff;
}





# How to Use theme.css

#	1.	Link theme.css in globals.css:
# Import theme.css into your globals.css file:

# @import './theme.css';
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# 2.	Reference Variables in Tailwind:
# Add these variables to your tailwind.config.ts if you want Tailwind to use them:

theme: {
  extend: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      background: 'var(--color-background)',
      text: 'var(--color-text)',
      muted: 'var(--color-muted)',
    },
    borderRadius: {
      sm: 'var(--border-radius-sm)',
      md: 'var(--border-radius-md)',
      lg: 'var(--border-radius-lg)',
    },
    spacing: {
      xs: 'var(--spacing-xs)',
      sm: 'var(--spacing-sm)',
      md: 'var(--spacing-md)',
      lg: 'var(--spacing-lg)',
      xl: 'var(--spacing-xl)',
    },
  },
},


# 3.	Override Variables:
# You can override the :root variables in specific sections or components:

.dark-theme {
  --color-background: #1a1a1a;
  --color-text: #f5f5f5;
}

# Benefits

#	1.	Consistency: Use CSS variables across components and utilities.
#	2.	Theming: Easily switch themes by overriding variables.
#	3.	Extensibility: Scalable design tokens for fonts, colors, and spacing.

# This setup ensures a clean, flexible, and professional theming foundation for your project! 🚀
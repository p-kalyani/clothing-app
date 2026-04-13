import React from 'react'
import { useState } from "react";

const useTheme = (val) => {
  const [theme, setTheme] = useState(val);
  function themeChange() {
    if (theme === 'dark') {
      setTheme('light');
    }
    else {
      setTheme('dark');
    }
  }
  return { theme, themeChange }
}

export default useTheme

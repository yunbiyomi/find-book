/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'

const Footer = ({ isDark, setIsDark }) => {
  return (
    <div
      css={css`
        margin: 1rem 0;
        display: flex;
        justify-content: center;
      `} >
      <p> © {new Date().getFullYear()} Book List, All rights reserved</p>
      <button
        css={css`
          background-color: ${isDark ? '#DED6CE' : '#5E503F'};
          color: ${isDark ? '#221F1B' : '#F2F4F3'};
          padding: 1rem;
          margin-left: 15px;
          border-radius: 3px;
          outline: none;
          cursor: pointer;
          
          &:hover {
            background-color: ${isDark ? '#5E503F' : '#DED6CE'};
            color: ${isDark ? '#F2F4F3' : '#221F1B'};
          }
      `}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )
}

export default Footer
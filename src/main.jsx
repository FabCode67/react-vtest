import { render } from 'vitest'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

test('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    div
  )
  expect(div.querySelector('h1').textContent).toBe('Vite + React')
})

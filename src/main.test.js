/* eslint-env node */

import { describe, it, expect, beforeEach } from 'vitest'
import fs from 'fs'
import path from 'path'

// Set up a simulated DOM environment
beforeEach(() => {
  const html = fs.readFileSync(
    path.resolve(process.cwd(), 'index.html'),
    'utf8',
  )
  document.body.innerHTML = html
})

describe('UI Shell Layout', () => {
  it('should render the main UI panels', () => {
    const sidebar = document.querySelector('.sidebar')
    const queryBuilder = document.querySelector('.query-builder')
    const results = document.querySelector('.results')

    expect(sidebar).not.toBeNull()
    expect(queryBuilder).not.toBeNull()
    expect(results).not.toBeNull()
  })
})

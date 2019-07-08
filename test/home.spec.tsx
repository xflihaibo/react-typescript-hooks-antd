import * as React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from '@testing-library/react'

import Home from'../src/view/home/index'
// @types/jest
// afterEach(cleanup)

describe('基础组件测试',()=>{
    it('测试首页',()=>{
        const {getByTestId }=render(<Home />)
        const [title]=[getByTestId('hb-h1')];
        expect(title.textContent).toContain('首页')
    })
})
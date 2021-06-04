// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

beforeEach(() => {
  // 🦉 If you don't cleanup, then it could impact other tests and/or cause a memory leak
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  // 🐨 create a div to render your component to (💰 document.createElement)
  let container = document.createElement('div')
  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(container)

  // 🐨 use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, container)

  // TIP: helpful for quickly getting the current HTML of the page:
  // console.log(document.body.innerHTML)

  // 🐨 get a reference to the increment and decrement buttons:
  //   💰 div.querySelectorAll('button')
  let [decrementButton, incrementButton] = container.querySelectorAll('button')

  // 🐨 get a reference to the message div:
  //   💰 div.firstChild.querySelector('div')
  let messageDiv = container.firstChild.querySelector('div')

  // 🐨 expect the message.textContent toBe 'Current count: 0'
  expect(messageDiv.textContent).toBe('Current count: 0')

  // Question for the group: KCD made separate incrementClickEvent and decrementClickEvent events. Is it OK to reuse like this?
  const clickEvent = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    button: 0, // left click
  })
  // 🐨 click the increment button (💰 increment.click())
  // incrementButton.click()
  incrementButton.dispatchEvent(clickEvent)
  // 🐨 assert the message.textContent
  expect(messageDiv.textContent).toBe('Current count: 1')

  // 🐨 click the decrement button (💰 decrement.click())
  // decrementButton.click()
  decrementButton.dispatchEvent(clickEvent)
  // 🐨 assert the message.textContent
  expect(messageDiv.textContent).toBe('Current count: 0')
})

/* eslint no-unused-vars:0 */

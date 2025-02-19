// simple test with React Testing Library
// http://localhost:3000/counter

import * as React from 'react'
// import ReactDOM from 'react-dom'
// 🐨 import the `render` and `fireEvent` utilities from '@testing-library/react'
import {render, fireEvent} from '@testing-library/react'
// the line below gives us stuff like toHaveTextContent,
// but it's already imported at the project level.
// import '@testing-library/jest-dom/extend-expect'
import Counter from '../../components/counter'

// 💣 remove this. React Testing Library does this automatically!
// beforeEach(() => {
//   document.body.innerHTML = ''
// })

test('counter increments and decrements when the buttons are clicked', () => {
  // 💣 remove these two lines, React Testing Library will create the div for you
  // const div = document.createElement('div')
  // document.body.append(div)

  // 🐨 swap ReactDOM.render with React Testing Library's render
  // Note that React Testing Library's render doesn't need you to pass a `div`
  // so you only need to pass one argument. render returns an object with a
  // bunch of utilities on it. For now, let's just grab `container` which is
  // the div that React Testing Library creates for us.
  // 💰 const {container} = render(<Counter />)
  // ReactDOM.render(<Counter />, div)
  const {container} = render(<Counter />)

  // 🐨 instead of `div` here you'll want to use the `container` you get back
  // from React Testing Library
  const [decrement, increment] = container.querySelectorAll('button')
  const message = container.firstChild.querySelector('div')

  expect(message).toHaveTextContent('Current count: 0')

  // 🐨 replace the next two statements with `fireEvent.click(button)`
  // const incrementClickEvent = new MouseEvent('click', {
  //   bubbles: true,
  //   cancelable: true,
  //   button: 0,
  // })
  // increment.dispatchEvent(incrementClickEvent)
  fireEvent.click(increment)
  expect(message).toHaveTextContent('Current count: 1')

  // const decrementClickEvent = new MouseEvent('click', {
  //   bubbles: true,
  //   cancelable: true,
  //   button: 0,
  // })
  // decrement.dispatchEvent(decrementClickEvent)
  fireEvent.click(decrement)
  expect(message).toHaveTextContent('Current count: 0')
})

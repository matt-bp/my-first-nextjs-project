import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()

    // Un-comment to see snapshot testing, will create new files to save to VCS
    // expect(container).toMatchSnapshot()
  })
})
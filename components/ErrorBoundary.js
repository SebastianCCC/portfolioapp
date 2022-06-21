import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen p-page flex flex-col justify-center">
          <h2 className="text-center text-lg">An error occurred.</h2>
          <button
            className="p-2 border dark:border-white border-black max-w-fit mx-auto mt-4 rounded hover:underline underline-offset-2"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again!
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary

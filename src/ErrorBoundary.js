import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Huh!! Somethin wrong..</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;

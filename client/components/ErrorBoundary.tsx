import { Component, type ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("UI crash captured by ErrorBoundary", error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[50vh] flex items-center justify-center text-center px-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Something went wrong.</h2>
            <p className="text-muted-foreground mt-2">Refresh the page and try again.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

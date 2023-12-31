// import React, { Component, ReactNode } from 'react';

// interface State {
//   hasError: boolean;
//   error: Error | null;
// }

// interface Props {
//   children: ReactNode;
// }

// class ErrorBoundary extends Component<Props, State> {
//   constructor(props: Props) {
//     super(props);

//     this.state = {
//       hasError: false,
//       error: null,
//     };
//   }

//   static getDerivedStateFromError(error: Error | null) {
//     return { hasError: true, error };
//   }

//   componentDidCatch(error: Error | null, errorInfo: React.ErrorInfo) {
//     console.error('Error Boundary caught an error:', error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       return (
//         <div>
//           <h2>Что-то пошло не так</h2>
//           <p>
//             {this.state.error
//               ? this.state.error.toString()
//               : 'Неизвестная ошибка'}
//           </p>
//         </div>
//       );
//     }
//     return this.props.children;
//   }
// }

// export default ErrorBoundary;

import React, { Component, ErrorInfo } from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error: ', error, errorInfo);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

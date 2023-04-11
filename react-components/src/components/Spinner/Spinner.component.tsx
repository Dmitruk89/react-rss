import React from 'react';
import './Spinner.component.css';

export function LoadingSpinner() {
  return (
    <div className="spinner-container" data-testid="spinner-element">
      <div className="loading-spinner"></div>
    </div>
  );
}

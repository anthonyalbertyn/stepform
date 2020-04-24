import React from 'react';
import './FormPanel.css';

interface FormPanelProps {
  children: any;
}

const FormPanel: React.FC<FormPanelProps> = ({ children }) => (
  <div className="form-panel">{children}</div>
);

export default FormPanel;

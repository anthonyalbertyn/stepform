import React, { useState } from 'react';
import FormTabs from '../FormTabs';
import FormField from '../FormField';

const MultiTabForm: React.FC = () => {
  const tabData = [
    {
      tabId: 1,
      tabLabel: 'User',
      panelId: 1,
    },
    {
      tabId: 2,
      tabLabel: 'Privacy',
      panelId: 2,
    },
    {
      tabId: 3,
      tabLabel: 'Done',
      panelId: 3,
    },
  ];

  const [activeTabId, setActiveTabId] = useState(1);
  const ERROR_REQUIRED = 'Please complete this field';
  const ERROR_EMAIL = 'Please add a valid email';
  const ERROR_PASSWORD = `Password must:
  - be 10 to 20 chracters long
  - have at least one upper case letter
  - have at least one lower case letter
  - have at least one number
  `;

  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getPanelId = (id: number) => {
    let tabId;
    if (tabData && tabData.length > 0) {
      const tabItemData = tabData.filter((item) => item.tabId === id);
      if (tabItemData.length > 0) {
        tabId = tabItemData[0].tabId;
      }
    }
    return tabId;
  };

  const handleTabClick = (tabId: number) => {
    setActiveTabId(tabId);
  };

  const isValidEmail = (userInput: string) => {
    // credit: https://tylermcginnis.com/validate-email-address-javascript/
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInput);
  };

  const isValidPassword = (userInput: string) => {
    // credit: https://www.w3resource.com/javascript/form/password-validation.php
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,20}$/.test(userInput);
  };

  const handleFormFieldChange = (event: any) => {
    event.preventDefault();
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'role':
        setRole(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        console.error('form field error');
    }
  };

  const handleValidation = (event: any) => {
    event.preventDefault();
    let requiredError = false;
    if (
      event.target.required &&
      (!event.target.value || event.target.value === '')
    ) {
      requiredError = true;
    }
    switch (event.target.id) {
      case 'name':
        setName(event.target.value);
        break;
      case 'role':
        setRole(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        console.error('form field error');
    }
  };

  return (
    <div className="multi-tab-form">
      <FormTabs
        tabData={tabData}
        activeTabId={activeTabId}
        tabCallback={handleTabClick}
      />
      {getPanelId(activeTabId) === 1 && (
        <div className="form-wrapper">
          <FormField
            type="text"
            id="name"
            name="name"
            label="Name"
            value={name}
            onChange={handleFormFieldChange}
            onBlur={handleValidation}
            required
          />
          <FormField
            type="text"
            id="role"
            name="role"
            label="Role"
            value={role}
            onChange={handleFormFieldChange}
            onBlur={handleValidation}
          />
          <FormField
            type="email"
            id="email"
            name="email"
            label="Email"
            value={email}
            onChange={handleFormFieldChange}
            onBlur={handleValidation}
            required
          />
          <FormField
            type="password"
            id="password"
            name="password"
            label="Password"
            value={password}
            onChange={handleFormFieldChange}
            onBlur={handleValidation}
            required
          />
        </div>
      )}
      {getPanelId(activeTabId) === 2 && <>Privacy Form</>}
      {getPanelId(activeTabId) === 3 && <>Done Form</>}
    </div>
  );
};

export default MultiTabForm;

/*

  id,
  name,
  type,
  label,
  value,
  onChange,
  onBlur,
  required = false,
  placeholder = '',
  hasError = false,
  errorMessage = '',

*/

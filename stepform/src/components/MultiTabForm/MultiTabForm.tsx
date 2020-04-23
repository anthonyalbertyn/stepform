import React, { useState } from 'react';
import FormTabs from '../FormTabs';

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

  const handleTabClick = (tabId: number) => {
    setActiveTabId(tabId);
  };

  return (
    <div className="multi-tab-form">
      <FormTabs
        tabData={tabData}
        activeTabId={activeTabId}
        tabCallback={handleTabClick}
      />
    </div>
  );
};

export default MultiTabForm;

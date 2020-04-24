import React from 'react';
import './FormTabs.css';

interface TabData {
  tabId: number;
  tabLabel: string;
  panelId: number;
}

interface FormTabsProps {
  tabData: Array<TabData>;
  tabCallback: Function;
  activeTabId: number;
}

const FormTabs: React.FC<FormTabsProps> = ({
  tabData,
  tabCallback,
  activeTabId,
}) => {
  const handleClick = (event: any) => {
    event.preventDefault();
    tabCallback(Number(event.target.id));
  };
  return (
    <>
      {tabData.length > 0 && (
        <div className="fromtabs-wrapper">
          <ul className="form-tabs">
            {tabData.map((item) => {
              const tabClass =
                item.tabId === activeTabId ? 'tab active' : 'tab';
              const id = item.tabId.toString();
              return (
                <li key={id} id={id} className={tabClass} onClick={handleClick}>
                  {item.tabLabel}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default FormTabs;

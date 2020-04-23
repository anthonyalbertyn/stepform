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
              return (
                <li
                  key={item.tabId.toString()}
                  id={item.tabId.toString()}
                  className={tabClass}
                  onClick={handleClick}
                >
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

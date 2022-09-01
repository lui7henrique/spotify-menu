import { ReactNode, useMemo, useState } from "react";
import * as S from "./styles";

export type Tab = {
  label: string;
  key: string;
  panel: ReactNode;
};

export type TabsProps = {
  tabs: Tab[];
};

export const Tabs = (props: TabsProps) => {
  const { tabs } = props;

  const [activeTabKey, setActiveTabKey] = useState(tabs[0].key);

  const activePanel = useMemo(() => {
    const activeTab = tabs.find((tab) => tab.key === activeTabKey);

    return activeTab.panel;
  }, [activeTabKey, tabs]);

  return (
    <S.TabsContainer>
      <S.TabsHeader>
        {tabs.map((tab) => {
          const { key, label } = tab;
          const isActive = activeTabKey === key;

          return (
            <S.TabButton
              key={key}
              isActive={isActive}
              onClick={() => setActiveTabKey(key)}
            >
              {label}
            </S.TabButton>
          );
        })}
      </S.TabsHeader>

      {activePanel}
    </S.TabsContainer>
  );
};

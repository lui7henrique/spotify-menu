import { ReactNode } from "react";

import {
  StyledContent,
  StyledList,
  StyledTabs,
  StyledTrigger,
} from "./stitches";

type Tab = {
  label: string | ReactNode;
  value: string;
  content: ReactNode;
};

export type TabsProps = {
  tabs: Array<Tab>;
  defaultValue: string;
  ariaLabel: string;
};

export const Tabs = (props: TabsProps) => {
  const { tabs, defaultValue, ariaLabel } = props;

  return (
    <StyledTabs defaultValue={defaultValue}>
      <StyledList aria-label={ariaLabel}>
        {tabs.map((tab) => {
          return <StyledTrigger value={tab.value}>{tab.label}</StyledTrigger>;
        })}
      </StyledList>

      {tabs.map((tab) => {
        return <StyledContent value={tab.value}>{tab.content}</StyledContent>;
      })}
    </StyledTabs>
  );
};

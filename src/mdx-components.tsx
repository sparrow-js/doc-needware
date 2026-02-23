import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import { Callout } from 'fumadocs-ui/components/callout';
import { Step as StepBase, Steps } from 'fumadocs-ui/components/steps';
import { Tab as TabBase, Tabs as TabsBase } from 'fumadocs-ui/components/tabs';
import type { MDXComponents } from 'mdx/types';
import React, { type ReactNode } from 'react';

function CardGroup({
  cols = 2,
  children,
  className,
  ...props
}: { cols?: number; children?: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`grid gap-3 @container ${cols === 3 ? 'grid-cols-3' : 'grid-cols-2'} @max-lg:grid-cols-1 ${className ?? ''}`.trim()}
      {...props}
    >
      {children}
    </div>
  );
}

function Step({
  title,
  children,
  ...props
}: { title?: string; children?: ReactNode } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <StepBase {...props}>
      {title ? <h3 className="not-prose font-semibold mb-2 mt-0">{title}</h3> : null}
      {children}
    </StepBase>
  );
}

function Note(props: { title?: ReactNode; children?: ReactNode }) {
  return <Callout type="info" title={props.title ?? 'Note'} {...props} />;
}

function Tabs({
  children,
  ...props
}: { children?: ReactNode } & React.ComponentProps<typeof TabsBase>) {
  const items =
    React.Children.map(children, (child) =>
      React.isValidElement(child) && typeof (child.props as { title?: string }).title === 'string'
        ? (child.props as { title: string }).title
        : null
    )?.filter(Boolean) as string[] | undefined;
  return (
    <TabsBase items={items ?? []} {...props}>
      {children}
    </TabsBase>
  );
}

function Tab({
  title,
  value,
  ...props
}: { title?: string; value?: string; children?: ReactNode } & React.ComponentProps<typeof TabBase>) {
  return <TabBase value={value ?? title} {...props} />;
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    Accordion,
    AccordionGroup: Accordions,
    CardGroup,
    Steps,
    Step,
    Note,
    Tabs,
    Tab,
    ...components,
  };
}


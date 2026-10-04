import type { ComponentType, SVGProps } from "react";

export type CommandGroup = "Navigate" | "Connect" | "Actions";

export interface CommandItem {
  id: string;
  label: string;
  group: CommandGroup;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  /** Extra search terms that don't appear in the label. */
  keywords?: string;
  /** Right-aligned hint, e.g. a URL host or a short status. */
  hint?: string;
  /** Keep the menu open after running (for actions with visible feedback). */
  keepOpen?: boolean;
  perform: () => void;
}

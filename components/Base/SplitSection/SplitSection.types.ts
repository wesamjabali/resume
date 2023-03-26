export interface SplitSectionProps {
  title: string;
  info: {
    header: string;
    left: string;
    headerUrl?: string;
    description?: string;
    footer?: string;
  }[];
}

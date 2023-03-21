export interface SplitSectionProps {
  title: string;
  info: {
    header: string;
    headerUrl: string;
    left: string;
    description?: string;
    footer?: string;
  }[];
}

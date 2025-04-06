export interface ILink {
    to: string | undefined;
    icon: string | undefined;
    label: string | undefined;
    color: "primary" | "neutral" | "error" | "secondary" | "success" | "info" | "warning" | undefined;
    variant: "subtle" | "ghost" | "link" | "solid" | "outline" | "soft" | undefined;
}
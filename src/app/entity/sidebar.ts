export interface Sidebar {
    title: string;
    url: string;
    icon: any;
    children: Children[];
}

interface Children{
    title: string;
    subtitle: string;
    url: string;
    icon: any;
}

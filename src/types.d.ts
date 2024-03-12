export interface ToolConfig {
    title: string;
    desc: string;
    path: string;
    icon: string;
}

declare module "*.vue" {
    import { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
import styled from "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            primary: string;
            secondary: string;
            text: string;
            icons: string;
            iconsidebar: string;
            table: string;
        }
    }
}
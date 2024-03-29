import { Layout as Root } from "./layout";
import { LayoutFooter } from "./layoutFooter";
import { LayoutHeader } from "./layoutHeader";
import { LayoutMain } from "./layoutMain";
import { LayoutMainColumn } from "./layoutMainColumn";

LayoutMain.Column = LayoutMainColumn;
Root.Footer = LayoutFooter;
Root.Header = LayoutHeader;
Root.Main = LayoutMain;

export const Layout = Root;
import { Container as Root } from "./container"
import { ContainerHeader } from "./containerHeader";
import { ContainerBody } from "./containerBody";

Root.Header = ContainerHeader;
Root.Body = ContainerBody;

export const Container = Root;
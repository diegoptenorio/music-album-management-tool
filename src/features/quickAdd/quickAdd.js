import { Container } from "../../components";

export const QuickAdd = ({ children }) => (
  <Container>
    <Container.Header title="Quick add"/>
    <Container.Body>{children}</Container.Body>
  </Container>
);

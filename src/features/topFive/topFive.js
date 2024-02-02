import { Container } from "../../components";

export const TopFive = ({ children }) => (
  <Container>
    <Container.Header title="Top 5" />
    <Container.Body>{children}</Container.Body>
  </Container>
);

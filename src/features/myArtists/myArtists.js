import PlusIcon from "../../assets/img/plus.svg";
import { Button, Container } from "../../components";

export const MyArtists = ({ children }) => (
  <Container>
    <Container.Header
      title="My artists"
      complement={
        <Button
          icon={<img src={PlusIcon} alt="add artist" draggable={false} />}
          onClick={() => void 0}
          radius={5}
        />
      }
    />
    <Container.Body>{children}</Container.Body>
  </Container>
);
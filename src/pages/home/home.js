import { Layout } from "../../layout";
import { MyArtists, QuickAdd, TopFive } from "../../features";
import { Copyright, Logo, User } from "../../components";

export const Home = () => {
  return (
    <Layout>
      <Layout.Header>
        <Logo />
        <User />
      </Layout.Header>
      <Layout.Main>
        <Layout.Main.Column>
          <MyArtists />
        </Layout.Main.Column>
        <Layout.Main.Column>
          <TopFive />
          <QuickAdd />
        </Layout.Main.Column>
      </Layout.Main>
      <Layout.Footer>
        <Copyright />
      </Layout.Footer>
    </Layout>
  );
};
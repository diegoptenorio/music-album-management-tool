import { Layout } from "../../layout";
import { MyArtists } from "../../features";
import { Copyright, Logo, User } from "../../components";

export const Home = () => (
  <Layout>
    <Layout.Header>
      <Logo />
      <User />
    </Layout.Header>
    <Layout.Main>
      <MyArtists />
    </Layout.Main>
    <Layout.Footer>
      <Copyright />
    </Layout.Footer>
  </Layout>
);
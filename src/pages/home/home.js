import { Layout } from "../../layout";
import MyArtists from "../../features/myArtists";
import useMyArtists from "../../features/myArtists/useMyArtists";
import TopFive from "../../features/topFive";
import QuickAdd from "../../features/quickAdd";
import { Copyright, Logo, User } from "../../components";

export const Home = () => {
  const { artistList, handleSearch, searchValue } = useMyArtists();
  return (
    <Layout>
      <Layout.Header>
        <Logo />
        <User />
      </Layout.Header>
      <Layout.Main>
        <Layout.Main.Column>
          <MyArtists>
            <MyArtists.Search
              handleSearch={handleSearch}
              searchValue={searchValue}
            />
            <MyArtists.List artistList={artistList} />
          </MyArtists>
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
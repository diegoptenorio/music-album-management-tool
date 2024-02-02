import YoutubeLogo from "../../assets/img/youtube.svg";
import PencilIcon from "../../assets/img/pencil.svg";
import TrashIcon from "../../assets/img/trash.svg";
import "./myArtists.scss";

export const MyArtistsList = ({ artistList }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th className="colName">Name</th>
            <th className="colRating">Rating</th>
            <th className="colActions">Actions</th>
          </tr>
        </thead>
      </table>
      <div className="list">
        <table>
          <tbody>
            {artistList.map((artist) => (
              <tr key={artist.id}>
                <td className="colName" data-label="Name">
                  {artist.name}
                </td>
                <td className="colRating" data-label="Rating">
                  {artist.rating}
                </td>
                <td className="colActions" data-label="Actions">
                  <img src={YoutubeLogo} alt="Youtube" draggable={false} />
                  <img src={PencilIcon} alt="Edit" draggable={false} />
                  <img src={TrashIcon} alt="Delete" draggable={false} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

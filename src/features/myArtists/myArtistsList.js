import YoutubeLogo from "../../assets/img/youtube.svg";
import PencilIcon from "../../assets/img/pencil.svg";
import TrashIcon from "../../assets/img/trash.svg";
import "./myArtists.scss";

export const MyArtistsList = ({ artistList }) => {
  return (
    <div className="list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {artistList.map((artist) => (
            <tr key={artist.id}>
              <td>{artist.name}</td>
              <td>{artist.rating}</td>
              <td>
                <img src={YoutubeLogo} alt="Youtube" draggable={false} />
                <img src={PencilIcon} alt="Edit" draggable={false} />
                <img src={TrashIcon} alt="Delete" draggable={false} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

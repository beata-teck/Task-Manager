import './TeamCard.css';

export default function TeamCard({ team_name, role, avatar }) {
  const avatarSrc = avatar || 'https://via.placeholder.com/80?text=?';

  return (
    <div className="member-container">
      <img className="team-avatar" src={avatarSrc} alt={team_name} />
      <div className="team-info">
        <h3>{team_name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}
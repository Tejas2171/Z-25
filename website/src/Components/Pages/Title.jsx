export default function Title({ title, handleMouseEnter, handleMouseLeave,link }) {
    return (
      <div
        className="title-item"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
        <h1 className="menu-title">{title}</h1>
        <h1 className="menu-title clone">{title}</h1>
        </a>
      </div>
    );
  }


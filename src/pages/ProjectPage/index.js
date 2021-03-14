import useMediaQuery from "../../hooks/useMediaQuery";
import Button from "../../components/Button";
import GitHubIcon from "../../icons/GitHub";
import LaunchIcon from "../../icons/Launch";

export default function ProjectPage({ title, description, techStack, repo, deployed, preview }) {
  const isBigDesktop = useMediaQuery("(min-width: 992px)");

  const infoStyles = {
    margin: isBigDesktop ? "0 50px 20px 50px" : "0 0 20px 0",
    padding: "25px",
    display: "flex",
    flexDirection: "column",
  };

  const titleStyles = {
    fontSize: "30px",
    color: "var(--accentGreen)",
    textShadow: "1px 1px var(--accentBlue)",
  };

  const descriptionStyles = {
    width: "420px",
    margin: "14px 0",
    color: "var(--darkTextBold)",
    textShadow: "0.5px 0.5px var(--accentBlue)",
  };

  const techStyles = {
    color: "var(--darkTextBold)",
    fontSize: "16px",
    fontWeight: "400",
    textShadow: "0.5px 0.5px var(--accentBlue)",
  };

  const listStyles = {
    marginLeft: "24px",
    color: "var(--darkTextBold)",
    textShadow: "0.5px 0.5px var(--accentBlue)",
  };

  const buttonsWrapStyles = {
    width: "500px",
    margin: "0 auto",
    display: "flex",
  };

  const iconStyles = {
    width: "30px",
    height: "30px",
    marginRight: "7px",
    fill: "var(--darkTextNeutral)",
  };

  const previewStyles = {
    width: "100%",
    "-o-object-fit": "contain",
    "object-fit": "contain",
    "-webkit-filter": "drop-shadow(0 0 5px var(--accentBlue))",
    filter: "drop-shadow(0 0 5px var(--accentBlue))",
  };

  return (
    <main className='scroll'>
      <article style={infoStyles}>
        <h3 style={titleStyles}>{title}</h3>
        <p style={descriptionStyles}>{description}</p>
        <h6 style={techStyles}>Technologies used:</h6>
        <ul style={listStyles}>
          {techStack?.map((tech, i) => (
            <li key={i}>{tech}</li>
          ))}
        </ul>
      </article>

      <div style={buttonsWrapStyles}>
        {repo && (
          <Button dark onClick={() => window.open(repo, "_blank")}>
            <GitHubIcon style={iconStyles} />
            Source Code
          </Button>
        )}
        {deployed && (
          <Button dark onClick={() => window.open(deployed, "_blank")}>
            <LaunchIcon style={iconStyles} />
            Launch App
          </Button>
        )}
      </div>

      <img style={previewStyles} src={preview} alt='preview' />
    </main>
  );
}

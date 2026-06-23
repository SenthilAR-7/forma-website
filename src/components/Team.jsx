import styles from "./Team.module.css";

const team = [
  {
    name: "Ramkumar G",
    role: "Principal Architect",
    image: "/team/Ramkumar.jpeg",
    bio: "Leading the design vision of T2BArchitects with over 6 years of experience in architecture, interiors, and project execution.",
  },
  {
    name: "Hariharan",
    role: "Senior Design Engineer",
    image: "/team/Hariharan.png",
  },
  {
    name: "Parani",
    role: "Senior Site Engineer",
    image: "/team/Parani.png",
  },
  {
    name: "Subalakshmi",
    role: "Senior Architect",
    image: "/team/Subalakshmi.png",
  },
  {
    name: "Ramprakash",
    role: "Interior Designer",
    image: "/team/Ramprakash.png",
  },
];

export default function Team() {
  return (
    <section className={styles.section} id="team">
      <span className="section-label reveal">Our Team</span>

      <h2 className="team-title reveal">
        The people behind
        <br />
        <em>T2BArchitects</em>
      </h2>

      <div className={styles.layout}>
        <div className={styles.founderImage}>
          <img src={team[0].image} alt={team[0].name} loading="lazy" />
          <div className={styles.founderContent}>
            <h3>{team[0].name}</h3>
            <span>{team[0].role}</span>
            <p>{team[0].bio}</p>
          </div>
        </div>

        <div className={styles.teamGrid}>
          {team.slice(1).map((member) => (
            <div key={member.name} className={styles.memberCard}>
              <img src={member.image} alt={member.name} loading="lazy" />
              <h4>{member.name}</h4>
              <span>{member.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

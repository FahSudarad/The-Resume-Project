import skills from "../data/skills";
function Skills() {
  return (
    <>
      <div className="skills">
        <h1>SKILLS</h1>
        <div className="skills-box-all">
          {skills.map((item, index) => {
            return (
              <>
                <div className="skills-box" key={index}>
                  <img src={item.img} alt={item.skill} />
                  <h3>{item.skill}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Skills;

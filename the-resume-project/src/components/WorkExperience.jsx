import workExperience from "../data/workExperience";
function WorkExperience() {
  return (
    <>
      <div className="work-experience">
        <h1>WORK EXPERIENCE</h1>
        <div className="work-box">
          {workExperience.map((item, index) => {
            return (
              <>
                <div className={`box-${item.id}`} key={index}>
                  <div className="work-img">
                    <img className="work-img" src={item.img} alt={item.name} />
                  </div>
                  <div className="work-title">
                    <h3>{item.name}</h3>
                  </div>
                  <div className="work-info">{item.description}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default WorkExperience;

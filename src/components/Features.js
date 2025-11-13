import React from "react";


const Features = () => {
  const r = ""
  return (
    <section id="features" className="py-5-m">
      <div className="container-fet">
      
        <div className="row g-4" style={{padding:"50px"}}>
          <div className="col-md-4">
            <div className="glass p-4 h-100 text-center">
              <h5 className="fw-bold" style={{color:" #7b2ff7"}}>Hyaluronic Acid</h5>
              <p className="mb-0 text-muted">BDeeply hydrates and plumps the skin.
Locks in moisture for a smoother, fresher glow.
Feel the softness and lasting comfort all day.
              </p>
              <img src="https://i.pinimg.com/736x/77/d1/01/77d10196650e79522fec098bde097546.jpg"/>
            </div>
          </div>
          <div className="col-md-4">
            <div className="glass p-4 h-100 text-center">
              <img src="https://i.pinimg.com/1200x/98/46/86/984686d5411bfb3fb117b31e59f4d989.jpg"/>
              <h5 className="fw-bold" style={{color:" #7b2ff7"}}>Peptide Repair Blend</h5>
              <p className="mb-0 text-muted">
Strengthens skin and restores elasticity.
<br/>Reduces fine lines for a youthful appearance.
Smooth, firm, and beautifully renewed.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="glass p-4 h-100 text-center">
              <h5 className="fw-bold" style={{color:" #7b2ff7"}}>DVitamin C Complex</h5>
              <p className="mb-0 text-muted">Energizes dull skin and boosts radiance.
                 <br/> Fights dark spots for a clear, even tone.
                       Bright, fresh, and full of life — just like you.
              </p>
              <img src="https://i.pinimg.com/736x/25/78/52/2578524263d57e61ee17b7eab14855b9.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

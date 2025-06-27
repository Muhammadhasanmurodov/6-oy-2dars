import headPhone from "../assets/headphone.jpg";

export default function MainOne() {
  return (
    <div>
      <div className="card">
        <div className="container container-card">
          <img className="headPhone" src={headPhone} alt="headPhone" />
          <div className="card-text">
            <h5 className="text-sub-title">NEW PRODUCT</h5>
            <h2 className="text-title">XX99 Mark II Headphones</h2>
            <p className="text-description">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>

            <button className="text-btn">See Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

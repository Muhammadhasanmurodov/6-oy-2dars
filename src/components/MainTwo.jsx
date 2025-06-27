import headPhone from "../assets/headphoneTwo.jpg";

export default function MainTwo() {
  return (
    <div>
      <div className="card">
        <div className="container container-card">
          <div className="card-text">
            <h2 className="text-title">XX99 Mark II Headphones</h2>
            <p className="text-description">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>

            <button className="text-btn">See Product</button>
          </div>
          <img className="headPhone" src={headPhone} alt="headPhone" />
        </div>
      </div>
    </div>
  );
}

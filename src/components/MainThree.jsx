import headPhone from "../assets/headphoneThree.jpg";

export default function MainThree() {
  return (
    <div>
      <div className="card">
        <div className="container container-card">
          <img className="headPhone" src={headPhone} alt="headPhone" />
          <div className="card-text">
            <h2 className="text-title">XX59 Headphones</h2>
            <p className="text-description">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
            </p>

            <button className="text-btn">See Product</button>
          </div>
        </div>
      </div>
    </div>
  );
}

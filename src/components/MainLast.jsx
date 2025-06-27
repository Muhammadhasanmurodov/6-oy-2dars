import man from "../assets/man.jpg";

export default function MainLast() {
  return (
    <div>
      <div className="card">
        <div className="container container-card">
          <div className="card-text">
            <h2 className="text-title">Bringing you the <span>best</span> audio gear</h2>
            <p className="text-description">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>
          <img
            className="man"
            src={man}
            alt="headPhone"
            width={540}
            height={588}
          />
        </div>
      </div>
    </div>
  );
}

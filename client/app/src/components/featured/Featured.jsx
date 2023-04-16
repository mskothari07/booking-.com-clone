import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=Jaipur,Udaipur,Ajmer,Jodhpur,Jaisalmer,Lonavala"
  );

  //    console.log(data);

  return (
    <div className="">
      <h1 className="listHeadingH1">Explore India</h1>
      <h2 className="listHeadingH2">
        These popular destinations have a lot to offer
      </h2>
      <div className="featured">
        {loading ? (
          "Hang Up tight we coming are coming"
        ) : (
          <>
            <div className="featuredItem">
              <img
                src="https://r-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o="
                alt="hotels"
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Jaipur</h1>
                <h2>{data[0]} properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o="
                alt="hotels"
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Udaipur</h1>
                <h2>{data[1]} properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://r-xx.bstatic.com/xdata/images/city/170x136/684880.jpg?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o="
                alt="hotels"
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Ajmer</h1>
                <h2>{data[2]} properties</h2>
              </div>
            </div>
            <div className="featuredItem">
              <img
                src="https://r-xx.bstatic.com/xdata/images/region/170x136/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=="
                alt="hotels"
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Jodhpur</h1>
                <h2>{data[3]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o="
                alt="hotels"
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Jaisalmer</h1>
                <h2>{data[4]} properties</h2>
              </div>
            </div>

            <div className="featuredItem">
              <img
                src="https://r-xx.bstatic.com/xdata/images/region/170x136/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o=="
                alt="hotels"
                className="featuredImg"
              />
              <div className="featuredTitles">
                <h1>Lonavala</h1>
                <h2>{data[5]} properties</h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Featured;

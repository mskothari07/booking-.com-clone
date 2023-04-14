import "./featured.css"

const Featured = () => {

   

    return (
        <div className="">
        <h1  className="listHeadingH1">Explore India</h1>
        <h2 className="listHeadingH2">These popular destinations have a lot to offer</h2>
        <div className="featured">
            <div className="featuredItem">
                <img src="https://q-xx.bstatic.com/xdata/images/region/170x136/49646.jpg?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=" alt="hotels" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Goa</h1>
                    <h2>5,233 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684765.jpg?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=" alt="hotels" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>New Delhi</h1>
                    <h2>2,918 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/971346.jpg?k=40eeb583a755f2835f4dcb6900cdeba2a46dc9d50e64f2aa04206f5f6fce5671&o=" alt="hotels" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Mumbai</h1>
                    <h2>1,615 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/city/170x136/684880.jpg?k=e39b50ba8be4c6c6c413c963af6e0d452dbe0decaf72e13f9f798e65de549107&o=" alt="hotels" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Rishikesh</h1>
                    <h2>657 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://r-xx.bstatic.com/xdata/images/region/170x136/68606.jpg?k=4b43b9128b79beaab4ca2e8c038ddf5709b0b90608afbca222cfbe08fabda7d2&o==" alt="hotels" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>North Goa</h1>
                    <h2>3,192 properties</h2>
                </div>
            </div>
            <div className="featuredItem">
                <img src="https://q-xx.bstatic.com/xdata/images/city/170x136/684919.jpg?k=0a73fce29109503c055e288c413d9a1c5bd66fdb26f01c1438e8017b0b64b42f&o=" alt="hotels" className="featuredImg" />
                <div className="featuredTitles">
                    <h1>Ooty</h1>
                    <h2>479 properties</h2>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Featured
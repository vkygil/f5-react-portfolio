import './MainPage.css';
const Works = () => {
    const works = [
        { img: "http://dummyimage.com/600x300/000000/ffffff.png", name: "1" },
        { img: "http://dummyimage.com/600x300/eeeeee/cccccc.png", name: "2" },
        { img: "http://dummyimage.com/600x300/000000/ffffff.png", name: "3" },
        { img: "http://dummyimage.com/600x300/eeeeee/cccccc.png", name: "4" },
    ]
    return (
        <div class="worksContainer" style={{ overflowX: "hidden" }}>
            <p>
                my works
            </p>
            <div style={{}} >

                <div className="banner" style={{ display: "flex", width: "400%" }}>
                    {
                        works.map((x) =>
                            <div>
                                <img style={{ width: "100%" }} src={x.img}></img>
                                <p>Name {x.name}</p>
                            </div>
                        )
                    }
                    {
                        works.map((x) =>
                            <div>
                                <img style={{ width: "100%" }} src={x.img}></img>
                                <p>Name {x.name}</p>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
export default Works
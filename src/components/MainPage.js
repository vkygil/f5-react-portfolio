import './MainPage.css';
// import Note from "./Note"
const MainPage = ({ data }) => {
    return (
        <div className="flex align-c vh100">
            <div className="flex fl-dir-col align-c left basis-30" style={{ "flex-basis": "30%" }}>
                <img className="rounded" src="/img.jpg" />
                <h2>Sukhchain Singh</h2>
            </div>
            <div className="right basis-50">
                <p style={{ "font-size": "5em", fontWeight: "bold", margin: 0 }}>Web<br /> Developer</p>
                <p>Barcelona, Spain</p>
            </div>
        </div>
    )
}

export default MainPage
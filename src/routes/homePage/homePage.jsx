import SearchBar from '../../components/searchbar/SearchBar'
import './homePage.scss'


function HomePage() {
    return (
        <div className="homePage">
            <div className="text-container">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get your Dream Place</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus dolore perspiciatis explicabo velit adipisci ab, impedit tenetur optio architecto placeat!
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Properties ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage
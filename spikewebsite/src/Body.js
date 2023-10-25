

function Body() {
    return (
        <div className="Body">
            <div className="FeaturedPost">
                <div className="FeaturedPostBlur">
                    <div className="FeaturedPostText">
                        <h1>First Post!</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
                    </div>
                </div>
            </div>
            <div id="PostContainer">
                <div className="OtherPost">
                    <div className="OtherPostImg">

                    </div>
                    <div className="OtherPostText">
                        <h1>Ipsum</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et...</p>
                        <button className="OtherPostButton">
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body;
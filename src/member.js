import React, { useState } from "react";

function Member() {

    const [percent, setPercent] = useState(0);

    const handleClick = () => {
        //console.log("111");
        setPercent( (percent) => percent += 1 );
        console.log(percent);

        document.getElementsByClassName('percent')[0].style.width = percent + 'px';
    }

    return(
        <div className="member">
            <img onClick={handleClick} alt="bp-member" className="member" src="https://m.media-amazon.com/images/M/MV5BMTJmNGJmYTgtYjAxNy00YmMzLTk2YTYtMGIzMmUwNDMyMTY1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg" />
            <p>name</p>
            <div className="percent">..</div>
        </div>
    );
}

export default Member;
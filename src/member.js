import React, { useState } from "react";

function Member(props) {

    const [percent, setPercent] = useState(0);

    const handleClick = (e) => {
        console.log(e.target.id);
        setPercent( (percent) => percent += 1 );
        console.log(percent);

        document.getElementsByClassName('percent')[e.target.id].style.width = percent + 50 + 'px';
    }

    return(
        <div className="member">
            <img onClick={handleClick} alt="bp-member" className="member" src={props.img} id={props.idimg} />
            <div className="percent">.</div>
        </div>
    );
}

export default Member;
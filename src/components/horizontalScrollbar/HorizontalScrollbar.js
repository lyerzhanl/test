import React, {useContext} from 'react';
import BodyPart from "../bodyPart/BodyPart";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

const HorizontalScrollbar = ({data, bodyPart, setBodyPart}) => {

    const LeftArrow = () => {
        const { scrollPrev } = useContext(VisibilityContext);

        return (
            <div onClick={() => scrollPrev()}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
        );
    };

    const RightArrow = () => {
        const { scrollNext } = useContext(VisibilityContext);

        return (
            <div onClick={() => scrollNext()} style={{color: "#fff", fontSize: "3rem"}} className="rightArrow">
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
        );
    };

    return (
        <>
            {data.map((item) => (
                <div
                    className="workout-icon"
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                >
                    <div><BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} /></div>
                </div>
            ))}
        </>
    );
};

export default HorizontalScrollbar;
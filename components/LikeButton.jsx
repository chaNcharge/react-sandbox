import { useState } from "react";

export function LikeHeader({label}) {
    return (
        <h2>{label}</h2>
    )
}

export default function LikeButton({label, startLikes = 0}) {
    let content;

    const [likes, setLikes] = useState(startLikes);
    const [buttonPressed, setPressed] = useState(false);

    function handleClick() {
        setLikes(likes + 1);
        setPressed(true);
    }

    if (buttonPressed) {
        content = <p>Button has been pressed!</p>
    } else {
        content = <p>Button not yet pressed!</p>
    }

    return (
        <div>
            {content}
            <button onClick={handleClick}>{label} ({likes})</button>
        </div>
    );
}
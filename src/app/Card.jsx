import useState from 'react';
import { GetPrompts } from './input.jsx';
import { LikeButton, DislikeButton } from './button.jsx';
export default function Card(props) {
    // const [input, setInput] = useState([])
    return (
        <>
        {/* <div>
          <h1>Question Here</h1>
          THIS IS A CARD
        </div>
        */}
        {/* image */}
        <div>
          <LikeButton />
          <DislikeButton />
        </div>
        </>
    );
}
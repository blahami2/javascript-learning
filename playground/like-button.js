"use strict";

// might not work due to CORS (Cross-Origin Request)
function LikeButton(props) {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return "You liked comment number " + props.commentID;
  }

  return <button onClick={() => setLiked(true)}>Like</button>;
}

// Find all DOM containers, and render Like buttons into them.
// Note we're using CSS classes instead of IDs so that we can find several nodes.
document.querySelectorAll(".like-button-root").forEach((rootNode) => {
  const root = ReactDOM.createRoot(rootNode);
  // Read the comment ID from a data-* attribute.
  const commentID = parseInt(rootNode.dataset.commentid, 10);
  root.render(React.createElement(LikeButton, { commentID: commentID }));
});

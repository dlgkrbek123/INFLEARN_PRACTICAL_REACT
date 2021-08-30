const LikeButton = () => {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? '좋아요 취소' : '좋아요';

  return React.createElement(
    'button',
    { onClick: () => setLiked(!liked) },
    text
  );
};

const root1 = document.getElementById('root1');
const root2 = document.getElementById('root2');
const root3 = document.getElementById('root3');

ReactDOM.render(React.createElement(LikeButton), root1);
ReactDOM.render(React.createElement(LikeButton), root2);
ReactDOM.render(React.createElement(LikeButton), root3);

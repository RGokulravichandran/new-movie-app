import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

export function Count() {
  const [like, setlikecount] = useState(0);
  const [dislike, setdislikecount] = useState(0);
  const likeincrement = () => setlikecount(like + 1);
  const dislikeincrement = () => setdislikecount(dislike + 1);
  return (
    <div>
      {/* <button onClick={likeincrement} >👍{like}</button> */}
      <IconButton onClick={likeincrement} color="primary" aria-label="like button"><Badge badgeContent={like} color="primary">👍</Badge></IconButton>
      {/* <button onClick={dislikeincrement}>👎{dislike}</button> */}
      <IconButton onClick={dislikeincrement} color="error" aria-label="dislike button"><Badge badgeContent={dislike} color="error">👎</Badge></IconButton>

    </div>
  );
}

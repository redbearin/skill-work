const likeOrDislike = (pushes) => {
  let status = 'Nothing';
  for (let index = 0; index < pushes.length; index++) {
    if (status !== pushes[index]) 
      status = pushes[index];
    else 
      status = 'Nothing';
  }
  return status;
};

const pushes = ["Like", "Dislike", "Dislike"];

likeOrDislike(pushes);
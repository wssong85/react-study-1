import React from 'react';
import Comment from "./Comment";

const comments = [
  {name: '이름1', content: '이름1입니다.~~'},
  {name: '이름2', content: '이름2입니다.~~'},
  {name: '이름3', content: '이름3입니다.~~'},
];

const CommentList = () => {

  return (
    <div>
      {
        comments.map((c) =>{
          return (
            <Comment author={c}/>
          )
        })
      }
    </div>
  );
};

export default CommentList;
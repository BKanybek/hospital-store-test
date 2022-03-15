import React from 'react';
// import Comments from './Comments/Comments';
import CommentsAdd from './CommentsNew/CommentsAdd';
// import CommentsEdit from './CommentsNew/CommentsEdit';
import CommentsList from './CommentsNew/CommentsList';

const Stream = () => {
    return (
        <div>
        {/* <Comments
          commentsUrl="http://localhost:3004/comments"
          currentUserId="1"
        /> */}
        <CommentsAdd/>
        <CommentsList/>
        {/* <CommentsEdit/> */}

      </div>
    );
};

export default Stream;


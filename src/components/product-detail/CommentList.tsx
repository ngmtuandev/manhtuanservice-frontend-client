import { useEffect } from "react";
import { useRecoilState } from "recoil";
import CommentItem from "./CommentItem";
import { stateComment, stateCommentParent } from "../../store/comment.store";
import { useGetComment } from "../../hooks";

const CommentList = ({ productId }: any) => {
  const [commentList, setCommentList] = useRecoilState<any>(stateComment);
  const [parentId] = useRecoilState(stateCommentParent);
  const { comments, refetch } = useGetComment({
    parentId: parentId || 0,
    productId,
  });
  // console.log('comments   =  >>>>>', comments)

  useEffect(() => {
    if (comments) {
      if (Array.isArray(comments)) {
        if (parentId === 0) {
          setCommentList(comments);
        } else {
          updateCommentsWithChildren(parentId, comments);
        }
      }
    }
  }, [comments, parentId]);

  const updateCommentsWithChildren = (parentId: number, children: any) => {
    const recursiveUpdate = (comments: any) => {
      return comments.map((comment: any) => {
        if (comment.id === parentId) {
          return { ...comment, children };
        } else if (comment.children) {
          return { ...comment, children: recursiveUpdate(comment.children) };
        } else {
          return comment;
        }
      });
    };
    setCommentList((prevComments: any) => recursiveUpdate(prevComments));
  };

  return (
    <div className="flex flex-col gap-4">
      {commentList &&
        commentList.map((item: any, index: number) => (
          <CommentItem
            key={index}
            data={item}
            productId={productId}
            refetchComments={refetch}
          />
        ))}
    </div>
  );
};

export default CommentList;

import { useState, useEffect } from "react";
import { Button, Textarea, User } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { useCreateComment, useGetComment } from "../../hooks";
import { toast } from "react-toastify";
import { stateComment } from "../../store/comment.store";
import { stateProductDetail } from "../../store/product-detail.store";
import { useLikeComment } from "../../hooks/comment/useLikeComment";
import { formatDate } from "../../helper/Xfunction";

const CommentItem = ({ data, productId, refetchComments }: any) => {

    const [showChildren, setShowChildren] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [_, setCommentList] = useRecoilState(stateComment);
    const { comments, refetch } = useGetComment({ parentId: data.id, productId });
    const [productDetailInfo] = useRecoilState(stateProductDetail);


    const { mutate: $createComment } = useCreateComment();
    const { mutate: $likeComment } = useLikeComment();

    useEffect(() => {
        if (showChildren && comments) {
            updateCommentsWithChildren(data.id, comments);
        }
    }, [comments, showChildren]);

    const handleLikeComment = () => {
        $likeComment(data.id, {
            onSuccess: (response) => {
                if (response?.status) {
                    toast.success("Bạn thích bình luận thành công");
                } else {
                    toast.warning("Thích bình luận thất bại !!!");
                }
            },
            onError: () => {
                toast.warning("Thích bình luận thất bại !!!");
            },
        });
    };

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
        setCommentList((prevComments) => recursiveUpdate(prevComments));
    };

    const handleLoadReplies = () => {
        setShowChildren(!showChildren);
    };

    const handleReply = () => {
        setShowReplyForm(!showReplyForm);
    };

    const handleInputChange = (e: any) => {
        setReplyText(e.target.value);
    };

    const handleReplySubmit = async (e: any) => {
        e.preventDefault();
        $createComment(
            {
                text: replyText,
                parentId: data.id,
                product: +productDetailInfo?.productId!,
            },
            {
                onSuccess: () => {
                    toast.success("Bạn đã bình luận thành công !");
                },
                onError: () => {
                    toast.warning("Bình luận thất bại");
                },
            }
        );

        setReplyText("");
        setShowReplyForm(false);
        refetchComments();
    };

    return (
        <div className="mt-6">
            <div className="flex items-center justify-between">
                <div>
                    <User
                        name={data?.user?.userName}
                        description={data?.user?.email}
                        avatarProps={{
                            src: data?.user?.avatar
                                ? data?.user?.avatar
                                : "https://i.pravatar.cc/150?u=a04258114e29026702d",
                        }}
                    />
                    <div className="flex mt-1 items-center gap-5">
                        <small className="pr-4 border-r-1">
                            {formatDate(data?.createdAt)}
                        </small>
                        <small
                            onClick={() => handleLikeComment()}
                            className="cursor-pointer hover:underline"
                        >
                            {data?.like ?? 0} lượt thích
                        </small>
                    </div>
                </div>
            </div>
            <div>
                <p className="mt-2">{data?.text}</p>
            </div>

            <div className="flex mt-1 items-center gap-5">
                <button className="text-yellow_bright" onClick={handleLoadReplies}>
                    {showChildren ? "Ẩn phản hồi" : "Xem thêm"}
                </button>
                <button className="text-yellow_bright ml-2" onClick={handleReply}>
                    Phản hồi
                </button>
            </div>

            {showReplyForm && (
                <form onSubmit={handleReplySubmit} className="mt-2 flex flex-col gap-3">
                    <Textarea
                        label="Description"
                        placeholder="Enter your description"
                        disableAnimation
                        disableAutosize
                        onChange={handleInputChange}
                        value={replyText}
                    />
                    <Button type="submit" title="Reply">Phản hồi</Button>
                </form>
            )}

            {showChildren && data.children && (
                <div className="ml-8">
                    {data.children.map((child: any) => (
                        <CommentItem
                            key={child.id}
                            data={child}
                            productId={productId}
                            refetchComments={refetch}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CommentItem;

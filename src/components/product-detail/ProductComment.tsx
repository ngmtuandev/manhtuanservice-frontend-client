import {
  Button,
  Textarea,
} from "@nextui-org/react";
import { useCreateComment } from "../../hooks";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { stateProductDetail } from "../../store/product-detail.store";
import { useRecoilState } from "recoil";
import { stateFindComment } from "../../store/find-comment.store";
import CommentList from "./CommentList";

const ProductComment = () => {

  const [text, setText] = useState("");
  const [productDetailInfo] = useRecoilState(stateProductDetail);
  const [_, setFindCommentInfo] = useRecoilState(stateFindComment);


  useEffect(() => {
    setFindCommentInfo({ parentId: 0, productId: +productDetailInfo?.productId! })
  }, [])

  const { mutate: $createComment, isLoading } = useCreateComment();

  const handleComment = (e: any) => {
    e.preventDefault();
    $createComment(
      { text, product: +productDetailInfo?.productId!, parentId: 0 },
      {
        onSuccess: (response) => {
          if (response?.status) {
            setText("");
            toast.success("Bạn đã bình luận thành công.");
          } else {
            setText("");
            toast.success("Bình luận thất bại. Vui lòng thử lại sau !!!");
          }
        },
        onError: () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Login Failure",
            footer: '<a href="#">Why do I have this issue?</a>',
          });
        },
      }
    );
  };

  return (
    <div className="w-full mt-4 ">
      <div className="mb-4">
        <Textarea
          variant="underlined"
          label="Đánh giá của bạn: "
          labelPlacement="outside"
          placeholder="Thêm bình luận của bạn"
          value={text}
          onValueChange={setText}
        />

        <Button
          isDisabled={isLoading}
          onClick={handleComment}
          color="warning"
          className="mt-4 text-white text-end"
        >
          Đánh giá
        </Button>
      </div>
      <div>
        <div>
          <CommentList productId={+productDetailInfo?.productId!}></CommentList>
        </div>
        {/* {
          comments && comments?.map((comment: any) => {
            return <CommentItem data={comment}></CommentItem>
          })
        } */}
      </div>
    </div>
  );
};

export default ProductComment;

import { Pagination } from "@nextui-org/react";
import { useRecoilState } from "recoil";
import { statePagination } from "../../store/pagination.store";

const PaginationCustom = ({ total }: any) => {

    const [pagination, setPagination] = useRecoilState(statePagination)

    const setCurrentPage = (value: number) => {
        setPagination({ ...pagination, currentPage: value })
    };
    return (
        <div className="w-full">
            {total > 0 && (
                <Pagination
                    total={total}
                    color="primary"
                    page={pagination.currentPage}
                    onChange={setCurrentPage}
                    showControls
                    showShadow={true}
                    classNames={{
                        wrapper: "mx-auto my-10",
                    }}
                />
            )}
        </div>
    )
}

export default PaginationCustom;
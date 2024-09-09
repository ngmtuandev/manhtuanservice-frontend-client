import { BreadcrumbsHook, CardNews, Footer, Header } from '../components';
import { useGetNews } from '../hooks/news/useGetNews';
import path from '../utils/path';
import InfiniteScroll from "react-infinite-scroll-component";

const breacdCrumValue = [
    {
        title: "Trang chủ",
        link: path.HOME,
    },
    {
        title: "Tin tức",
        link: path.NEWS,
    },
];


const News = () => {
    const { data, fetchNextPage, hasNextPage } = useGetNews({
        limit: 2,
    });

    const news = data?.pages?.reduce((acc, page) => {
        return [...acc, ...page.data?.results];
    }, []);

    const handleFetchNextPage = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    };

    return (
        <>
            <Header />
            <div className="w-full pl-8 pr-2 px-container my-10">
                <BreadcrumbsHook list={breacdCrumValue} />
                <div className="flex w-full mt-10 justify-between h-[3rem]">
                    <h1 className="font-bold text-2xl">TIN TỨC CÔNG NGHỆ</h1>
                </div>
                <div>
                    <InfiniteScroll
                        dataLength={news?.length ?? 0}
                        next={handleFetchNextPage}
                        hasMore={hasNextPage}
                        loader={<h4>Loading...</h4>}
                        scrollThreshold={0.9}
                    >
                        <div className="px-[2rem] gap-6 flex flex-col">
                            {data &&
                                news?.map((item: any, index: number) => {
                                    return <CardNews key={index} id={item?.id} title={item?.title} content={item?.content} thumbnail={item?.thumbnail}></CardNews>;
                                })}
                        </div>
                    </InfiniteScroll>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default News
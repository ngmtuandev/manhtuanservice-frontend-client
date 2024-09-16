import { useEffect } from 'react';
import { useGetItemNews } from '../../hooks';
import useGetParams from '../../hooks/useGetParams'
import path from '../../utils/path';
import BreadcrumbsHook from '../common/BreadcrumbsHook';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { stateNewsDetail } from '../../store/news-detail-info.store';
import { useRecoilState } from 'recoil';
import { stateBreadcumbNews } from '../../store/breadcumb-news.store';
import icons from '../../utils/icons';
import { formatDate } from '../../helper/Xfunction';
import { Image } from '@nextui-org/react';
import MarkdownRenderer from '../common/MarkdownRenderer';
import InfomationFooter from '../common/InfomationFooter';

const NewsDetail = () => {

    const [newsInfo] = useRecoilState(stateNewsDetail);
    const [breacdCrumValue, setBreacdCrumValue] = useRecoilState(stateBreadcumbNews);
    const { MdAccessTimeFilled, MdRemoveRedEye } = icons;

    const id = useGetParams();
    const { news_detail } = useGetItemNews({ newsId: +id! });

    useEffect(() => {
        if (news_detail && newsInfo.newsId !== news_detail.id) {
            setBreacdCrumValue([{
                title: "Trang chủ",
                link: path.HOME,
            },
            {
                title: "Tin tức",
                link: path.NEWS,
            }, {
                title: news_detail?.title,
                link: '',
            }])
        }
    }, [news_detail?.title]);

    return (
        <>
            <Header />
            <div className="w-full pl-8 pr-2 px-container my-10">
                <BreadcrumbsHook list={breacdCrumValue} />
                <div className="flex flex-col w-full mt-10 justify-between h-[3rem]">
                    <h1 className="font-bold text-2xl">{news_detail?.title}</h1>
                    <div className='flex gap-6 my-2'>
                        <div className='flex gap-1'>
                            <MdAccessTimeFilled size={18}></MdAccessTimeFilled>
                            <small>{formatDate(news_detail?.createdAt)}</small>
                        </div>
                        <div className='flex gap-1'>
                            <MdRemoveRedEye size={18}></MdRemoveRedEye>
                            <small>{news_detail?.view}</small>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <Image
                            src={news_detail?.thumbnail}
                            alt="NextUI Album Cover"
                            width={400}
                            className='-my-10'
                        />
                    </div>
                    <div>
                        <MarkdownRenderer markdownText={news_detail?.content}></MarkdownRenderer>
                    </div>
                </div>
                <InfomationFooter></InfomationFooter>
            </div>
            <Footer />
        </>
    )
}

export default NewsDetail
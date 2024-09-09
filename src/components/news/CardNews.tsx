import { Card, CardBody, CardHeader, Image } from "@nextui-org/react"
import { NavLink } from "react-router-dom";
import path from "../../utils/path";

type TNews = {
    title?: string;
    content?: string;
    thumbnail?: string;
    view?: number;
    id?: number;
}

const CardNews = ({ title, thumbnail, view, id }: TNews) => {

    return (
        <Card className="py-1">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <NavLink to={`${path.NEWS}/${id}`} >
                    <h3 className="hover:underline uppercase text-xl cursor-pointer font-bold">{title}</h3>
                </NavLink>
                <small className="text-default-500">Lượt xem: {view ?? 0}</small>
                {/* <h4 className="font-bold text-large"><MarkdownRenderer markdownText={content} /></h4> */}
            </CardHeader>
            <CardBody className="overflow-visible -mt-6 py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={thumbnail}
                    width={270}
                />
            </CardBody>
        </Card >
    )
}

export default CardNews
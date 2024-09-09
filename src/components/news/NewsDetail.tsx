import useGetParams from '../../hooks/useGetParams'

const NewsDetail = () => {
    const id = useGetParams();
    console.log('id customs hook : ', id);
    return (
        <div>NewsDetail</div>
    )
}

export default NewsDetail
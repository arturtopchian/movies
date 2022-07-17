import {RingLoader} from "react-spinners";
import './LoaderSize.css';

type ILoader = {
    align: string,
    size?: number,
    color?: string,
}
const Loader = ({align, size = 120, color = "#ff55a5"}: ILoader) => {
    const loaderAlign = 'loader' + '-' + align;
    return (
        <div className={loaderAlign}>
            <RingLoader size={size} color={color}/>
        </div>
    );
}
export default Loader;
import './Category.css'
import CaterogryList from './CaterogryList';

const List = ({ ctg }) => {
    const { logo, category_name, availability } = ctg;
    return (
        <div className="border rounded p-6 ctg-card">
            <div><img src={logo} alt="" /></div>
            <div>
                <h2 className="font-bold text-2xl my-2">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

export default List;
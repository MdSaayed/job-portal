import { useEffect, useState } from "react";
import List from "./List";

const CaterogryList = () => {
    const [ctgList, setCtgList] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCtgList(data));
    }, []);
    return (
        <div>
            <div className="max-w-5xl mx-auto my-8">
                <div className="py-8">
                    <h2 className="text-3xl font-bold text-center">Job Category List</h2>
                    <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-4 gap-4">
                    {ctgList.map((ctg) => <List ctg={ctg} />)}
                </div>
            </div>
        </div>
    );
};

export default CaterogryList;
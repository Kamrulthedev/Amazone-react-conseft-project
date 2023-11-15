
import { useLoaderData } from "react-router-dom";





const Prodects = () => {

    const Prodect = useLoaderData();
    console.log(Prodect)
 
 
    return (
        <div className="h-96">
            <h1 className="text-center text-7xl font-bold mt-12">KAMRUL HASSN</h1>
        </div>
    );
};

export default Prodects;
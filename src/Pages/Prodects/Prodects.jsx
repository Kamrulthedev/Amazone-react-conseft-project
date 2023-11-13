
import { useLoaderData } from "react-router-dom";
import Caert from "../Caret/Caert";




const Prodects = () => {

    const Prodects = useLoaderData()
 
 
    return (
        <div>
            <div>
              {
                  Prodects.map(Prodect => <Caert key={Prodect.id}></Caert>)
               }
             </div>
        </div>
    );
};

export default Prodects;
import { useEffect, useState } from "react";


const display = () => {

    const [data, setData] = useState(["nisanejj"]);

    useEffect(() => {
        const f_d = async () => {
            try {
                const res = await fetch(`/api/contact/display`);
                const json = await res.json();
                // console.log(true);

                const x = JSON.parse(json);

                setData(x);
              } catch (e) {
                console.error(e)
            }
        }

        f_d();
        console.log("Nishant");
    }, []);

    return (
        <>
            <div>
                <h2>Display Page</h2>
                
            </div>
        </>
    )
}

export default display;
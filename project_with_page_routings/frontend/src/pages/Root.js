import MainNavigation from "../components/MainNavigation";
import {Outlet, useNavigate, useNavigation} from "react-router-dom";

function Root() {
    // const navigation = useNavigation();

    return <>
        <MainNavigation/>
        <main>
            {/*{navigation.state === 'loading' && <p>Loading...</p>}*/}
            <Outlet/>
        </main>
    </>
}

export default Root;
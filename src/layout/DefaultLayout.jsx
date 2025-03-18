import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {

    return (

        <>

            {/* Componente Header che verrà visualizzato in tutte le pagine */}
            <Header />

            <main>
                {/* Outlet rappresenta il punto in cui verranno renderizzati i componenti delle pagine */}
                <Outlet />
            </main>

        </>

    )

}
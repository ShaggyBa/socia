import React from "react";
import {Preloader} from "../components/Common/Preloader/Preloader";

function WithSuspense(WrappedComponent) {
        return (props) => {
            return <React.Suspense fallback={<Preloader/>}>
                <WrappedComponent {...props} />
            </React.Suspense>
        }
}
export default WithSuspense
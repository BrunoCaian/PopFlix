import { FadeLoader } from "react-spinners";
import { RotatingLines } from "react-loader-spinner";

export default function LoadingComponent() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            inset: 0,
            position: 'fixed',

            backgroundColor: 'rgba(15, 23, 43, 0.8)',
            zIndex: 9999
        }}>
            <RotatingLines
                visible={true}
                height="150"
                width="150"
                strokeColor="#fff"
                strokeWidth="5"
            />
        </div>
    )
}
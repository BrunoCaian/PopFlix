import { FadeLoader } from "react-spinners";

export default function LoadingComponent() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            width: '100vw',
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(15, 23, 43, 0.8)', 
            zIndex: 9999
        }}>
            <FadeLoader
                color="#ffffff"
                height={30}
                margin={50}
                radius={15}
                width={30}
            />
        </div>
    )
}
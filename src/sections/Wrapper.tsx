import "../styles/sections/Wrapper.scss";

export const Wrapper = (Component:React.FC) => {
    return (
        <div className='content'>
            <Component />
        </div>
    )
}

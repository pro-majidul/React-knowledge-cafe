import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className=" w-11/12 mx-auto">
            <div className=" p-4 flex justify-between items-center border-b-2">
            <h3 className=' text-4xl font-bold '> Knowledge Cafe</h3>
            <img src={Profile} alt="" />
            </div>
        </header>
    );
};

export default Header;
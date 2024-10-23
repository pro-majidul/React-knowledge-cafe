import Profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className=" max-w-7xl mx-auto">
            <div className=" p-4 flex justify-between items-center border-b-2">
            <h3 className=' md:text-4xl text-2xl font-bold '> Knowledge Cafe</h3>
            <img src={Profile} alt="" />
            </div>
        </header>
    );
};

export default Header;
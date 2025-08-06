import { useState } from 'react'; 

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Products', link: '/products' },
    ];

    return (
        <>
            <header className='bg-gradient-to-r from-sky-700 to-sky-400 text-white p-4'>
                <div className='container mx-auto py-2'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <img src="/images/LOGO.png" alt="Company Logo" className='inline-block mr-2 w-24 h-24' />
                            <h1 className='text-2xl font-bold'>Twitch TuTaTa</h1>
                        </div>

                        <nav className='hidden lg:flex items-center space-x-8'>
                            {menuItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.link}
                                    className='text-lg py-2 hover:text-gray-300 transition-all duration-300 font-semibold hover:underline'
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>

                    </div>

                    <nav className={`lg:hidden absolute left-0 top-0 w-2/3 bg-sky-400 text-white h-full transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                        <div className='p-4'>

                            <button onClick={toggleMenu} className='text-white absolute top-4 right-4 focus:outline-none'>
                                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
                                </svg>
                            </button>
                            <div className='mt-10'> 
                                {menuItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        className='block text-lg py-2 hover:text-gray-300 transition-all duration-300 font-semibold hover:underline'
                                        onClick={toggleMenu} 
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;

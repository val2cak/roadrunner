import Link from 'next/link';
import slugify from 'slugify';
import { useRouter } from 'next/router';

const NavBar = ({ classes, navigationItems }) => {
    const router = useRouter();
    const isActive = (pathname) =>
        router.pathname.split('/')[1] === pathname.split('/')[1];
    return (
        <nav
            className={`${
                classes ? 'block' : 'hidden'
            } pr-4 lg:inline-flex font-medium  ${classes}`}
        >
            {navigationItems.map((item, index) => {
                const menuItemPath = index
                    ? `/${slugify(item, { lower: true })}`
                    : '/';
                return (
                    <Link key={item} href={menuItemPath} passHref>
                        <a
                            className={`no-underline mb-2.5 px-7 lg:px-8 py-2 whitespace-nowrap hover:bg-hci-general-dark font-regular text-2xl ${
                                isActive(menuItemPath)
                                    ? 'bg-hci-general-dark text-white font-bold'
                                    : ''
                            } hover:text-white cursor-pointer text-hci-general-dark`}
                        >
                            {item}
                        </a>
                    </Link>
                );
            })}
        </nav>
    );
};

export default NavBar;

'use client';
import Link from 'next/link';
import styles from './navbar.module.scss';

type NavbarProps = {};

export const Navbar = (props: NavbarProps) => {
  const links = [
    {
      id: 1,
      title: 'Home',
      url: '/',
    },
    {
      id: 2,
      title: 'Portfolio',
      url: '/portfolio',
    },
    {
      id: 3,
      title: 'Blog',
      url: '/blog',
    },
    {
      id: 4,
      title: 'About',
      url: '/about',
    },
    {
      id: 5,
      title: 'Contact Us',
      url: '/contact-us',
    },
    {
      id: 6,
      title: 'Dashboard',
      url: '/dashboard',
    },
  ];

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Some Blog
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button className={styles.logout} onClick={() => console.log('Logout')}>
          Logout
        </button>
      </div>
    </div>
  );
};

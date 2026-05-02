import { useState, useEffect } from "react";
import logoHeaderWebp from '@assets/img/webp/common/logo-header.webp';
import logoHeader from '@assets/img/common/logo-header.png';
import logoNavWebp from '@assets/img/webp/common/logo-nav.webp';
import logoNav from '@assets/img/common/logo-nav.png';

interface NavItem {
	id: number;
	name: string;
	href: string;
}

const NAV_ITEMS: NavItem[] = [
	{ id: 1, name: 'Data Knowledge とは', href: '#block-01' },
	{ id: 2, name: '導入効果', href: '#block-02' },
	{ id: 3, name: '3つのポイント', href: '#block-03' },
	{ id: 4, name: '導入をご検討の方へ', href: '#block-04' },
	{ id: 5, name: '導入事例', href: '#block-05' },
	{ id: 6, name: '価格', href: '#block-06' },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		document.documentElement.classList.toggle("js-locked", isOpen);

		return () => {
			document.documentElement.classList.remove("js-locked");
		};
	}, [isOpen]);


	return (
		<>
			<header id="header">
				<a href="" className="header-logo">
					<picture>
						<source srcSet={logoHeaderWebp} type="image/webp" />
						<img src={logoHeader} alt="DaTa Knowledge" />
					</picture>
				</a>
				<nav className={`header-nav ${isOpen ? 'header-nav--open' : ''}`}>
					<div className="header-nav__show">
						<ul className="header-nav__menu">
							{
								NAV_ITEMS.map((item) => (
									<li key={item.id} className="header-nav__menu-item">
										<a href={item.href} className="js-scroll">{item.name}</a>
									</li>
								))
							}
						</ul>
						<a href="" className="header-nav__logo ">
							<picture>
								<source srcSet={logoNavWebp} type="image/webp" />
								<img src={logoNav} alt="DaTa Knowledge" />
							</picture>
						</a>
					</div>
					<a href="https://www.dataknowledge.jp/contact.html" className="header-contact">
						お問い合わせ
					</a>
				</nav>
				<span className={`js-mobile ${isOpen ? 'js-mobile--close' : ''}`} onClick={() => setIsOpen(!isOpen)}>
					<span></span>
				</span>
			</header>
		</>
	)
}

export default Header;
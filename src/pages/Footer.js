import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/footer.css"

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const icons = [
        { icon: InstagramIcon, link: "/", name: "Instagram" },
        { icon: FacebookIcon, link: "/", name: "Facebook" },
        { icon: GitHubIcon, link: "/", name: "GitHub" },
        { icon: LinkedInIcon, link: "/", name: "LinkedIn" }
    ];

    return (
        <footer className="footer-distributed">
            <div className="footer-center">
                <div>
                    <i className=""></i>
                    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">support@company.com</a></p>
                </div>
            </div>

            <div className="footer-right">
                <p className="footer-company-about">
                    <span>Social Media</span>
                    Lorem ipsum dolor sit amet, consectateur adispicing elit. <br />
                    Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                </p>

                <div className="footer-icons">
                    {icons.map((icon, index) => {
                        const { icon: Icon, link, name } = icon;
                        return (
                            <a key={index} href={link}>
                                <Icon />
                            </a>
                        );
                    })}
                </div>
            </div>
        </footer>
    );
}

import './style.css';

function Footer () {
    return (
        <footer>
            <div class="footer__logo">GO</div>
            <p class="footer__desc">The all-in-one platform for modern city living. Urgency meets reliability in every action.</p>

            <div class="footer__socials">
                <div class="social-btn">
                <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                </div>
                <div class="social-btn">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20"/></svg>
                </div>
            </div>

            <div class="footer__col">
                <h4>Company</h4>
                <a href="#">About GO</a>
                <a href="#">Safety</a>
                <a href="#">Careers</a>
                <a href="#">Press</a>
            </div>

            <div class="footer__col">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Contact</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
            </div>

            <div class="footer__copy">© 2024 GO On-Demand. All rights reserved.</div>
        </footer>
    )
}

export 
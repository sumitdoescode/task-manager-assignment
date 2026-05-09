import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-8">
            <p className="text-center text-sm text-foreground/60">
                Built by{" "}
                <Link href="https://sumitdoescode.me" target="_blank" rel="noreferrer" className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground">
                    sumitdoescode
                </Link>
            </p>
        </footer>
    );
};

export default Footer;

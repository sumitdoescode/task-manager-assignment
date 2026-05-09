import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-4">
            <div className="mx-auto max-w-6xl">
                <p className="text-center text-sm text-foreground/60">
                    Built by{" "}
                    <Link href="https://sumitdoescode.me" target="_blank" rel="noreferrer" className="underline decoration-foreground/30 underline-offset-4 transition-colors hover:text-foreground">
                        sumitdoescode
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

import {FC} from "react";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import './globals.css'

const RootLayout: FC<
    Readonly<{
        children: React.ReactNode;
    }>
> = ({ children}) => {
    return (
        <html lang="en">
            <body>
                <div className={'container'}>
                    <Header />
                    {children}
                    <Footer />
                </div>
            </body>
        </html>
    );
}

export default RootLayout

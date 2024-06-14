import Footer from "@components/Footer/Footer";
import Section1 from "@components/Section1/Section1";
import Section2 from "@components/Section2/Section2";
import SectionPrice from "@components/SectionPrice/SectionPrice";

export default function MainPage() {
    return (
        <main className="relative flex flex-col items-center justify-between px-4">
            <Section1/>
            <Section2/>
            <SectionPrice/>
            <Footer/>
        </main>
    );
}

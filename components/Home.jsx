import {CowbellCard, FeederAceCard} from "./ProjectCard";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row justify-between p-6 md:p-10 min-h-screen gap-10 md:gap-0">
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">About me</h1>
                <p className="text-xl md:text-2xl">
                    I am a second-year Computer Engineering studying at the South Dakota
                    School of Mines and Technology. Confident in app development with frameworks
                    such as Flutter as well as embedded systems.
                </p>
            </div>

            <div className="flex flex-col gap-6 w-full md:w-1/3 items-center md:items-end">
                <CowbellCard/>
                <FeederAceCard/>
            </div>
        </div>
    );
}
import {NowPlaying} from "~/components/footer/now-playing";
import {ThemeToggle} from "~/components/theme/theme-toggle";

export function Footer() {
    return (
        <footer>
            <div className='w-full flex justify-between'>
            <NowPlaying />
                <ThemeToggle />
            </div>
        </footer>
    );
}
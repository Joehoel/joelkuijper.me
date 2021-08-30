import { useMediaQuery } from "react-responsive";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";
const Tailwind = resolveConfig(tailwindConfig as never);

export default function useBreakpoint(breakpoint: "xs" | "sm" | "xl" | "md" | "lg" | "2xl") {
    return useMediaQuery({
        query: `(min-width: ${Tailwind.theme.screens[breakpoint]})`,
    });
}

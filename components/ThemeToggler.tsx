import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
    <div>ThemeToggler</div>
    )
}

export default ThemeToggler
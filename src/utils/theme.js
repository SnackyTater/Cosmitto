export const addTheme = (theme) => document.body.classList.add(theme)
export const removeTheme = (theme) => document.body.classList.remove(theme)
export const getTheme = () => isThemeDark() ? 'dark' : ''

export const isThemeDark = () => document.body.classList.contains('dark')

export const toggleTheme = () => isThemeDark() ? removeTheme('dark') : addTheme('dark')
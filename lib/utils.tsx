export const isActiveLink = (href: string, currentPathname: string): boolean => {
    if (href === '/') {
        return href === currentPathname
    }

    return currentPathname.startsWith(href)
}


import { parseISO, format } from 'date-fns';

export default function Date({ dateString }:any) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}

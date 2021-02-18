import Link from '@material-ui/core/Link';
import React, { ReactNode } from 'react';

export function renderLinks(markdown: string): ReactNode {
    const linkCatcher = /\[(.+?)\]\((.+?)\)/g;
    const matches = markdown.matchAll(linkCatcher);

    if (matches === null) {
        return markdown;
    }

    let i = 0;
    let contents: ReactNode[] = [];

    for (const match of matches) {
        contents.push(markdown.substr(i, markdown.indexOf(match[0]) - i));
        contents.push(
            <Link href={match[2]} color="secondary">
                {match[1]}
            </Link>
        );
        i += markdown.indexOf(match[0]) + match[0].length;
    }

    contents.push(markdown.substr(i, markdown.length));

    return contents;
}

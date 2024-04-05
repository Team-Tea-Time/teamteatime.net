export function getPartsFromDocsID(docsID: string): Array<string> {
    const [project, version, group, page] = docsID.split('/');

    let cleanPage = page
        .replace('index.mdx', '')
        .replace('index.md', '')
        .replace('index.astro', '')
        .replace('.mdx', '')
        .replace('.md', '')
        .replace('.astro', '');

    let slug = group;
    if (cleanPage != '') slug += `/${cleanPage}`;

    return [ project, version, slug ];
}

export function slugToTitle(slug: string): string {
    switch (slug) {
        case 'api':
            return 'API';
        default:
            return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    }
}

export function titleToSlug(title: string): string {
    return title.toLowerCase().replace(/\s/g, '-');
}

export function getAbsolutePathFromParts(project: string, version: string, slug: string): string {
    return `/docs/${project}/${version}/${slug}`;
}
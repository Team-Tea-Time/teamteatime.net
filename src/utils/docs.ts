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

export function urlPartToTitle(slug: string): string {
    return slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

export function absolutePathFromParts(project: string, version: string, slug: string): string {
    return `/docs/${project}/${version}/${slug}`;
}
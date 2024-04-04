export interface NavGroup {
    heading: string;
    items: Array<NavItem>;
};

export interface NavItem {
    label: string;
    url: string;
    isActive: boolean;
};

export class Navigation {
    groups: Array<NavGroup> = [];

    addToGroup(groupName: string, item: NavItem) {
        let group = this.groups.find(g => g.heading === groupName);
        if (!group) {
            group = { heading: groupName, items: [] };
            this.groups.push(group);
        }
        group.items.push(item);
    }
}
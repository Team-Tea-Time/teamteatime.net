---
layout: "docs"
projects: "Laravel Forum"
versions: "5"
topics: "01:Web"
title: "Management"
weight: 2
---

## Management

### Categories

Once the package is installed, provided you are logged in, you can visit <your domain>/forum and start defining your category hierarchy using the 'Create category' button (also shown when viewing a category) and 'Manage' view. A category consists of the following properties:

* **Title:** The name of the category, used for both display and URL slugs.
* **Description:** A one-line description of the category. Displayed in listings and at the top of the category view.
* **Enable/disable threads:** Determines whether or not new threads can be created in the category.
* **Private:** Determines whether or not the category is private; when enabled, the category will only be visible to authenticated users who pass authorisation. If a private category is determined not to be visible to a user, all of its descendant categories (if it has any) are also hidden to that user.
* **Color:** The accent color to apply to the category.

These properties can be set on creation or modified afterwards when viewing the category.

> **In 5.1.0 onwards**
>
> The **Private** property determines access to all of the category's threads and child categories, even those set as public. A user cannot access a category if it has an ancestor with this property set to `true` and a `CategoryPolicy::view` ability check fails on that ancestor for the user.

### Threads

The following actions can be applied to a single thread:

* **Rename:** Change a thread's title.

The following actions can be applied to a single thread or a selection of multiple threads:

* **Lock/unlock:** Lock or unlock a thread, preventing or allowing new posts respectively. The `ThreadPolicy::reply` ability may allow a user to reply to a thread even when it's locked.
* **Pin/unpin:** Pin or unpin a thread. Pinned threads are labelled as such and are displayed at the top of lists.
* **Move:** Move a thread to a different category.
* **Delete:** Soft-delete a thread.
* **Restore:** Restore a soft-deleted thread.
* **Permanently delete:** Hard-delete a thread.

### Posts

The following actions can be applied to a single post:

* **Update:** Change the content of a post.

The following actions are available and can be applied to a single post or a selection of multiple posts:

* **Delete:** Soft-delete a post.
* **Restore:** Restore a soft-deleted post.
* **Permanently delete:** Hard-delete a post.

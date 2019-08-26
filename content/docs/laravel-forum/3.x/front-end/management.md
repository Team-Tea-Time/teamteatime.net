---
layout: "docs"
projects: "Laravel Forum"
versions: "3.x"
topics: "02:Front-end"
title: "Management"
weight: 5
---

## Management

### Categories

Once the package is installed, provided you are logged in, you can visit <your domain>/forum and start defining your category hierarchy using the "Create category" and "Category actions" panels. A category consists of the following properties:

* **Title:** The name of the category, used for both display and URL slugs.
* **Description:** A one-line description of the category. Displayed in listings and at the top of the category view.
* **Category:** The category's parent (if applicable).
* **Weight:** Determines the position of the category in listings.
* **Enable/disable threads:** Determines whether or not new threads can be created in the category.
* **Private:** Determines whether or not the category is private; when enabled, the category will only be visible to authenticated users who pass authorisation.

These properties can be set on creation or modified afterwards when viewing the category.

### Threads

The following actions are available and can be applied to a single thread when viewing it:

* **Move:** Move a thread to a different category.
* **Lock/unlock:** Lock or unlock a thread, preventing or allowing new posts respectively.
* **Pin/unpin:** Pin or unpin a thread. Pinned threads are labelled as such and are displayed at the top of lists.
* **Rename:** Change a thread's title.

### Posts

The following actions are available and can be applied to a single or multiple posts:

* **Delete:** Soft-delete post(s).
* **Restore:** Restore soft-deleted post(s).
* **Permanently delete:** Hard-delete post(s).

Posts can also be individually edited to modify their contents.

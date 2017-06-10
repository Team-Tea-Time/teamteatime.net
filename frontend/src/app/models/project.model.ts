import { ProjectCategory } from './project-category.model';

export class Project {
  _id: string;
  name: string;
  slug: string;
  category: ProjectCategory;
  images: string[];
  summary: string;
  url: string;
  documentation_repo: string;
  download_url: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

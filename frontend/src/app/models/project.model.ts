import { ProjectCategory } from './project-category.model';

export class Project {
  _id: string;
  name: string;
  slug: string;
  category_id: string;
  category: ProjectCategory;
  images: string[] = [];
  summary: string;
  url: string;
  source_repo: string;
  documentation_repo: string;
  download_url: string;
  tags: string[];
  created_at: string;
  updated_at: string;
}

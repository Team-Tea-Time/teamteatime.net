<?php namespace App\Repositories;

use App\Models\BlogPost;
use App\Repositories\Traits\Archivable as ArchivableTrait;
use App\Repositories\Traits\Taggable as TaggableTrait;
use Carbon\Carbon;

class BlogPosts extends BaseRepository
{

    use ArchivableTrait, TaggableTrait;

    public function __construct()
    {
        $this->model = new BlogPost;
        $this->pageLimit = 10;
    }

}

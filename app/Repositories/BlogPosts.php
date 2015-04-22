<?php namespace App\Repositories;

use App\Models\BlogPost;

class BlogPosts extends BaseRepository
{

    public function __construct()
    {
        $this->model = new BlogPost;
        $this->pageLimit = 10;
    }

    public function getAllTags($jsonEncode = true)
    {
        $tags = $this->model->existingTags();

        $tagNames = array();
        foreach ( $tags as $tag )
        {
            $tagNames[] = $tag->name;
        }

        if ($jsonEncode)
        {
            return json_encode($tagNames);
        }

        return $tagNames;
    }

}

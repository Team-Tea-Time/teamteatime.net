<?php namespace App\Repositories\Traits;

trait Taggable {

    public function getExistingTags()
    {
        return $this->model->existingTags();
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

<?php namespace App\Models\Traits;

trait Taggable {

    use \Conner\Tagging\TaggableTrait;

    public function getTagListAttribute()
    {
        return implode( ',', $this->tagNames() );
    }

}
